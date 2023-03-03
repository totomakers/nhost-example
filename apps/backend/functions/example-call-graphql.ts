import { Request, Response } from "express";
import { callGraphqlClient } from "../src/modules/call-graphql-client";

export default (req: Request, res: Response) => {
  callGraphqlClient(req, res);
};
