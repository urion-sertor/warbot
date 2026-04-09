# 🐦‍⬛ WARBOT | Discord Management System

![Status](https://img.shields.io/badge/Status-Inactive-inactive?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-v20-green?style=for-the-badge&logo=node.js)
![Discord.js](https://img.shields.io/badge/Discord.js-v14-blue?style=for-the-badge&logo=discord)
![Render](https://img.shields.io/badge/Render-Web_Service-cyan?style=for-the-badge&logo=render)

## 📖 Overview
This project was developed for the **WARBORN** community, a competitive Game of Thrones-themed Discord server. In high-stakes environments where diplomacy and war coordination involve dozens and even hundreds of users, communication flow management is critical.

The **WARBOT** serves as an automated moderator, specifically designed to maintain order in diplomatic channels by enforcing precise communication constraints.

## 🛠️ Problem & Solution
**The Challenge:** Diplomatic threads were overused in a roleplay scenario where long distance communication is meant to be minimal. They were also a source of unwanted excessive pings for umpires and spectators, as they got pinged in every new diplo thread to be included inside of them.
**The Solution:** An automated system that identifies threads within the **Diplomacy (DIPLO)** jurisdiction and enforces a 1-hour slowmode. This ensures that every message is calculated, formal, and impactful, reflecting the server's lore and strategic nature. The bot also automatically pings and deletes the ping of umpires and spectators.

## 🚀 Technical Implementation
- **Asynchronous Event Handling:** Uses `discord.js` to listen for thread creation in real-time.
- **State Synchronization:** On startup, the bot performs a full scan of active threads to ensure compliance, even if the bot was offline during thread creation.
- **Safety Buffering:** Implements a 2500ms execution delay to prevent API rate-limiting and ensure Discord's internal state is ready.
- **Infrastructure:** Hosted on Render with an integrated HTTP health-check server to monitor uptime.

## 📈 Roadmap (Future Evolutions)
This bot is the first stage of a modular system. Future updates will include:
* **Automatic Silent Ping Umpire and Spectator:** So Umpires and Spectators don't have to get pinged in every new diplo thread.
* **Role-Based Bypass:** Allowing High Council members to bypass limits for urgent announcements.

## ⚙️ Setup & Deployment
1.  **Dependencies:** `npm install`
2.  **Environment:** Requires a `TOKEN` variable, a target `CATEGORY_ID` and two roles `ROLE_SPECTATOR_ID` & `ROLE_UMPIRE_ID`.
3.  **Run:** `npm start`

---

**Developed by [urion-sertor]** *Currently studying Cross-platform Application Development.*

