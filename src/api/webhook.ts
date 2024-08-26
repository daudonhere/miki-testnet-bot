import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_API_URL = `https://api.telegram.org/bot${TOKEN}`;

interface TelegramMessage {
  chat: {
    id: number;
  };
  text: string;
}

interface TelegramUpdate {
  message: TelegramMessage;
}

const handleMessage = async (chatId: number, text: string) => {
  const message = `You said: ${text}`;
  await axios.post(`${TELEGRAM_API_URL}/sendMessage`, {
    chat_id: chatId,
    text: message,
  });
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { message }: TelegramUpdate = req.body;
    if (message && message.text) {
      await handleMessage(message.chat.id, message.text);
    }
    res.status(200).send('OK');
  } else {
    res.status(405).send('Method Not Allowed');
  }
}