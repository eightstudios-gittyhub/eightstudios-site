"use client";

import { getAmbRef, setAmbRef } from "../../lib/ambassadorRef";

export default function CheckoutButton({ priceId, quantity = 1 }) {
  async function go() {
    const params = new URLSearchParams(window.location.search);
    const refFromUrl = params.get("ref");
    if (refFromUrl) setAmbRef(refFromUrl);

    const ref = getAmbRef();

    const res = await fetch("/api/checkout/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ priceId, quantity, ref }),
    });

    if (!res.ok) throw new Error(await res.text());

    const data = await res.json();
    window.location.href = data.url;
  }

  return <button onClick={go}>Checkout</button>;
}
