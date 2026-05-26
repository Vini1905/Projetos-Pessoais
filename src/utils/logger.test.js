import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

describe('logger', () => {
  let originalEnv

  beforeEach(() => {
    originalEnv = import.meta.env.VITE_APP_LOG_LEVEL
    vi.spyOn(console, 'debug').mockImplementation(() => {})
    vi.spyOn(console, 'info').mockImplementation(() => {})
    vi.spyOn(console, 'warn').mockImplementation(() => {})
    vi.spyOn(console, 'error').mockImplementation(() => {})
  })

  afterEach(() => {
    import.meta.env.VITE_APP_LOG_LEVEL = originalEnv
    vi.restoreAllMocks()
    vi.resetModules()
  })

  it('logs error messages when log level is error', async () => {
    import.meta.env.VITE_APP_LOG_LEVEL = 'error'
    const { default: logger } = await import('./logger.js')
    logger.error('test error')
    expect(console.error).toHaveBeenCalledWith('[ERROR]', 'test error')
  })

  it('does not log debug when level is error', async () => {
    import.meta.env.VITE_APP_LOG_LEVEL = 'error'
    const { default: logger } = await import('./logger.js')
    logger.debug('test debug')
    expect(console.debug).not.toHaveBeenCalled()
  })

  it('logs all levels when log level is debug', async () => {
    import.meta.env.VITE_APP_LOG_LEVEL = 'debug'
    const { default: logger } = await import('./logger.js')
    logger.debug('d')
    logger.info('i')
    logger.warn('w')
    logger.error('e')
    expect(console.debug).toHaveBeenCalledWith('[DEBUG]', 'd')
    expect(console.info).toHaveBeenCalledWith('[INFO]', 'i')
    expect(console.warn).toHaveBeenCalledWith('[WARN]', 'w')
    expect(console.error).toHaveBeenCalledWith('[ERROR]', 'e')
  })

  it('defaults to info level when env var is not set', async () => {
    import.meta.env.VITE_APP_LOG_LEVEL = undefined
    const { default: logger } = await import('./logger.js')
    logger.debug('should not appear')
    logger.info('should appear')
    expect(console.debug).not.toHaveBeenCalled()
    expect(console.info).toHaveBeenCalledWith('[INFO]', 'should appear')
  })

  it('suppresses info and debug when level is warn', async () => {
    import.meta.env.VITE_APP_LOG_LEVEL = 'warn'
    const { default: logger } = await import('./logger.js')
    logger.debug('d')
    logger.info('i')
    logger.warn('w')
    logger.error('e')
    expect(console.debug).not.toHaveBeenCalled()
    expect(console.info).not.toHaveBeenCalled()
    expect(console.warn).toHaveBeenCalledWith('[WARN]', 'w')
    expect(console.error).toHaveBeenCalledWith('[ERROR]', 'e')
  })

  it('suppresses debug and warn when level is info', async () => {
    import.meta.env.VITE_APP_LOG_LEVEL = 'info'
    const { default: logger } = await import('./logger.js')
    logger.debug('d')
    logger.info('i')
    logger.warn('w')
    expect(console.debug).not.toHaveBeenCalled()
    expect(console.info).toHaveBeenCalledWith('[INFO]', 'i')
    expect(console.warn).toHaveBeenCalledWith('[WARN]', 'w')
  })
})
