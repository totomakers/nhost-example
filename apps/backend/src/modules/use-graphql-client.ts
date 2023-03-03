import { gql } from "gql";
import { nhost } from "./nhost/nhost-client";
import { routeHandler } from "./utils/router-handler";

const exampleRequest = gql`
  query exampleRequest($limit: Int) {
    example_data(limit: $limit) {
      id
      column_1
      column_2
      column_3
      column_4
    }
  }
`;

export const callGraphqlClient = routeHandler(async (req, res) => {
  // Call graphql client to list all data
  const resp = await nhost.graphql.request(exampleRequest, {
    limit: 2,
  });

  res.status(200).send(resp.data);
});
