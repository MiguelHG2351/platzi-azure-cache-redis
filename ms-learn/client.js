const redis = require("redis");
require("dotenv").config();
// hello desde worskapce

async function setInfo() {
  // Connect to the Azure Cache for Redis over the TLS port using the key.
  var cacheHostName = process.env.REDISCACHEHOSTNAME;
  var cachePassword = process.env.REDISCACHEKEY;
  var cacheConnection = redis.createClient({
    // rediss for TLS
    url: "rediss://" + cacheHostName + ":6380",
    password: cachePassword,
  });
  await cacheConnection.connect();

  cacheConnection.on("error", (err) => console.log("Redis Client Error", err));
  await cacheConnection.ping();
  cacheConnection.set("breadWith", "Ham");
  console.log(await cacheConnection.get("breadWith"));
  process.exit();
}

setInfo();
