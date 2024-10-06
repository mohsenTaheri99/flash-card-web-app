import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
type UserProviderProps = {
  children: ReactNode;
};
type User = {
  name: String;
  coins: number;
  profit: number;
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
  const [user, SetUser] = useState<User>({
    name: "mohsen",
    profit: 0.005,
    coins: 0,
  });

  return (
    <userContext.Provider value={user}>
      <setUserContext.Provider value={SetUser}>
        {children}
      </setUserContext.Provider>
    </userContext.Provider>
  );
}

export default UserProvider;
