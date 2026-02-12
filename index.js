const { Client, GatewayIntentBits } = require('discord.js');
const http = require('http');

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

const TOKEN = process.env.TOKEN;
const SEGUNDOS_SLOWMODE = 3600;
const CATEGORY_ID = '1444360374903247159';

// Servidor HTTP
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write("Service Status: Operational");
    res.end();
}).listen(8080);

client.on('threadCreate', async (thread) => {
    if (thread.parentId !== CATEGORY_ID && thread.parent?.parentId !== CATEGORY_ID) return;

    setTimeout(async () => {
        try {
            await thread.setRateLimitPerUser(SEGUNDOS_SLOWMODE);
            console.log(`[INFO] Applied slowmode to thread: ${thread.name}`);
        } catch (error) {
            console.error(`[ERROR] Failed to set slowmode: ${error.message}`);
        }
    }, 2500);
});

client.once('ready', () => {
    console.log(`Bot connected as: ${client.user.tag}`);
    
    client.guilds.cache.forEach(async (guild) => {
        try {
            const threads = await guild.channels.fetchActiveThreads();
            threads.threads.forEach(async (thread) => {
                const isInTarget = (thread.parentId === CATEGORY_ID || thread.parent?.parentId === CATEGORY_ID);
                
                if (isInTarget && thread.rateLimitPerUser !== SEGUNDOS_SLOWMODE) {
                    await thread.setRateLimitPerUser(SEGUNDOS_SLOWMODE);
                    console.log(`[SYNC] Updated: ${thread.name}`);
                }
            });
        } catch (err) {
            console.error("[ERROR] Sync failed:", err.message);
        }
    });
});

client.login(TOKEN);