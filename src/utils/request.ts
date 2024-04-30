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
