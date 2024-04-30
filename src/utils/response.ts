import { ResponseSchema } from "../types";

const contentTypeHandlers = {
  json: {
    pattern: /application\/json/,
    action: (response: Response) => response.json(),
  },
  text: {
    pattern: /text/,
    action: (response: Response) => response.text(),
  },
  blob: {
    pattern: /application\/octet-stream\/image\/audio\/video/,
    action: (response: Response) => response.blob(),
  },
};

const parseResponse = (response: Response) => {
  const contentType = response.headers.get("content-type");

  for (const type in contentTypeHandlers) {
    if (contentType && contentTypeHandlers[type].pattern.test(contentType)) {
      return contentTypeHandlers[type].action(response);
    }
  }

  throw new Error(`Unsupported content type: ${contentType}`);
};

export const generateResponse = async <D>(
  response: Response
): Promise<ResponseSchema<D>> => ({
  data: await parseResponse(response),
  status: response.status,
  statusText: response.statusText,
  headers: response.headers,
  url: response.url,
});
