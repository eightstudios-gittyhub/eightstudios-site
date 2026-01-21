"use client";

import { useEffect } from "react";
import { setAmbRef } from "../../../lib/ambassadorRef";
import Link from "next/link";

export default function AmbassadorLanding({ params }) {
  const amb = (params?.ambassador || "").toLowerCase();

  useEffect(() => {
    setAmbRef(amb);
  }, [amb]);

  return (
    <main style={{ padding: 24 }}>
      <h1 style={{ fontSize: 28, marginBottom: 8 }}>Eight Studios</h1>
      <p style={{ marginBottom: 16 }}>
        Shopping with ambassador: <b>{amb}</b>
      </p>

      <div style={{ display: "flex", gap: 12 }}>
        <Link href={`/products?ref=${encodeURIComponent(amb)}`}>Shop</Link>
        <Link href={`/archives?ref=${encodeURIComponent(amb)}`}>Archives</Link>
      </div>
    </main>
  );
}
