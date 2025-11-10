onst path = require("path");

const ROOT_DIR = path.join(__dirname, "..");

module.exports = {
  ROOT_DIR,
  DEFAULT_INPUT_FILE: path.join(ROOT_DIR, "input_example.json"),
  DEFAULT_DATASET_FILE: path.join(ROOT_DIR, "dataset", "sample_output.json"),
  DEFAULT_OUTPUT_FILE: path.join(ROOT_DIR, "dataset", "scraped_output.json"),
  MAX_LIMIT: 1000
};