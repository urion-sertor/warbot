const { Client, GatewayIntentBits } = require('discord.js');
const http = require('http');

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

const TOKEN = process.env.TOKEN;
const CATEGORY_ID = '1444360374903247159';
const PORT = process.env.PORT || 8080; // Render asigns the port automatically
const ROLE_SPECTATOR_ID = '1445014131064307875';
const ROLE_UMPIRE_ID = '1444093999341244446';

// HTTP Server
http.createServer((req, res) => {
    res.writeHead(200);
    res.end("WARBOT is alive");
}).listen(PORT, () => {
    console.log(`[SYSTEM] HTTP Server listening on port ${PORT}`);
});

client.once('ready', () => {
    console.log(`[AUTH] Bot connected as ${client.user.tag}`);
});

client.on('threadCreate', async (thread) => {
    if (thread.parentId !== CATEGORY_ID && thread.parent?.parentId !== CATEGORY_ID) return;
    setTimeout(async () => {
        try {
            await thread.setRateLimitPerUser(3600);
            console.log(`[MOD] Slowmode set in ${thread.name}`);
            const inviteMsg = await thread.send(`Including roles: <@&${ROLE_SPECTATOR_ID}> <@&${ROLE_UMPIRE_ID}>`); // Invita a los roles
            console.log(`[INVITE] roles mentioned in ${thread.name}`);
            setTimeout(() => { // Borra el mensaje 4 segundos después para eliminar los pings
                inviteMsg.delete().catch(err => console.error("[ERROR] Ping couldn't get deleted:", err.message));
            }, 4000);
        } catch (e) { console.error("[ERROR]", e.message); }
    }, 5000);
});

if (TOKEN) {
    client.login(TOKEN).catch(err => console.error("[LOGIN ERROR]", err.message));
} else {
    console.error("TOKEN NOT FOUND");
}
