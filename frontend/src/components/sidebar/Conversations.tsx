import type { ConversationType } from "../../types/conversation";
import Conversation from "./Conversation";

const Conversations = () => {
  const conversations: ConversationType[] = [];
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation) => (
        <Conversation key={conversation.id} conversation={conversation} />
      ))}
    </div>
  );
};
export default Conversations;
