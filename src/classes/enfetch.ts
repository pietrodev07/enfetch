import { DefaultRequestConfig } from "../types";

export class enfetch {
  protected defaultConfig: DefaultRequestConfig;

  public constructor(config: DefaultRequestConfig = {}) {
    this.defaultConfig = { ...config };
  }
}
