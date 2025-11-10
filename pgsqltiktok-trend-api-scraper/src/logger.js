onst LOG_LEVELS = ["error", "warn", "info", "debug"];

function getLogLevel() {
  const level = (process.env.LOG_LEVEL || "info").toLowerCase();
  return LOG_LEVELS.includes(level) ? level : "info";
}

const CURRENT_LEVEL = getLogLevel();

function shouldLog(level) {
  return LOG_LEVELS.indexOf(level) <= LOG_LEVELS.indexOf(CURRENT_LEVEL);
}

function formatMessage(level, message) {
  const ts = new Date().toISOString();
  return `[${ts}] [${level.toUpperCase()}] ${message}`;
}

const logger = {
  error(message, err) {
    if (!shouldLog("error")) return;
    const base = formatMessage("error", message);
    if (err) {
      console.error(`${base} - ${err.message || err}`);
      if (err.stack) {
        console.error(err.stack);
      }
    } else {
      console.error(base);
    }
  },

  warn(message) {
    if (!shouldLog("warn")) return;
    console.warn(formatMessage("warn", message));
  },

  info(message) {
    if (!shouldLog("info")) return;
    console.log(formatMessage("info", message));
  },

  debug(message) {
    if (!shouldLog("debug")) return;
    console.log(formatMessage("debug", message));
  }
};

module.exports = logger;