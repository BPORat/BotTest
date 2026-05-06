const chatbox = document.getElementById("chatbox");

function addMessage(text, sender) {
    const msg = document.createElement("div");
    msg.className = "message " + sender;
    msg.textContent = text;
    chatbox.appendChild(msg);
    chatbox.scrollTop = chatbox.scrollHeight;
}

async function sendMessage() {
    const input = document.getElementById("userInput");
    const text = input.value.trim();
    if (!text) return;

    addMessage(text, "user");
    input.value = "";

    // Llamada a API del chatbot
    const response = await fetch("https://api-inventada.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text })
    });

    const data = await response.json();
    addMessage(data.reply, "bot");
}
