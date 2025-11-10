
# <p align="center">
  <a href="https://bitbash.def" target="_blank">
    <img src="https://github.com/za2122/footer-section/blob/main/media/scraper.png" alt="Bitbash Banner" width="100%"></a>
</p>
<p align="center">
  <a href="https://t.me/devpilot1" target="_blank">
    <img src="https://img.shields.io/badge/Chat%20on-Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white" alt="Telegram">
  </a>&nbsp;
  <a href="https://wa.me/923249868488?text=Hi%20BitBash%2C%20I'm%20interested%20in%20automation." target="_blank">
    <img src="https://img.shields.io/badge/Chat-WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" alt="WhatsApp">
  </a>&nbsp;
  <a href="mailto:sale@bitbash.dev" target="_blank">
    <img src="https://img.shields.io/badge/Email-sale@bitbash.dev-EA4335?style=for-the-badge&logo=gmail&logoColor=white" alt="Gmail">
  </a>&nbsp;
  <a href="https://bitbash.dev" target="_blank">
    <img src="https://img.shields.io/badge/Visit-Website-007BFF?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Website">
  </a>
</p>




<p align="center" style="font-weight:600; margin-top:8px; margin-bottom:8px;">
  Created by Bitbash, built to showcase our approach to Scraping and Automation!<br>
  If you are looking for <strong>Tiktok Trend API (free-watermark videos)</strong> you've just found your team — Let’s Chat. 👆👆
</p>


TikTok Trend API Scraper

> The **TikTok Trend API Scraper** lets you explore trending videos and viral content from TikTok in real time — all without watermarks. Use it to analyze what’s trending, extract clean video URLs, and access user, music, and hashtag data from any region.

> Perfect for marketers, content creators, and developers who want data-backed insights into what’s capturing attention across TikTok.

## Features

- **Trending Videos** — Get the latest videos from the “For You” page across different countries.
- **No Watermark Downloads** — Extract direct video URLs without TikTok’s watermark.
- **Video Metadata** — Retrieve detailed information for any TikTok video.
- **User Insights** — Collect user details, follower stats, and profile information.
- **Music Data** — Fetch details about songs and sounds used in trending videos.
- **Hashtags & Challenges** — Identify active hashtags and associated content.
- **Lightweight & Fast** — Optimized for speed with minimal compute usage (~0.001 CU for 100 results).

## Input Parameters

| Field | Type | Description |
|-------|------|-------------|
| `region` | String | Two-character region code (e.g., `US`, `VN`). |
| `limit` | Integer | Limit for number of scraped results. |
| `isDownloadVideo` | Boolean | Download videos (no watermark). |
| `isDownloadVideoCover` | Boolean | Download cover images. |

### Example Input


{
  "region": "US",
  "limit": 100,
  "isDownloadVideo": true,
  "isDownloadVideoCover": false
}

Example Output
Each record contains comprehensive metadata for a single TikTok video:
json{
  "author": {
    "unique_id": "vtvgiaitriofficial",
    "nickname": "VTV Giai Tri Official",
    "region": "VN"
  },
  "music": {
    "author": "VTV Giai Tri Official",
    "title": "original sound - vtvgiaitriofficial",
    "play_url": "https://sf16-ies-music-sg.tiktokcdn.com/obj/tiktok-obj/7229168238650166018.mp3"
  },
  "desc": "Cô chủ trọ cho thuê căn phòng hết nước chấm thật #Cuocdoivandepsao",
  "statistics": {
    "play_count": 585709,
    "comment_count": 183,
    "share_count": 492,
    "digg_count": 25006
  },
  "share_url": "https://www.tiktok.com/@vtvgiaitriofficial/video/7229167805625847041"
}

Performance

Scrapes up to 100 listings in about 1 minute.

Consumes approximately 0.001 compute units per run.

Optimized for parallel requests and quick turnaround.

Usage Scenarios

Trend Analysis: Identify viral content and creators by country or topic.

Marketing Research: Track evolving audience interests in real time.

Content Creation: Spot viral trends early to inform creative direction.

Music Discovery: Find trending sounds and associated user videos.

Data Aggregation: Feed TikTok trend data into analytics dashboards.

