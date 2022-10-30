import { baseFormat } from "./BaseFormatter";
import type { BaseLogItem } from "./BaseLogItem";
import type { FormatResult, FormatResultArray } from "./FormatResult";
import type { NestjsPinoItem } from "./NestPinoItem";
import { pinoHttpFormat } from "./PinoHttpFormatter";
import { errorFormat } from "./WithErrFormatter";

export function format(data: Record<string, any> & BaseLogItem & Partial<NestjsPinoItem>) {
    const arr: FormatResult[] = [];
    let result: FormatResultArray = {
        tags: [],
        bodys: [],
        titles: [],
        jsonList: []
    };
    const base = baseFormat(data);
    arr.push(base);
    const error = errorFormat(data);
    if (error) {
        arr.push(error);
    }
    const pinoHttp = pinoHttpFormat(data);
    if (pinoHttp)
        arr.push(pinoHttp);
    arr.forEach((item) => {
        result.tags.push(...item.tags);
        result.jsonList.push(...item.jsonList);
        if (item.body) {
            result.bodys.push(item.body);
        }
        if (item.title) {
            result.titles.push(item.title);
        }
    });

    return result;
}