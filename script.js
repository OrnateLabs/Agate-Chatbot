const sessionId = "user_" + Math.floor(Math.random() * 10000);
const persona = "You are Agate, a warm, emotionally intelligent AI chatbot trained by Ornate Labs...";

async function sendMessage() {
  const input = document.getElementById("user-input").value;
  if (!input) return;

  appendMessage("You", input);
  document.getElementById("user-input").value = "";

  const response = await fetch("https://your-backend-url.com/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      session_id: sessionId,
      user_input: input,
      persona: persona
    })
  });

  const data = await response.json();
  appendMessage("Agate", data.response);
}

function appendMessage(sender, text) {
  const box = document.getElementById("chat-box");
  const msg = document.createElement("div");
  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
  box.appendChild(msg);
  box.scrollTop = box.scrollHeight;
}
