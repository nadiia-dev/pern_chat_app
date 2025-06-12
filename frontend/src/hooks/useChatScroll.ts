import { useEffect, useRef } from "react";
import type { MessageType } from "../store/useConversation";

function useChatScroll(dep: MessageType[]) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setTimeout(() => {
      if (ref.current) {
        ref.current.scrollTop = ref.current.scrollHeight;
      }
    }, 100);
  }, [dep]);

  return ref;
}

export default useChatScroll;
