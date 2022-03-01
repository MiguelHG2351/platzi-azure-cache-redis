
const { createClient } = require('redis');
require('dotenv').config();

const port = process.env.REDIS_PORT;
const host = process.env.REDIS_HOST;
console.log(host)
const pass = process.env.REDIS_PASSWORD



async function setInfo() {
    const client = createClient({
        url: `rediss://${host}:${port}`,
        password: pass,
    });
    await client.connect();
    client.on('error', (err) => console.log('Redis Client Error', err));
    await client.ping()
    client.set("breadWith", "Ham");
    const res = await client.sendCommand("get", ["agua", "cate"])
    console.log(res)
};

setInfo();
