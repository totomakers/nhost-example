import { Request, Response } from "express";
import { callMeInFunction } from "../src/modules/call-me-in-function";

export default (req: Request, res: Response) => {
  callMeInFunction(req, res);
};
