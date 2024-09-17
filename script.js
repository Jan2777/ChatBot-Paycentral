const chatbot = {
    responses: {
      'hi': 'How can I help you?',
      'card balance': 'Just a minute... <a href="https://example.com/card-balance" target="_blank">Check your balance here</a>'
    }
  };
  
  const chatbox = document.querySelector('.chatbox');
  const userInput = document.querySelector('#user-input');
  const sendBtn = document.querySelector('#send-btn');
  const chatMessages = document.querySelector('.chat-messages');
  
  sendBtn.addEventListener('click', () => {
    const userInputValue = userInput.value.trim();
    if (userInputValue!== '') {
      handleUserInput(userInputValue);
      userInput.value = '';
    }
  });
  
  function handleUserInput(input) {
    const message = document.createElement('div');
    message.className = 'essage';
    message.innerHTML = `<p>You: ${input}</p>`;
    chatMessages.appendChild(message);
  
    const response = getResponse(input);
    const responseMessage = document.createElement('div');
    responseMessage.className = 'essage';
    responseMessage.innerHTML = `<p>Assistant: ${response}</p>`;
    chatMessages.appendChild(responseMessage);
  
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  
  function getResponse(input) {
    return chatbot.responses[input.toLowerCase()] || 'I didn\'t understand that. Can you please rephrase?';
  }