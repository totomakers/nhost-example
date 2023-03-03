import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "../backend/src/schema.graphql",

  generates: {
    "src/services/graphql/types.ts": {
      plugins: ["typescript"],
    },
    "src/services/graphql/introspection-result.ts": {
      plugins: ["fragment-matcher"],
    },
    "src/": {
      documents: "src/**/*.graphql",
      preset: "near-operation-file",
      presetConfig: {
        baseTypesPath: "services/graphql/types.ts",
        extension: ".generated.tsx",
      },
      plugins: ["typescript-operations", "typescript-react-apollo"],
    },
  },
};

export default config;
