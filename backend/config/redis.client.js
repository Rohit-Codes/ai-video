const { createClient } = require("redis");

const redisClient = createClient({
  url: process.env.REDIS_URL || "redis://localhost:6379", // Add password if needed: redis://:password@localhost:6379
});

redisClient.on("error", (err) => console.error("Redis Client Error", err));
redisClient.on("connect", () => console.log("✅ Redis connected successfully"));

// Connect once when app starts
(async () => {
  await redisClient.connect();
})();

module.exports = redisClient;
