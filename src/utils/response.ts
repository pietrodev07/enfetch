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
