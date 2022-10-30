export interface NestjsPinoItem {
    req?: {
        id: string | number;
        method: string;
        url: string;
        query: Record<string, string>;
        params: Record<string, string>;
        headers: Record<string, string>;
        body: any;
    };
    statusCode: number;
    data: any;
}