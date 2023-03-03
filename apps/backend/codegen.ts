import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: {
    "http://localhost:1337/v1/graphql": {
      headers: {
        "x-hasura-admin-secret": "nhost-admin-secret",
      },
    },
  },
  documents: ["src/**/*.ts", "functions/**/*.ts"],
  generates: {
    ["src/schema.graphql"]: {
      plugins: ["schema-ast"],
    },

    ["src/modules/graphql/sdk.ts"]: {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
    },
  },
};

export default config;
