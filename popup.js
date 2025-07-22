document.getElementById('generateBtn').addEventListener('click', async () => {
  const email = document.getElementById('emailInput').value;
  const tone = document.getElementById('toneSelect').value;
  const role = document.getElementById('userRole').value;

  const prompt = `You are a helpful AI assistant. Please write a reply to the following email in a ${tone} tone. Assume the user is a ${role || "professional"}:\\n\\n"${email}"`;

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer YOUR_API_KEY",  // Replace this with your api key
        "HTTP-Referer": "http://localhost",  // Change this if deploying
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "mistralai/mistral-7b-instruct",
        messages: [
          { role: "user", content: prompt }
        ]
      })
    });

    const data = await response.json();
    console.log("API response:", data);

    const reply = data?.choices?.[0]?.message?.content || "⚠️ No reply generated.";
    document.getElementById('output').value = reply;
  } catch (err) {
    console.error("API Error:", err);
    document.getElementById('output').value = "❌ Error: Could not generate reply.";
  }
});
