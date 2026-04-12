/**
 * 🐦‍⬛ WARBOT (LEGACY ARCHIVE)
 * 
 * Status: Discontinued.
 * This bot was part of a temporary Discord community game. 
 * The project is no longer maintained and the server is inactive.
 */

const { Client, GatewayIntentBits } = require('discord.js');
const http = require('http');

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

// --- Configuration ---
const TOKEN = process.env.TOKEN;
const PORT = process.env.PORT || 8080;

// Discord identifiers from the original server (now legacy placeholders)
const CATEGORY_ID = process.env.CATEGORY_ID || '1444360374903247159';
const ROLE_SPECTATOR_ID = process.env.ROLE_SPECTATOR_ID || '1445014131064307875';
const ROLE_UMPIRE_ID = process.env.ROLE_UMPIRE_ID || '1444093999341244446';
// ---------------------

// HTTP Server for Health Checks
http.createServer((req, res) => {
    res.writeHead(200);
    res.end("WARBOT (Archived) is alive");
}).listen(PORT, () => {
    console.log(`[SYSTEM] Legacy HTTP Server listening on port ${PORT}`);
});

client.once('ready', () => {
    console.log(`[AUTH] Bot connected as ${client.user.tag}`);
    console.warn("[WARNING] This bot is part of an archived project.");
});

client.on('threadCreate', async (thread) => {
    // Check if thread belongs to the monitored jurisdiction
    if (thread.parentId !== CATEGORY_ID && thread.parent?.parentId !== CATEGORY_ID) return;
    
    // Safety delay to ensure Discord's internal state is synchronized
    setTimeout(async () => {
        try {
            // Set 1-hour slowmode
            await thread.setRateLimitPerUser(3600);
            console.log(`[MOD] Slowmode set in ${thread.name}`);

            // Invite necessary roles silently
            const inviteMsg = await thread.send(`Including roles: <@&${ROLE_SPECTATOR_ID}> <@&${ROLE_UMPIRE_ID}>`);
            console.log(`[INVITE] Roles mentioned in ${thread.name}`);

            // Delete the message shortly after to clear the notification bubble
            setTimeout(() => {
                inviteMsg.delete().catch(err => console.error("[ERROR] Legacy ping deletion failed:", err.message));
            }, 4000);
        } catch (e) { 
            console.error("[ERROR] Logic failure:", e.message); 
        }
    }, 5000);
});

if (TOKEN) {
    client.login(TOKEN).catch(err => console.error("[LOGIN ERROR] Verification failed:", err.message));
} else {
    console.error("[CRITICAL] TOKEN NOT FOUND. ARCHIVED BOT CANNOT START.");
}
