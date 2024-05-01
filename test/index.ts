import { Enfetch } from "../src";
import { ResTodo, resTodoSchema } from "./types";

const http = new Enfetch();

/* GET WITHOUT ZOD */
const withoutZod = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts/1";
  const response = await http.get<ResTodo>(url);
  console.log(response.data);
};

/* GET WITH ZOD */
const withZod = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts/1";
  const response = await http.get<ResTodo>(url, { schema: resTodoSchema });
  console.log(response.data);
};

const runTests = async () => {
  await withoutZod();
  await withZod();
};

runTests();
