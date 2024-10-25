import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Shelf } from "../../types/flashCard.type";
import { useUserContext } from "./userProvider";
type DeskProviderProps = {
  children: ReactNode;
};
type controller = {};

const userContext = createContext<Shelf[] | null>(null);
const desksCntollerContext = createContext<null | controller>(null);

export const useDesksContext = () => {
  const desks = useContext(userContext);
  if (desks === null) throw new Error("user not exist");
  return desks;
};
export const useDesksCntollerContext = () => {
  const DesksCntoller = useContext(desksCntollerContext);
  if (DesksCntoller === null) throw new Error("setUser function is not exist");
  return DesksCntoller;
};

function DeskProvider({ children }: DeskProviderProps) {
  const user = useUserContext();
  const [shelfs, setShelfs] = useState<Shelf[]>([]);

  useEffect(() => {
    if (user.Authenticated && shelfs.length === 0) {
      setShelfs(
        user.shelfsIds.map((id) => {
          return { _id: id };
        })
      );
    }
  }, [user]);
  return (
    <userContext.Provider value={shelfs}>
      <desksCntollerContext.Provider value={{}}>
        {children}
      </desksCntollerContext.Provider>
    </userContext.Provider>
  );
}

export default DeskProvider;
