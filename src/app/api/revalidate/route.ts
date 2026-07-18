import { revalidateTag } from "next/cache";
import { NextResponse, type NextRequest } from "next/server";

/**
 * On-demand cache purge. The API server calls this after any content mutation
 * (create/update/delete/reorder) so dashboard edits appear on the live site at
 * once, instead of waiting out the ISR revalidate window in `getHomeContent`.
 *
 * `{ expire: 0 }` expires the tagged entry immediately, so the next visitor
 * blocks for fresh data (read-your-own-writes) rather than being served one
 * more stale page as `profile: "max"` would.
 */
export async function POST(req: NextRequest) {
  const secret = process.env.REVALIDATE_SECRET;
  if (!secret || req.headers.get("x-revalidate-secret") !== secret) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  revalidateTag("home", { expire: 0 });
  return NextResponse.json({ ok: true, revalidated: true });
}
