(async () => {
  try {
    await fetch("/api/visit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        page: window.location.href,
        ua: navigator.userAgent,
      }),
    });
  } catch (e) {
    console.log("Tracking failed");
  }
})();
