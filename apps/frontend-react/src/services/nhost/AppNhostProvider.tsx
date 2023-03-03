import { InMemoryCache } from "@apollo/client";
import { NhostProvider } from "@nhost/react";
import { NhostApolloProvider } from "@nhost/react-apollo";
import { ReactNode } from "react";

import introspectionResult from "../graphql/introspection-result";
import { nhost } from "./nhost";

export type AppNhostProviderProps = {
  children?: ReactNode;
};

export const AppNhostProvider = ({ children }: AppNhostProviderProps) => {
  return (
    <NhostProvider nhost={nhost}>
      <NhostApolloProvider
        nhost={nhost}
        cache={
          new InMemoryCache({
            possibleTypes: introspectionResult.possibleTypes,
          })
        }
      >
        {children}
      </NhostApolloProvider>
    </NhostProvider>
  );
};
