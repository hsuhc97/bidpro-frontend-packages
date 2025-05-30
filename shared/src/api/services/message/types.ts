export type Message = {
  id: string;
  recipientId: string;
  recipientName: string;
  title: string;
  content: string;
  type: string;
  hasRead: boolean;
  creation: Date;
}

export type MessagePreview = {
  type: string;
  unreadCount: number;
  lastMessage: Message;
};

export type MessagePreviews = {
  unreadCount: number;
  previews: Record<string, MessagePreview>;
}