onst { MAX_LIMIT } = require("./config");

class ValidationError extends Error {
constructor(message) {
super(message);
this.name = "ValidationError";
}
}

/**
* Validates raw input, throws ValidationError if invalid.
* Returns a normalized copy of input.
*/
function validateInput(raw) {
if (typeof raw !== "object" || raw === null || Array.isArray(raw)) {
throw new ValidationError("Input must be a JSON object.");
}

const normalized = {};

// region
if (raw.region !== undefined) {
if (typeof raw.region !== "string") {
throw new ValidationError("`region` must be a string.");
}
const trimmed = raw.region.trim().toUpperCase();
if (trimmed.length !== 2) {
throw new ValidationError("`region` must be a two-character region code (e.g., US, VN).");
}
normalized.region = trimmed;
} else {
throw new ValidationError("`region` is required.");
}

// limit
if (raw.limit === undefined) {
throw new ValidationError("`limit` is required.");
}
if (typeof raw.limit !== "number" || !Number.isInteger(raw.limit)) {
throw new ValidationError("`limit` must be an integer.");
}
if (raw.limit <= 0) {
throw new ValidationError("`limit` must be greater than 0.");
}
if (raw.limit > MAX_LIMIT) {
throw new ValidationError(`\`limit\` must be <= ${MAX_LIMIT}.`);
}
normalized.limit = raw.limit;

// isDownloadVideo
if (raw.isDownloadVideo === undefined) {
normalized.isDownloadVideo = true;
} else if (typeof raw.isDownloadVideo !== "boolean") {
throw new ValidationError("`isDownloadVideo` must be a boolean.");
} else {
normalized.isDownloadVideo = raw.isDownloadVideo;
}

// isDownloadVideoCover
if (raw.isDownloadVideoCover === undefined) {
normalized.isDownloadVideoCover = false;
} else if (typeof raw.isDownloadVideoCover !== "boolean") {
throw new ValidationError("`isDownloadVideoCover` must be a boolean.");
} else {
normalized.isDownloadVideoCover = raw.isDownloadVideoCover;
}

return normalized;
}

module.exports = {
validateInput,
ValidationError
};