export function JSONViewer({ data }: { data: object }) {
  return <pre>{JSON.stringify(data, null, 4)}</pre>;
}
