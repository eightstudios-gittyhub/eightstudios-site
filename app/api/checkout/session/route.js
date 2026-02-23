import { stripe } from "../../../../lib/stripe";

const AMBASSADORS = {
  beretta: { name: "Beretta", promo: "BERETTA15" },
  // add more like:
  // jay: { name: "Jay", promo: "JAY888" },
};

export async function POST(req) {
  const body = await req.json();

  const priceId = body.priceId;
  const quantity = body.quantity ?? 1;
  const unitAmount = Number(body.unitAmount);
  const productName = body.productName || "Custom product";
  const customizations =
    body.customizations && typeof body.customizations === "object"
      ? body.customizations
      : {};

  const rawRef = (body.ref || "").toLowerCase().trim();
  const ambassador = AMBASSADORS[rawRef] ? rawRef : null;

  if (!priceId && !unitAmount) {
    return new Response("Missing priceId or unitAmount", { status: 400 });
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

  const lineItems = priceId
    ? [{ price: priceId, quantity }]
    : [
        {
          quantity,
          price_data: {
            currency: "usd",
            unit_amount: unitAmount,
            product_data: { name: productName },
          },
        },
      ];

  const customizationMetadata = Object.fromEntries(
    Object.entries(customizations).map(([key, value]) => [
      `custom_${key}`,
      Array.isArray(value) ? value.join(", ") : String(value ?? ""),
    ])
  );

  const baseMetadata = {
    ambassador_ref: ambassador ?? "",
    ambassador_name: ambassador ? AMBASSADORS[ambassador].name : "",
    ambassador_promo: ambassador ? AMBASSADORS[ambassador].promo : "",
    source: "landing_or_qr",
    ...customizationMetadata,
  };

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: lineItems,
    success_url: `${siteUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${siteUrl}/cancel`,
    allow_promotion_codes: true,

    // ✅ ambassador tracking
    client_reference_id: ambassador ?? undefined,
    metadata: baseMetadata,
    payment_intent_data: {
      metadata: baseMetadata,
    },
  });

  return Response.json({ url: session.url });
}
