---
name: "affiliate-product-research"
description: "Nghiên cứu và lựa chọn sản phẩm affiliate hiệu quả dựa trên dữ liệu từ Shopee, TikTok và các sàn khác."
---

# SKILL: Affiliate Product Research

**Objective:** To systematically identify, evaluate, and select high-potential affiliate products based on real-world market data from platforms like Shopee and TikTok, ensuring all content creation efforts are strategically focused on high-ROI items.

**Triggers:**
- Weekly performance review cycle.
- When current product campaigns show declining metrics (clicks, conversions).
- When a new product category is being considered.

---

### Procedure

#### Phase 1: Performance Audit (Weekly)

1.  **Analyze Shopee Commission Reports:** Use the latest `AffiliateCommissionReport_*.csv` from `affiliate-ops/shopee-exports`.
2.  **Identify Underperformers:** Flag products with low click-through rates (CTR) or zero conversions over the past 14 days.
3.  **Identify Top Performers:** Note which products are consistently generating clicks and sales. This helps build a profile of what works.
4.  **Decision:** Propose pausing content creation for underperforming products to reallocate resources.

#### Phase 2: Market Scanning & Opportunity Identification

1.  **Shopee Research:**
    - Browse "Top Products" (`Sản phẩm Bán Chạy`) within relevant categories (e.g., Electronics, Audio, Home Appliances).
    - Search for keywords like "tai nghe chống ồn", "loa bluetooth", "mic thu âm" and filter by "Top Sales" (`Bán Chạy`).
    - Analyze reviews and ratings. A high volume of recent, positive reviews is a strong signal.
    - Check the commission rates (`Hoa hồng`) offered.

2.  **TikTok Research:**
    - Search for hashtags like `#shopeeaffiliate`, `#reviewcongnghe`, `#unboxing`, `#learnontiktok`.
    - Identify trending products that creators are frequently reviewing.
    - Monitor comments to gauge public interest and questions.

#### Phase 3: Candidate Vetting & Scoring

For each potential new product, evaluate it against a simple scorecard:

- **Market Demand (1-5):** High sales volume on Shopee? Trending on TikTok?
- **Commission Rate (1-5):** Is the commission attractive?
- **Content Potential (1-5):** Is there a unique angle for a review? Can we create valuable content that stands out?
- **Competition (1-5):** How many other affiliates are already heavily promoting this? (Lower score for higher competition).

A product must score above a certain threshold (e.g., 12/20) to be considered.

#### Phase 4: Product Proposal

1.  **Create a Proposal:** For each vetted product, create a brief proposal in `affiliate-ops/drafts/product-proposals/`.
2.  **Proposal Content:**
    - **Product Name & Link:**
    - **Market Data:** (e.g., "Top 5 in Audio on Shopee", "Trending on TikTok with #AnkerReview").
    - **Vetting Score:**
    - **Proposed Content Angle:** (e.g., "Comparison with Product X", "In-depth review for WFH users").
3.  **Submit for Approval:** Notify the CEO for a go/no-go decision.

---

**Success Metrics:**
- Increased overall CTR and conversion rate for affiliate links.
- A higher percentage of content focused on top-performing products.
- Reduced time and resources spent on low-impact products.
