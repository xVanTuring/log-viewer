export enum LogLevel {
    trace = 10,
    debug = 20,
    info = 30,
    warn = 40,
    error = 50,
    fatal = 60
}
const nameDict: Record<LogLevel, string> = {
    [LogLevel.trace]: 'Trace',
    [LogLevel.debug]: 'Debug',
    [LogLevel.info]: 'Info',
    [LogLevel.warn]: 'Warn',
    [LogLevel.error]: 'Error',
    [LogLevel.fatal]: 'Fatal',
};
export function LogLevelStr(level: LogLevel) {
    return nameDict[level];
}