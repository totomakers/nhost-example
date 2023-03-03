import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: {
    "http://localhost:1337/v1/graphql": {
      headers: {
        "x-hasura-admin-secret": "nhost-admin-secret",
      },
    },
  },
  generates: {
    ["src/schema.graphql"]: {
      plugins: ["schema-ast"],
    },
  },
};

export default config;
