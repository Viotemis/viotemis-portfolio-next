import { revalidateTag } from "next/cache";

export const dynamic = "force-dynamic";

export function GET(request: Request) {
  console.log("revalidating");
  revalidateTag("sanity");
  return new Response("success");
}
