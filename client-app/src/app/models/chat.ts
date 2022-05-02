export interface Message {
    MessageId?: string;
    chatId?: string;
    createdAt: Date;
    recievedAt?: Date;
    readAt?: Date;
    body: string;
    username: string;
    displayName: string;
    deleted: boolean;
    image: string;
}

export interface Chat {
    chatId?: string;
    startedAt: Date;
    toEmail: string;
    fromEmail: string;
    messages: Message[];
}