export default {
  async fetch(request) {
    const ip = request.headers.get("CF-Connecting-IP");

    const data = {
      ip,
      time: new Date().toISOString(),
      ua: request.headers.get("User-Agent")
    };

    console.log(data);

    return new Response("ok");
  }
};
