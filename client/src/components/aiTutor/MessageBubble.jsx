function MessageBubble({

  type,

  message,

}) {

  return (

    <div
      className={
        type === "user"
          ? "user-message"
          : "ai-message"
      }
    >

      {message}

    </div>

  );
}

export default MessageBubble;