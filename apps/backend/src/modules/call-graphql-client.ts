import { gql } from "graphql-request";
import { graphqlClient } from "./graphql/graphql-client";
import { routeHandler } from "./utils/router-handler";

const GQL_EXAMPLE_REQUEST = gql`
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
  const resp = await graphqlClient.exampleRequest({
    limit: 2,
  });

  res.status(200).send(resp.example_data);
});
