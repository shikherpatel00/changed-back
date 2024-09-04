import { create } from "zustand";

const useConversastion = create((set)=>({
    selectedConversation: null,
    setSelectedConversation: (selectedConversation) => set({selectedConversation}),
    messages: [],
    setMessages: (messages)=>set({messages})  
}))

export default useConversastion