export abstract class HttpAdpater {
    abstract get<T>( url: string, options?: Record<any, unknown> ): Promise<T>;
}