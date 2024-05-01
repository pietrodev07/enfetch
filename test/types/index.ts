import { z } from "zod";

export const resTodoSchema = z.object({
  userId: z.number(),
  id: z.number(),
  title: z.string(),
  body: z.string(),
});

export type ResTodo = z.infer<typeof resTodoSchema>;
