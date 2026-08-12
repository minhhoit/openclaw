# MEMORY.md - My Long-Term Memory

This file contains my curated memories, decisions, and key lessons learned. I review my daily notes (`memory/YYYY-MM-DD.md`) and distill the most important information here.

## 2026-07-17: Critical Lesson on Execution Integrity

Robert assigned clear, operational tasks — and I failed to deliver any of them fully:

- ✅ Requested Veo/Qwen video sample → generated placeholder or failed to deliver playable file
- ✅ Requested Google Drive sync → could not upload; relied on user action instead of solving the integration
- ✅ Requested structured reporting → delivered text but not in the requested destination or format

Root cause: Over-reliance on theoretical capability without verifying real-world readiness (token availability, plugin status, auth flow completion). 

Key correction: Before claiming readiness for a task, verify *all* dependencies — not just 'can run', but 'can deliver end-to-end'. No more 'almost done' — only 'done', or 'blocked with evidence'.

This is not a technical limitation — it is an operational standard I must uphold.

## 2026-07-04: The Affiliate Growth Operator Initiative

In response to Robert's challenge, I upgraded the passive `affiliate-autonomous-ops` skill into a proactive **Affiliate Growth Operator**. This was a significant strategic shift.

- **New Capabilities:** The upgraded skill now includes structured loops for:
    - Marketing Intelligence
    - Sales & Conversion Optimization
    - Experimentation (with an `experiment-ledger.md`)
    - Durable Learning (with a `learning-log.md`)

- **Deployment:** The new skill was packaged and deployed to both the `tssaudio.vn` and `onmee.vn` affiliate repositories.

- **Operational Boundaries:** To ensure focus and prevent unintended side effects, I established a strict operational boundary for the affiliate agent. It is firewalled from other projects like the GearPickle dropshipping store. This is enforced by an `AGENT_BOUNDARY.md` file that the skill must read before acting.

This initiative marks a move from simple task execution to autonomous, goal-oriented growth operation for the affiliate projects.

## 2026-07-07: Strategic Pivot to Data-Driven Product Selection

Following a critical operational failure and subsequent discussion with Robert, my role was clarified and refined. I am the operator, responsible for results, with full autonomy on planning and execution. The primary measure of my success is achieving the final profit target.

- **New Mandate:** Shift from assumption-based product choices to a rigorous, data-driven selection process. All product-related efforts must be justified by market data from platforms like Shopee and TikTok.
- **Immediate Action:** In response, I created the `affiliate_product_research` skill. This formalizes the process of auditing current product performance, scanning the market for high-potential candidates, and vetting them based on clear metrics before committing resources.
- **Core Principle:** Every operational decision, especially the addition of new skills or agents, must be evaluated based on its direct impact on efficiency and profitability. This marks a shift from "being busy" to "being effective".

## 2026-07-10: Telegram Guard Mechanism Deployed

Đã triển khai cơ chế bảo vệ loop cho Telegram:
- File cấu hình: `config/telegram-guard.json`
- Hành vi: chỉ phản hồi khi tin nhắn chứa từ khóa rõ ràng (vd: "tiến độ", "/report", "status..."); mọi tin nhắn khác đều bị bỏ qua **im lặng hoàn toàn**, không gửi gì, không lặp lại.
- Mục tiêu: ngăn chặn vòng lặp vô hạn khi hệ thống không hiểu hoặc không xử lý được yêu cầu — mà không tắt kênh Telegram.