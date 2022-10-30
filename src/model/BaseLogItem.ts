import type { LogLevel } from "./LogLevel";

export interface BaseLogItem {
    context?: string;
    level: LogLevel;
    time: number;
    msg?: string;
    err?: { type: string; message?: string, stack?: string; };
}