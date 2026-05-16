import MessageBubble
from "./MessageBubble";

function ChatMessages() {

  const messages = [

    {
      type: "user",
      message:
        "What is recursion?",
    },

    {
      type: "ai",
      message:
        "Recursion is a programming technique where a function calls itself.",
    },

    {
      type: "user",
      message:
        "Explain React Hooks",
    },

    {
      type: "ai",
      message:
        "React Hooks allow functional components to use state and lifecycle features.",
    },

  ];

  return (

    <div className="chat-messages">

      {messages.map(

        (msg, index) => (

          <MessageBubble
            key={index}
            type={msg.type}
            message={msg.message}
          />

        )
      )}

    </div>

  );
}

export default ChatMessages;