import type { RequestSchema, ResponseSchema } from "../types";
import { generateResponse } from "./response";

const parseBody = <B>(body: B) => {
  if (body) {
    switch (typeof body) {
      case "object":
        return JSON.stringify(body);
      case "string":
        return body;
    }
  }

  return null;
};

export const request = async <B, D>(
  url: string,
  options: RequestSchema<B>
): Promise<ResponseSchema<D>> => {
  const parsedBody = parseBody<B>(options.body || null);

  let retries = 0;
  const maxRetries = options.maxRetries || 1;
  const retryDelay = options.retryDelay || 1000;

  while (retries < maxRetries) {
    try {
      const response = await fetch(url, {
        ...options,
        body: parsedBody,
      } as RequestInit);

      const responseSchema = await generateResponse<D>(response);

      if (options.schema) {
        return {
          ...responseSchema,
          data: options.schema.parse(responseSchema.data),
        };
      }

      return responseSchema;
    } catch (e) {
      retries++;

      if (retries < maxRetries) {
        await new Promise((resolve) => setTimeout(resolve, retryDelay));
      } else {
        throw e;
      }
    }
  }
};
