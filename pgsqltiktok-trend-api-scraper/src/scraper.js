onst fs = require("fs");
const path = require("path");
const logger = require("./logger");
const { DEFAULT_DATASET_FILE } = require("./config");

/**
* Loads the sample dataset from disk.
*/
function loadDataset(datasetPath = DEFAULT_DATASET_FILE) {
const fullPath = path.resolve(datasetPath);
logger.debug(`Loading dataset from: ${fullPath}`);

const raw = fs.readFileSync(fullPath, "utf8");
const parsed = JSON.parse(raw);

if (!Array.isArray(parsed)) {
throw new Error("Dataset must be an array of records.");
}

return parsed;
}

/**
* Simulated TikTok trend scraper.
* In a real environment this would hit TikTok endpoints or a proxy API.
* Here we filter and slice the local dataset to behave like a scraper.
*/
async function scrapeTrends(input, options = {}) {
const { region, limit, isDownloadVideo, isDownloadVideoCover } = input;
const datasetPath = options.datasetPath || DEFAULT_DATASET_FILE;

logger.info(
`Scraping trends for region=${region}, limit=${limit}, downloadVideo=${isDownloadVideo}, downloadCover=${isDownloadVideoCover}`
);

const data = loadDataset(datasetPath);

const filtered = data.filter((record) => {
if (!record.author || !record.author.region) return false;
return record.author.region.toUpperCase() === region.toUpperCase();
});

logger.debug(`Found ${filtered.length} records for region ${region} in dataset.`);

const sliced = filtered.slice(0, limit);

const enriched = sliced.map((record) => {
const result = { ...record };
result.download = {};

if (isDownloadVideo && record.video_url_no_watermark) {
result.download.video = record.video_url_no_watermark;
}

if (isDownloadVideoCover && record.cover_url) {
result.download.cover = record.cover_url;
}

return result;
});

logger.info(`Returning ${enriched.length} records after applying limit and download flags.`);
return enriched;
}

module.exports = {
scrapeTrends,
loadDataset
};