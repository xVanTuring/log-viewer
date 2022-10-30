import type { BaseLogItem } from "./BaseLogItem";
import type { FormatResult } from "./FormatResult";
import type { NestjsPinoItem } from "./NestPinoItem";

export function errorFormat(data: Record<string, any> & BaseLogItem & Partial<NestjsPinoItem>) {
    if (data.err == null) {
        return null;
    }
    let result: FormatResult = {
        tags: [],
        title: null,
        body: null,
        jsonList: []
    };
    result.title = {
        type: 'danger',
        content: data.err.message!
    };
    result.body = {
        type: 'danger',
        content: data.err.stack!
    };

    return result;
}