export async function loader() {
  return new Response(null, { status: 404 });
}

export default function NotFound() {
  return null;
}
