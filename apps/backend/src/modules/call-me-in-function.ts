import { nanoid } from "nanoid";
import { routeHandler } from "./utils/router-handler";

export const callMeInFunction = routeHandler((req, res) => {
  res.status(200).end(`HELLO ${nanoid()}`);
});
