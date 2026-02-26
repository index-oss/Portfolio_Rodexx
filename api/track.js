export default async function handler(req, res) {
  try {
    const ip =
      req.headers["x-forwarded-for"]?.split(",")[0] ||
      req.socket?.remoteAddress ||
      "unknown";

    const userAgent = req.headers["user-agent"] || "unknown";

    const visitor = {
      ip,
      userAgent,
      time: new Date().toISOString(),
      page: req.headers.referer || "direct",
    };

    console.log("New Visitor:", visitor);

    res.status(200).json({ tracked: true });
  } catch (error) {
    res.status(500).json({ error: "Tracking failed" });
  }
}
