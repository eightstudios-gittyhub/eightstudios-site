<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)", // 5 across on desktop
    gap: "24px",
    padding: "0 10px",
    maxWidth: "1600px",
    margin: "0 auto",
  }}
>
  <style>
    {`
      @media (max-width: 1200px) {
        div[archive-grid] {
          grid-template-columns: repeat(3, 1fr);
        }
      }

      @media (max-width: 800px) {
        div[archive-grid] {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      @media (max-width: 550px) {
        div[archive-grid] {
          grid-template-columns: repeat(1, 1fr);
        }
      }
    `}
  </style>

  <div archive-grid="">
    {archiveItems.map((item) => {
      const thumb = item.images?.[0];
      return (
        <Link
          key={item.slug}
          href={`/archives/${item.slug}`}
          style={{
            textDecoration: "none",
            color: "white",
            backgroundColor: "#111",
            borderRadius: "10px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.12)",
            transition: "0.3s",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: "100%",
              aspectRatio: "1 / 1",
              backgroundImage: thumb ? `url(${thumb})` : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "#222",
            }}
          />
          <div style={{ padding: "16px" }}>
            <h2 style={{ fontSize: "18px", margin: 0 }}>{item.name}</h2>
            <p
              style={{
                opacity: 0.7,
                fontSize: "14px",
                marginTop: "6px",
              }}
            >
              View details →
            </p>
          </div>
        </Link>
      );
    })}
  </div>
</div>