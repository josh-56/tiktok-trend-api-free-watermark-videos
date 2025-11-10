onst path = require("path");
const { validateInput, ValidationError } = require("../src/validator");
const { scrapeTrends } = require("../src/scraper");
const { DEFAULT_DATASET_FILE } = require("../src/config");

describe("validator.validateInput", () => {
  test("accepts valid input", () => {
    const raw = {
      region: "us",
      limit: 10,
      isDownloadVideo: true,
      isDownloadVideoCover: false
    };

    const normalized = validateInput(raw);

    expect(normalized.region).toBe("US");
    expect(normalized.limit).toBe(10);
    expect(normalized.isDownloadVideo).toBe(true);
    expect(normalized.isDownloadVideoCover).toBe(false);
  });

  test("throws on missing region", () => {
    const raw = {
      limit: 10,
      isDownloadVideo: true
    };

    expect(() => validateInput(raw)).toThrow(ValidationError);
  });

  test("throws on invalid limit", () => {
    const raw = {
      region: "US",
      limit: -5
    };

    expect(() => validateInput(raw)).toThrow(ValidationError);
  });
});

describe("scraper.scrapeTrends", () => {
  const datasetPath = path.resolve(DEFAULT_DATASET_FILE);

  test("filters by region and limit", async () => {
    const input = {
      region: "VN",
      limit: 1,
      isDownloadVideo: true,
      isDownloadVideoCover: true
    };

    const results = await scrapeTrends(input, { datasetPath });

    expect(Array.isArray(results)).toBe(true);
    expect(results.length).toBeLessThanOrEqual(1);
    if (results.length > 0) {
      expect(results[0].author.region.toUpperCase()).toBe("VN");
      expect(results[0]).toHaveProperty("download");
    }
  });

  test("returns empty array for region with no matches", async () => {
    const input = {
      region: "ZZ",
      limit: 10,
      isDownloadVideo: true,
      isDownloadVideoCover: true
    };

    const results = await scrapeTrends(input, { datasetPath });

    expect(Array.isArray(results)).toBe(true);
    expect(results.length).toBe(0);
  });
});