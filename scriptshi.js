document.getElementById("send-btn").addEventListener("click", function() {
    let userInput = document.getElementById("user-input").value;
    if (userInput.trim() !== "") {
        let chatOutput = document.getElementById("chat-output");

        // User message
        let userMessage = document.createElement("div");
        userMessage.className = "user-message";
        userMessage.textContent = userInput;
        chatOutput.appendChild(userMessage);

        // Clear input
        document.getElementById("user-input").value = "";

        // Bot response (simple example)
        setTimeout(function() {
            let botMessage = document.createElement("div");
            botMessage.className = "bot-message";
            botMessage.textContent = "Thank you for reaching out. How can I assist you today?";
            chatOutput.appendChild(botMessage);

            // Scroll to bottom of chat window
            chatOutput.scrollTop = chatOutput.scrollHeight;
        }, 1000);
    }
});
