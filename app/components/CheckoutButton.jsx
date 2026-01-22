"use client";

import { getAmbRef, setAmbRef } from "../../lib/ambassadorRef";

export default function CheckoutButton({
  priceId,
  quantity = 1,
  label = "Buy Now",
  style,
}) {
  async function go() {
    if (!priceId) {
      alert("Missing priceId for this item.");
      return;
    }

    // if URL has ?ref=jay, store it too (nice for testing)
    const params = new URLSearchParams(window.location.search);
    const refFromUrl = params.get("ref");
    if (refFromUrl) setAmbRef(refFromUrl);

    const ref = getAmbRef();

    const res = await fetch("/api/checkout/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ priceId, quantity, ref }),
    });

    const text = await res.text();
    if (!res.ok) throw new Error(text);

    const data = JSON.parse(text);
    window.location.href = data.url;
  }

  return (
    <button type="button" onClick={go} style={style}>
      {label}
    </button>
  );
}