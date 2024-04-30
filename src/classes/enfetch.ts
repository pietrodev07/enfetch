import { DefaultRequestConfig, RequestSchema } from "../types";
import { request } from "../utils/request";

export class enfetch {
  protected defaultConfig: DefaultRequestConfig;

  public constructor(config: DefaultRequestConfig = {}) {
    this.defaultConfig = { ...config };
  }

  public async get<D>(url: string, options?: RequestSchema<null>) {
    return request<null, D>(url, {
      method: "GET",
      ...options,
      ...this.defaultConfig,
    });
  }

  public async head<D>(url: string, options?: RequestSchema<null>) {
    return request<null, D>(url, {
      method: "HEAD",
      ...options,
      ...this.defaultConfig,
    });
  }

  public async options<D>(url: string, options?: RequestSchema<null>) {
    return request<null, D>(url, {
      method: "OPTIONS",
      ...options,
      ...this.defaultConfig,
    });
  }

  public async connect<D>(url: string, options?: RequestSchema<null>) {
    return request<null, D>(url, {
      method: "CONNECT",
      ...options,
      ...this.defaultConfig,
    });
  }

  public async delete<D>(url: string, options?: RequestSchema<null>) {
    return request<null, D>(url, {
      method: "DELETE",
      ...options,
      ...this.defaultConfig,
    });
  }

  public async post<B, D>(url: string, options?: RequestSchema<B>) {
    return request<B, D>(url, {
      method: "POST",
      ...options,
      ...this.defaultConfig,
    });
  }
}
