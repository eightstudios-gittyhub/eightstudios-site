"use client";

import { useEffect } from "react";
import { captureAmbRefFromUrl } from "../../lib/ambassadorRef";

export default function AmbassadorCapture() {
  useEffect(() => {
    captureAmbRefFromUrl();
  }, []);

  return null;
}