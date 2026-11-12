# HORROR ARCHIVE｜私人恐怖電影檔案館

> 恐怖的不一定是電影，也可能是我們踩到的雷。

TAICA 第九週 `AGENTS.md` 專案：用固定的資料欄位與統一樣式收錄恐怖電影。**保留原本的高級暗黑電影誌風格**；新增內容不需要重畫卡片。

## 目前網站內容
- 《恐怖蠟像館》（2005）
- 《隱形人》（2020）
- 《愛你致死不渝》（2026）

開啟 `index.html` 即可瀏覽；點電影方格進入共用的 `movie.html?id=...` 詳細頁。桌面三欄、中尺寸兩欄、手機單欄，延續既有高級暗黑視覺；卡片欄數與排版可按需要改善。

## 最重要：AI 如何依規則繼續擴充
1. 在 Codex（或其他能編輯本專案檔案的 AI 開發工具）開啟此 GitHub Repository／本機專案。
2. 告訴 AI：「先讀 `AGENTS.md`、`NOTES.md`、`CHANGELOG.md`，幫我新增《電影名稱》」。可直接複製 `EXAMPLE_PROMPT.md`；不必先在網站輸入資料。
3. AI 先查證來源，提出內容草稿；經作者確認，依規範在 `movies.js` 新增一筆資料，補上一張合法的原創意象圖。
4. 共用的 `site.js` 會**自動顯示新的電影方格**，`movie.html` 會依電影 ID 產生詳細內容，不必重製網頁版型。
5. 審核、測試並提交／推送至 GitHub，GitHub Pages 部署後，公開網站才會更新。

**公開網站不設新增入口。** 請在有權存取專案的 AI 開發環境使用 `AGENTS.md` 擴充，作者審核後推送到 GitHub。

## 檔案用途
| 檔案 | 功能 |
| --- | --- |
| `AGENTS.md` | AI 必須遵守的專案開發規則 |
| `NOTES.md` | 專案目前狀態與待辦 |
| `CHANGELOG.md` | 修改歷程 |
| `EXAMPLE_PROMPT.md` | 可直接複製的新增電影指令 |
| `movies.js` | 唯一電影資料來源 |
| `site.js` | 首頁方格、篩選與詳細頁自動渲染 |
| `index.html` / `movie.html` | 首頁、共用電影詳細頁 |
| `style.css` | 全站的高級暗黑視覺設計與響應式排版 |
| `assets/` | 原創非官方氛圍圖 |

## 公開 GitHub Pages
1. 在 GitHub 建立 Repository，將本資料夾**裡面的內容**上傳至 Repository 根目錄。
2. 在 `Settings → Pages → Build and deployment` 選 `Deploy from a branch`，指定 `main` 和 `/(root)`。
3. 儲存設定，完成部署後查看 GitHub 提供的公開網址。
4. 實際檢查首頁、電影詳細頁與素材。

## 資料倫理與維護
原創 AI 意象不仿製官方海報或演員；電影簡介不抄襲來源。RT 數值有日期但可能變動；1–5 級恐怖指標為本站編輯性指引，不冒充 RT 官方數據或作者個人評分。
