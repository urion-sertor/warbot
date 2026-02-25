# 🐦‍⬛ WARBOT | Discord Management System

![Status](https://img.shields.io/badge/Status-Operational-success?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-v20-green?style=for-the-badge&logo=node.js)
![Discord.js](https://img.shields.io/badge/Discord.js-v14-blue?style=for-the-badge&logo=discord)
![Render](https://img.shields.io/badge/Render-Web_Service-cyan?style=for-the-badge&logo=render)

## 📖 Overview
This project was developed for the **WARBORN** community, a competitive Game of Thrones-themed Discord server. In high-stakes environments where diplomacy and war coordination involve dozens and even hundreds of users, communication flow management is critical.

The **WARBOT** serves as an automated moderator, specifically designed to maintain order in diplomatic channels by enforcing precise communication constraints.

## 🛠️ Problem & Solution
**The Challenge:** Diplomatic threads were overused in a roleplay scenario where long distance communication is meant to be minimal.
**The Solution:** An automated system that identifies threads within the **Diplomacy (DIPLO)** jurisdiction and enforces a 1-hour slowmode. This ensures that every message is calculated, formal, and impactful, reflecting the server's lore and strategic nature.

## 🚀 Technical Implementation
- **Asynchronous Event Handling:** Uses `discord.js` to listen for thread creation in real-time.
- **State Synchronization:** On startup, the bot performs a full scan of active threads to ensure compliance, even if the bot was offline during thread creation.
- **Safety Buffering:** Implements a 2500ms execution delay to prevent API rate-limiting and ensure Discord's internal state is ready.
- **Infrastructure:** Hosted on Render with an integrated HTTP health-check server to monitor uptime.

## 📈 Roadmap (Future Evolutions)
This bot is the first stage of a modular system. Future updates will include:
* **Dynamic Diplomacy:** Integrating an automated "Raven" message that notifies users when a thread is under diplomatic slowmode.
* **Role-Based Bypass:** Allowing High Council members to bypass limits for urgent announcements.
* **Log System:** A dedicated logging channel to track diplomatic activity and bot actions.
* **Multi-Category Support:** Configurable slowmodes for different regions (Castles, Frontlines, etc.) with unique time constraints.

## ⚙️ Setup & Deployment
1.  **Dependencies:** `npm install`
2.  **Environment:** Requires a `TOKEN` variable and a target `CATEGORY_ID`.
3.  **Run:** `npm start`

---

**Developed by [urion-sertor]** *Currently studying Multi-platform Application Development (DAM).*
