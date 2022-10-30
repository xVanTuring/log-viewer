import type { BaseLogItem } from "./BaseLogItem";
import type { FormatResult } from "./FormatResult";
import { LogLevelStr } from "./LogLevel";
import type { NestjsPinoItem } from "./NestPinoItem";
const dict: Record<string, 'info' | 'success' | 'danger' | 'warning'> = {
    debug: 'info',
    error: 'danger',
    warn: 'warning'
};

export function baseFormat(data: Record<string, any> & BaseLogItem & Partial<NestjsPinoItem>) {
    let result: FormatResult = {
        tags: [],
        title: null,
        body: null,
        jsonList: []
    };
    result.tags.push({
        title: LogLevelStr(data.level),
        type: dict[LogLevelStr(data.level).toLowerCase()] ?? 'success'
    });
    if (data.context) {
        result.tags.push({
            title: data.context,
            type: 'info'
        });
    }
    if (data.msg) {
        const msg = data.msg.trim();
        const lines = msg.split('\n');
        const title = lines.shift();
        result.title = {
            content: title!,
            type: 'success'
        };
        if (lines.length > 0) {
            result.body = {
                content: lines.join('\n'),
                type: 'success'
            };
        }
    }
    result.jsonList.push({
        title: 'All',
        data: data
    });
    return result;
}