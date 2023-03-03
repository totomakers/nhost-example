import { useExampleQuery } from "./example.generated";

export const Example = () => {
  const { data, loading, error } = useExampleQuery();

  if (loading) {
    return null;
  }

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }

  return <div>{JSON.stringify(data)}</div>;
};
