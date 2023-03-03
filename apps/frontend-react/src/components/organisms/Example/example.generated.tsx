import * as Types from '../../../services/graphql/types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type ExampleQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type ExampleQuery = { __typename?: 'query_root', example_data: Array<{ __typename?: 'example_data', id: any, column_1: any, column_2: string, column_3: string, column_4: any }> };


export const ExampleDocument = gql`
    query Example {
  example_data(limit: 1) {
    id
    column_1
    column_2
    column_3
    column_4
  }
}
    `;

/**
 * __useExampleQuery__
 *
 * To run a query within a React component, call `useExampleQuery` and pass it any options that fit your needs.
 * When your component renders, `useExampleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useExampleQuery({
 *   variables: {
 *   },
 * });
 */
export function useExampleQuery(baseOptions?: Apollo.QueryHookOptions<ExampleQuery, ExampleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ExampleQuery, ExampleQueryVariables>(ExampleDocument, options);
      }
export function useExampleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ExampleQuery, ExampleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ExampleQuery, ExampleQueryVariables>(ExampleDocument, options);
        }
export type ExampleQueryHookResult = ReturnType<typeof useExampleQuery>;
export type ExampleLazyQueryHookResult = ReturnType<typeof useExampleLazyQuery>;
export type ExampleQueryResult = Apollo.QueryResult<ExampleQuery, ExampleQueryVariables>;