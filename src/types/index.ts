import { ZodType } from "zod";

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

export interface RequestSchema<B> extends Omit<RequestInit, "body"> {
  timeout?: number;
  maxRetries?: number;
  retryDelay?: number;
  body?: B;
  schema?: ZodType;
}
