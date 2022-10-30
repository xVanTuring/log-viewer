import type { BaseLogItem } from "./BaseLogItem";
import type { FormatResult } from "./FormatResult";
import { LogLevelStr } from "./LogLevel";
import type { NestjsPinoItem } from "./NestPinoItem";

export function baseFormat(data: Record<string, any> & BaseLogItem & Partial<NestjsPinoItem>) {
    let result: FormatResult = {
        tags: [],
        title: null,
        body: null,
        jsonList: []
    };
    result.tags.push(LogLevelStr(data.level));
    // result.tags.push(dayjs(data.time).format());
    if (data.context) {
        result.tags.push(data.context);
    }
    if (data.msg) {
        const msg = data.msg.trim();
        const lines = msg.split('\n');
        const title = lines.shift();
        result.title = title;
        if (lines.length > 0) {
            result.body = lines.join('\n');
        }
    }
    result.jsonList.push({
        title: 'All',
        data: data
    });
    return result;
}