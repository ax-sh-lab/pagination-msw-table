export function JSONViewer({
  data,
}: {
  data: Record<string, unknown> | Record<string, unknown>[];
}) {
  return <pre>{JSON.stringify(data, null, 4)}</pre>;
}
