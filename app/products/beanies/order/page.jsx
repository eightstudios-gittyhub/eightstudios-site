"use client";

import { Suspense } from "react";
import OrderContent from "./order-content";

export default function BeanieOrderPage() {
  return (
    <Suspense>
      <OrderContent />
    </Suspense>
  );
}