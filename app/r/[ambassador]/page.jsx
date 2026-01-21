"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { setAmbRef } from "../../../lib/ambassadorRef";

export default function AmbassadorLanding({ params }) {
  const router = useRouter();
  const amb = (params?.ambassador || "").toLowerCase();

  useEffect(() => {
    setAmbRef(amb);
    router.replace(`/?ref=${encodeURIComponent(amb)}`);
  }, [amb, router]);

  return (
    <main style={{ padding: 24 }}>
      <p>Redirecting…</p>
    </main>
  );
}