Output Storage
All scraped data is stored as structured JSON records. You can easily integrate the dataset with your preferred programming language:

Python: requests.get(dataset_url).json()

Node.js: await fetch(dataset_url).then(res => res.json())

PHP: json_decode(file_get_contents(dataset_url), true)

Example Directory Structure
pgsqltiktok-trend-api-scraper/
├── README.md
├── dataset/
│   └── sample_output.json
├── input_example.json
└── LICENSE

Troubleshooting

Invalid Input: The scraper stops immediately if required fields are missing.

Proxy Configuration: For trend videos, ensure your proxy matches the target country region.

Data Limits: Use smaller limit values for lightweight, faster runs.

FAQs
Q: Does this scraper bypass TikTok’s watermark automatically?
A: Yes, all video URLs provided are watermark-free.
Q: Can I specify which country’s trends I want?
A: Absolutely — just set the region field (e.g., "US" or "JP").
Q: How do I get user and sound information?
A: It’s automatically included in each result’s author and music fields.

Related Tools
ToolDescriptionFast TikTok APIGeneral TikTok data extractionTikTok Comment APIRetrieve video comment threadsTikTok Search APISearch-based video and user resultsTikTok User APICollect user profile and content dataTikTok Music APIExplore trending TikTok musicTikTok Hashtag APIExtract hashtag-based video collectionsTikTok Shop APIScrape e-commerce related TikTok dataTwitter - X.com ScraperFetch posts and user data from X (Twitter)


<p align="center">
<a href="https://calendar.app.google/74kEaAQ5LWbM8CQNA" target="_blank">
  <img src="https://img.shields.io/badge/Book%20a%20Call%20with%20Us-34A853?style=for-the-badge&logo=googlecalendar&logoColor=white" alt="Book a Call">
</a>
  <a href="https://www.youtube.com/@bitbash-demos/videos" target="_blank">
    <img src="https://img.shields.io/badge/🎥%20Watch%20demos%20-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="Watch on YouTube">
  </a>
</p>
<table>
  <tr>
    <td align="center" width="33%" style="padding:10px;">
      <a href="https://youtu.be/MLkvGB8ZZIk" target="_blank">
        <img src="https://github.com/za2122/footer-section/blob/main/media/review1.gif" alt="Review 1" width="100%" style="border-radius:12px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
      </a>
      <p style="font-size:14px; line-height:1.5; color:#444; margin:0 15px;">
        “Bitbash is a top-tier automation partner, innovative, reliable, and dedicated to delivering real results every time.”
      </p>
      <p style="margin:10px 0 0; font-weight:600;">Nathan Pennington
        <br><span style="color:#888;">Marketer</span>
        <br><span style="color:#f5a623;">★★★★★</span>
      </p>
    </td>
    <td align="center" width="33%" style="padding:10px;">
      <a href="https://youtu.be/8-tw8Omw9qk" target="_blank">
        <img src="https://github.com/za2122/footer-section/blob/main/media/review2.gif" alt="Review 2" width="100%" style="border-radius:12px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
      </a>
      <p style="font-size:14px; line-height:1.5; color:#444; margin:0 15px;">
        “Bitbash delivers outstanding quality, speed, and professionalism, truly a team you can rely on.”
      </p>
      <p style="margin:10px 0 0; font-weight:600;">Eliza
        <br><span style="color:#888;">SEO Affiliate Expert</span>
        <br><span style="color:#f5a623;">★★★★★</span>
      </p>
    </td>
    <td align="center" width="33%" style="padding:10px;">
      <a href="https://youtube.com/shorts/6AwB5omXrIM" target="_blank">
        <img src="https://github.com/za2122/footer-section/blob/main/media/review3.gif" alt="Review 3" width="35%" style="border-radius:12px; box-shadow:0 4px 10px rgba(0,0,0,0.1);">
      </a>
      <p style="font-size:14px; line-height:1.5; color:#444; margin:0 15px;">
        “Exceptional results, clear communication, and flawless delivery. Bitbash nailed it.”
      </p>
      <p style="margin:10px 0 0; font-weight:600;">Syed
        <br><span style="color:#888;">Digital Strategist</span>
        <br><span style="color:#f5a623;">★★★★★</span>
      </p>
    </td>
  </tr>
</table>
