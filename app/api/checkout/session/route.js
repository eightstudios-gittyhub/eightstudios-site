import { stripe } from "../../../../lib/stripe";

export async function POST(req) {
  const body = await req.json();

  const priceId = body.priceId;
  const quantity = body.quantity ?? 1;
  const ref = (body.ref || "").toLowerCase() || null;

  if (!priceId) return new Response("Missing priceId", { status: 400 });

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [{ price: priceId, quantity }],
    success_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${siteUrl}/cancel`,
    allow_promotion_codes: true,

    // ✅ ambassador tracking
    client_reference_id: ref ?? undefined,
    metadata: {
      ambassador_ref: ref ?? "",
      source: "landing_or_qr",
    },
    payment_intent_data: {
      metadata: { ambassador_ref: ref ?? "" },
    },
  });

  return Response.json({ url: session.url });
}
