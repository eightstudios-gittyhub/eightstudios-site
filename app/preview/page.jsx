"use client";

import InfinityTile from "../../components/InfinityTile";

const previewImage =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZyIgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjEiPgogICAgICA8c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjYmRhNmZmIi8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzZiNWRiOCIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIHJ4PSIyOCIgaWxsPSJ1cmwoI2cpIi8+CiAgPGNpcmNsZSBjeD0iMTAwIiBjeT0iMTAwIiByPSI1NSIgZmlsbD0icmdiYSgwLDAsMCwwLjI1KSIvPgogIDxwYXRoIGQ9Ik03MCAxMjAgTDEwMCA3MCBMMTMwIDEyMCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEwIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+";

export default function Page() {
  return (
    <main className="preview">
      <InfinityTile imageSrc={previewImage} alt="Infinity tile preview" />
      <style jsx>{`
        .preview {
          min-height: 100vh;
          display: grid;
          place-items: center;
          background: radial-gradient(circle at top, #141322, #050507);
          color: white;
        }
      `}</style>
    </main>
  );
}
