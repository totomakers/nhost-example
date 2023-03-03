import { Request, Response } from "express";
import { callGraphqlClient } from "../src/modules/use-graphql-client";

export default (req: Request, res: Response) => {
  callGraphqlClient(req, res);
};
