"use client";

import { useState } from "react";
import ProductPageTemplate, {
  labelStyle,
  selectStyle,
} from "@/components/ProductPageTemplate";

const images = [
  "https://i.imgur.com/eSfJnxK.jpeg",
  "https://i.imgur.com/6jcNs6U.jpeg",
  "https://i.imgur.com/Gq5dXqI.jpeg",
  "https://i.imgur.com/PKwqiat.jpeg",
  "https://i.imgur.com/ON1WAN8.jpeg",
  "https://i.imgur.com/zN5pbSi.jpeg",
  "https://i.imgur.com/BBu9QnU.jpeg",
  "https://i.imgur.com/YuNbg3b.jpeg",
  "https://i.imgur.com/GKqoFhd.jpeg",
  "https://i.imgur.com/nay20w6.jpeg",
];

export default function LongBeaniePage() {
  const [patchColor, setPatchColor] = useState("Red");
  const [glitter, setGlitter] = useState("White");

  return (
    <ProductPageTemplate
      title="888 Long Beanie"
      price="$60"
      stripeLink="https://buy.stripe.com/28E9AV7MX5Oy87V5Wy5Rm09"
      ctaNote="Patch + glitter selections are for request notes (checkout link is the same)."
      description={`Handmade 1/1 luxury beanie — choose your patch color + glitter.

• made by Eight Studios (888inc.)`}
      images={images}
    >
      <div>
        <label style={labelStyle}>Patch Color</label>
        <select
          value={patchColor}
          onChange={(e) => setPatchColor(e.target.value)}
          style={selectStyle}
        >
          <option>Red</option>
          <option>Orange</option>
          <option>Yellow</option>
          <option>Green</option>
          <option>Blue</option>
          <option>Purple</option>
        </select>

        <label style={labelStyle}>Glitter Color</label>
        <select
          value={glitter}
          onChange={(e) => setGlitter(e.target.value)}
          style={{ ...selectStyle, marginBottom: 0 }}
        >
          <option>White</option>
          <option>Black</option>
        </select>
      </div>
    </ProductPageTemplate>
  );
}
