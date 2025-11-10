onst fs = require("fs");
const path = require("path");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const logger = require("./logger");
const { validateInput, ValidationError } = require("./validator");
const { scrapeTrends } = require("./scraper");
const { DEFAULT_INPUT_FILE, DEFAULT_OUTPUT_FILE } = require("./config");

async function readJsonFile(filePath) {
const fullPath = path.resolve(filePath);
const raw = await fs.promises.readFile(fullPath, "utf8");
return JSON.parse(raw);
}

async function writeJsonFile(filePath, data) {
const fullPath = path.resolve(filePath);
const dir = path.dirname(fullPath);
await fs.promises.mkdir(dir, { recursive: true });
const json = JSON.stringify(data, null, 2);
await fs.promises.writeFile(fullPath, json, "utf8");
}

async function main() {
const argv = yargs(hideBin(process.argv))
.option("region", {
type: "string",
describe: "Two-character region code (e.g., US, VN)."
})
.option("limit", {
type: "number",
describe: "Limit for number of scraped results."
})
.option("isDownloadVideo", {
type: "boolean",
default: undefined,
describe: "Whether to download (resolve) no-watermark video URLs."
})
.option("isDownloadVideoCover", {
type: "boolean",
default: undefined,
describe: "Whether to resolve video cover image URLs."
})
.option("input", {
alias: "i",
type: "string",
describe: "Path to JSON file with input parameters."
})
.option("output", {
alias: "o",
type: "string",
describe: "Path to JSON file where results will be saved."
})
.option("use-sample-input", {
type: "boolean",
default: false,
describe: "Use bundled input_example.json as the input source."
})
.help()
.alias("help", "h")
.parse();

try {
let rawInput;

if (argv.input) {
logger.info(`Using input file: ${argv.input}`);
rawInput = await readJsonFile(argv.input);
} else if (argv["use-sample-input"]) {
logger.info(`Using sample input file: ${DEFAULT_INPUT_FILE}`);
rawInput = await readJsonFile(DEFAULT_INPUT_FILE);
} else {
// Build from CLI flags
rawInput = {
region: argv.region,
limit: argv.limit,
isDownloadVideo: argv.isDownloadVideo,
isDownloadVideoCover: argv.isDownloadVideoCover
};
}

const validatedInput = validateInput(rawInput);

const results = await scrapeTrends(validatedInput);

const outputPath = argv.output || DEFAULT_OUTPUT_FILE;
await writeJsonFile(outputPath, results);

logger.info(`Wrote ${results.length} records to ${outputPath}`);
// Also print to stdout for pipeline usage
process.stdout.write(JSON.stringify(results, null, 2) + "\n");
} catch (err) {
if (err instanceof ValidationError) {
logger.error(`Input validation failed: ${err.message}`);
process.exitCode = 1;
return;
}

logger.error("Unexpected error while running scraper.", err);
process.exitCode = 1;
}
}

if (require.main === module) {
main();
}