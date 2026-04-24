(async () => {
  try {
    await fetch("http://localhost:3000/visit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        page: window.location.href,
        ua: navigator.userAgent
      })
    });
  } catch (e) {
    console.log("Tracking failed");
  }
})();
