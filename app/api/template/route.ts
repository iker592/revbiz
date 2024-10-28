import { ratelimitConfig } from "@/lib/ratelimiter";
import { NextRequest, NextResponse } from "next/server";

// Extend the NextRequest type to include the geo property
interface ExtendedNextRequest extends NextRequest {
  geo?: {
    country?: string;
  };
}

export async function GET(req: ExtendedNextRequest) {
  if (!ratelimitConfig.enabled || !ratelimitConfig.ratelimit) {
    return NextResponse.json(
      "Environment variable UPSTASH_REDIS_REST_URL is not set.",
      { status: 500 }
    );
  }

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0] ?? "127.0.0.1";
  const isLocal = process.env.NODE_ENV === "development";
  const country = isLocal ? "CA" : req.geo?.country ?? "unknown";

  const { success, pending, limit, reset, remaining } =
    await ratelimitConfig.ratelimit.limit(ip, {
      country: country,
    });

  if (!success) {
    // console.log("limit", limit);
    // console.log("reset", reset);
    // console.log("remaining", remaining);

    return NextResponse.json("Rate Limited", { status: 429 });
  }
  return NextResponse.json("Success", { status: 200 });
}
