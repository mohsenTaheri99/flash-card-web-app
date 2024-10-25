import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { TelegramUser } from "../../global";
import { getInitData } from "../api/flashcard.api";
type UserProviderProps = {
  children: ReactNode;
};
type User = TelegramUser & {
  shelfsIds: string[];
  Authenticated: boolean;
};

const userContext = createContext<User | null>(null);
const setUserContext = createContext<null | Dispatch<SetStateAction<User>>>(
  null
);

export const useUserContext = () => {
  const user = useContext(userContext);
  if (user === null) throw new Error("user not exist");
  return user;
};
export const useSetUserContext = () => {
  const setUser = useContext(setUserContext);
  if (setUser === null) throw new Error("setUser function is not exist");
  return setUser;
};
function UserProvider({ children }: UserProviderProps) {
  if (!window.Telegram.WebApp.initDataUnsafe.user) {
    throw new Error("telegram user not found");
  }

  const [user, SetUser] = useState<User>({
    id: window.Telegram.WebApp.initDataUnsafe.user.id,
    username: window.Telegram.WebApp.initDataUnsafe.user.username,
    first_name: window.Telegram.WebApp.initDataUnsafe.user.first_name,
    last_name: window.Telegram.WebApp.initDataUnsafe.user.last_name,
    photo_url: window.Telegram.WebApp.initDataUnsafe.user.photo_url,
    shelfsIds: [],
    Authenticated: false,
  });
  useEffect(() => {
    const fetchInitData = async () => {
      try {
        const initUserInfo = await getInitData();
        SetUser({
          ...user,
          shelfsIds: initUserInfo.shelfs,
          Authenticated: true,
        });
      } catch (error) {
        console.error("Failed to fetch initial user data:", error);
        setTimeout(fetchInitData, 5000);
      }
    };
    fetchInitData();
  }, []);
  return (
    <userContext.Provider value={user}>
      <setUserContext.Provider value={SetUser}>
        {children}
      </setUserContext.Provider>
    </userContext.Provider>
  );
}

export default UserProvider;
