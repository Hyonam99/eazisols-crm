/**Interfaces are prefixed with a capital letter I for unique identification */
import { z } from "zod";
import type { LoginSchema } from "@utils/validators";

type LoginFormPayload = z.infer<typeof LoginSchema>;

export type { LoginFormPayload };
