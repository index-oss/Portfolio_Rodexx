import UAParser from "ua-parser-js";

export default async async function handler(req, res) {
  try {
    const ip =
      req.headers["x-forwarded-for"]?.split(",")[0] ||
      req.socket?.remoteAddress ||
      "unknown";

    const userAgent = req.headers["user-agent"] || "unknown";

    // 🧠 Parse device info
    const parser = new UAParser(userAgent);
    const device = parser.getDevice();
    const browser = parser.getBrowser();
    const os = parser.getOS();

    // 🌍 Country from IP
    let country = "unknown";

    try {
      const geo = await fetch(`https://ipapi.co/${ip}/json/`);
      const geoData = await geo.json();
      country = geoData.country_name || "unknown";
    } catch {
      country = "unknown";
    }

    const visitor = {
      ip,
      country,
      device: device.type || "desktop",
      browser: browser.name || "unknown",
      os: os.name || "unknown",
      time: new Date().toISOString(),
      page: req.body?.page || "unknown",
    };

    console.log("Visitor:", visitor);

    res.status(200).json({ tracked: true, visitor });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Tracking failed" });
  }
}
