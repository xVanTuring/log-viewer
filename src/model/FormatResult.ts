export interface FormatResult {
    tags: Array<{
        title: string,
        type: "success" | 'info' | 'warning' | 'danger' | '';
    }>;
    title?: string | null;
    body?: string | null;
    jsonList: Array<{
        data: object;
        title: string;
    }>;
}
export interface FormatResultArray {
    tags: Array<{
        title: string,
        type: "success" | 'info' | 'warning' | 'danger' | '';
    }>;
    titles: Array<string>;
    bodys: string[];
    jsonList: Array<{
        data: object;
        title: string;
    }>;
}