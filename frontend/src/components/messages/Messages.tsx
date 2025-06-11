import type { MessagesType } from "../../types/messages";
import Message from "./Message";

const Messages = () => {
  const messages: MessagesType[] = [];
  return (
    <div className="px-4 flex-1 overflow-auto">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};
export default Messages;
