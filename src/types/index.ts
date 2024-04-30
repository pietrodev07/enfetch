export interface DefaultRequestConfig extends Omit<RequestInit, "body"> {
  timeout?: number;
  maxRetries?: number;
  retryDelay?: number;
}
