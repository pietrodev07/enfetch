# enfetch

Enfetch is a lightweight, simple and flexible fetch wrapper for Javascript!

- ➖ Direct access to methods
- 💪 Flexible any method
- 🎯 Directly response data
- ⚙️ Configuration for the library
- 🔣 Typification of the body and response data
- ✅ Validation of the response data with zod

## Installation

```bash
pnpm install enfetch
```

_Alternatively, you can use your favorite package manager._

## Getting Started

To use enfetch in your project, import it and create an instance of the `Enfetch` class:

```ts
import { Enfetch } from "enfetch";

const enfetch = new Enfetch();
```

## Making HTTP requests

Enfetch provides easy-to-use methods to make HTTP requests. For example, to make a GET request:

```ts
const url = "[url]";

const response = await enfetch.get(url);
console.log(response.data);
```

Similarly, you can use the `post`, `put`, `delete` and others methods for corresponding HTTP methods.

### Custom Method

If you need to make an HTTP request with a custom method, you can use the `any` method:

```ts
const customMethod = "CUSTOM";
const url = "[url]";

const response = await enfetch.any(url, method);
console.log(response.data);
```

## Configuration

You can modify default configuration values while creating the Enfetch instance:

```ts
const customConfig = {
  timeout: 5000,
  maxRetries: 5,
  retryDelay: 2000,
};

const enfetch = new Enfetch(customConfig);
```

The `customConfig` object allows you to set the `timeout` for requests, specify the number of `maxRetries` for failed requests, and set a `retryDelay` between retries.

## Contributions

Contributions are always welcome! Feel free to create issues following the rules in the `CONTRIBUTING.md` file!

## License

Enfetch is released under the **MIT License**
