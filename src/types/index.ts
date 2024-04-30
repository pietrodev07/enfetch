export interface DefaultRequestConfig extends Omit<RequestInit, "body"> {
  timeout?: number;
  maxRetries?: number;
  retryDelay?: number;
}

export interface ResponseSchema<D> {
  status: number;
  statusText: string;
  headers: HeadersInit;
  data: D;
  url: string;
}
