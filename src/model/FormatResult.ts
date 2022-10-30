export interface FormatResult {
    tags: string[];
    title?: string | null;
    body?: string | null;
    jsonList: Array<{
        data: object;
        title: string;
    }>;
}
export interface FormatResultArray {
    tags: string[];
    titles: Array<string>;
    bodys: string[];
    jsonList: Array<{
        data: object;
        title: string;
    }>;
}