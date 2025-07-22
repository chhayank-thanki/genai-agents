# QuickReply – AI Email Reply Agent

**QuickReply** is a Chrome extension that generates intelligent email replies using OpenRouter's large language models. Simply paste an email, select the tone, specify your role, and get a context-aware reply instantly.

## Features

- Tone selection: Formal, Neutral, Friendly
- Role-based personalization
- Clipboard copy support
- Powered by OpenRouter API (Mistral-7B)

---

## 🛠️ Tech Stack

- HTML, CSS (Tailwind)
- JavaScript (Vanilla)
- OpenRouter API (LLM backend)
- Chrome Extension (Manifest v3)

--- 

## 🧪 How to Use

1. **Install the Extension**:
   - Clone or download this repo.
   - Go to `chrome://extensions/` in your browser.
   - Enable **Developer mode**.
   - Click **"Load unpacked"** and select the `email-reply-agent` folder.

2. **Set Up API Key**:
   - Open `popup.js`.
   - Replace `"YOUR_API_KEY"` with your OpenRouter API key:
     ```js
     "Authorization": "Bearer YOUR_API_KEY"
     ```

3. **Generate Replies**:
   - Click the extension icon.
   - Paste the email content.
   - Choose tone and enter your role.
   - Click **"Generate Reply"**.
   - Copy the AI-generated reply using the button provided.

---

## 📦 Folder Structure
email-reply-agent/
  ├── icon.png # Extension icon
  ├── manifest.json # Chrome extension config (v3)
  ├── popup.html # Main UI (Tailwind styled)
  ├── popup.js # Core logic to call OpenRouter API

---

## 🌐 API Used

- **OpenRouter API**
  - Model: `mistralai/mistral-7b-instruct`
  - Endpoint: `https://openrouter.ai/api/v1/chat/completions`
  - Note: You must register on [openrouter.ai](https://openrouter.ai) to obtain your API key.

---

## 🙋‍♂️ Author

**Chhayank Thanki**  
LinkedIn: [@chhayank-thanki](https://www.linkedin.com/in/chhayank-thanki/)  
GitHub: [@chhayank-thanki](https://github.com/chhayank-thanki)

---
