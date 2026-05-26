const LOG_LEVELS = { debug: 0, info: 1, warn: 2, error: 3 }

const currentLevel =
  LOG_LEVELS[import.meta.env.VITE_APP_LOG_LEVEL] ?? LOG_LEVELS.info

function shouldLog(level) {
  return LOG_LEVELS[level] >= currentLevel
}

const logger = {
  debug: (...args) => {
    if (shouldLog('debug')) console.debug('[DEBUG]', ...args)
  },
  info: (...args) => {
    if (shouldLog('info')) console.info('[INFO]', ...args)
  },
  warn: (...args) => {
    if (shouldLog('warn')) console.warn('[WARN]', ...args)
  },
  error: (...args) => {
    if (shouldLog('error')) console.error('[ERROR]', ...args)
  },
}

export default logger
