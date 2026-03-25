const redisClient = require("../config/redis.client");

const deleteUserCache = async (userId) => {
  if (userId) {
    await redisClient.del(`user :${userId}`);
    console.log("catche delete");
  }
};

module.exports = deleteUserCache;
