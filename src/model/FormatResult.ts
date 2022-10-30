export interface FormatResult {
    tags: Array<{
        title: string,
        type: "success" | 'info' | 'warning' | 'danger' | '';
    }>;
    title?: {
        content: string,
        type: "success" | 'info' | 'warning' | 'danger' | '';
    } | null;
    body?: {
        content: string,
        type: "success" | 'info' | 'warning' | 'danger' | '';
    } | null;
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
    titles: Array<{
        content: string,
        type: "success" | 'info' | 'warning' | 'danger' | '';
    }>;
    bodys: Array<{
        content: string,
        type: "success" | 'info' | 'warning' | 'danger' | '';
    }>;
    jsonList: Array<{
        data: object;
        title: string;
    }>;
}