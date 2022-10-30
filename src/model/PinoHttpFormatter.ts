import type { BaseLogItem } from "./BaseLogItem";
import type { NestjsPinoItem } from "./NestPinoItem";
import type { FormatResult } from './FormatResult';
/**
 * Log with request data
 */
export function pinoHttpFormat(data: Record<string, any> & BaseLogItem & Partial<NestjsPinoItem>) {
    if (data.req == null) {
        return null;
    }
    let result: FormatResult = {
        tags: [],
        title: null,
        body: null,
        jsonList: []
    };

    if (data.statusCode) {
        result.tags.push(String(data.statusCode));
    }

    result.tags.push(data.req.method);
    result.title = `${data.req.method} ${data.req.url}`;
    if (Object.keys(data.req.query).length > 0)
        result.jsonList.push({
            title: 'Req Query',
            data: data.req.query
        });
    if (Object.keys(data.req.params).length > 0)
        result.jsonList.push({
            title: 'Req params',
            data: data.req.params
        });
    if (Object.keys(data.req.body).length > 0)
        result.jsonList.push({
            title: 'Req Body',
            data: data.req.body
        });
    result.jsonList.push({
        title: 'Req Headers',
        data: data.req.headers
    });
    if (data.data) {
        result.jsonList.push({
            title: 'Res Body',
            data: data.data
        });
    }
    return result;
}