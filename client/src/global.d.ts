// src/global.d.ts
declare global {
  interface Window {
    Telegram: TelegramWebApp;
  }
}

interface TelegramWebApp {
  WebApp: TelegramWebAppInstance;
}

interface TelegramWebAppInstance {
  initData: string;
  initDataUnsafe: {
    user?: TelegramUser;
    [key: string]: any;
  };
  ready(): void;
  MainButton: {
    setText(text: string): void;
    show(): void;
    hide(): void;
    onClick(callback: () => void): void;
  };
  sendData(data: string): void;
  close(): void;
  // Add other methods and properties as needed
}

interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
  language_code?: string;
}

// This is important to ensure the file is a module
export {};
