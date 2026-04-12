# 🐦‍⬛ WARBOT | Discord Management System (Archived)

![Status](https://img.shields.io/badge/Status-Discontinued-red?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-v20-green?style=for-the-badge&logo=node.js)
![Discord.js](https://img.shields.io/badge/Discord.js-v14-blue?style=for-the-badge&logo=discord)

> [!IMPORTANT]
> **This project is discontinued.** The Discord server game for which this bot was created has concluded, and the bot is no longer active or supported. This repository serves as a historical record of the tool developed during that period.

## 📖 Overview
This project was developed for the **WARBORN** community, a competitive Game of Thrones-themed Discord server. In high-stakes environments where diplomacy and war coordination involved dozens and even hundreds of users, communication flow management was critical.

The **WARBOT** served as an automated moderator, specifically designed to maintain order in diplomatic channels by enforcing precise communication constraints during the game's duration.

## 🛠️ Problem & Solution (Historical Context)
**The Challenge:** Diplomatic threads were overused in a roleplay scenario where long-distance communication was meant to be minimal. They were also a source of unwanted excessive pings for umpires and spectators, as they were pinged in every new diplo thread.

**The Solution:** An automated system that identified threads within the **Diplomacy (DIPLO)** jurisdiction and enforced a 1-hour slowmode. This ensured that every message was calculated, formal, and impactful, reflecting the server's lore and strategic nature. The bot also automatically pinged and then deleted the pings for umpires and spectators to ensure they were included in the threads without being constantly notified.

## 🚀 Technical Implementation
- **Asynchronous Event Handling:** Used `discord.js` to listen for thread creation in real-time.
- **Safety Buffering:** Implemented a 5000ms execution delay to prevent API rate-limiting and ensure Discord's internal state was ready.
- **Infrastructure:** Originally hosted on Render with an integrated HTTP health-check server to monitor uptime.

## 📦 Legacy Setup
*Note: This information is for archival purposes only.*
1.  **Dependencies:** `npm install`
2.  **Environment:** Required a `TOKEN` variable, a target `CATEGORY_ID` and roles `ROLE_SPECTATOR_ID` & `ROLE_UMPIRE_ID`.
3.  **Run:** `npm start`

---

**Developed by [urion-sertor]** *Archived Project.*

