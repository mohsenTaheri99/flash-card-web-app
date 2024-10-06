import { ReactNode, createContext, useContext, useState } from "react";
type DeskProviderProps = {
  children: ReactNode;
};
export type card = {
  id: string;
  front: string;
  back: string;
};
export type desk = {
  id: string;
  title: string;
  cards: card[];
};

type controller = {
  addDesk: (desk: desk) => void;
  removeDesk: (deskId: string) => void;
  addCard: (card: card, deskId: string) => void;
  editeDesk: (updateDesk: desk) => void;
};

const userContext = createContext<desk[] | null>(null);
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
  const [desks, SetDesks] = useState<desk[]>(desksTest);
  function addDesk(desk: desk) {
    SetDesks((prevDesks) => [...prevDesks, desk]);
  }
  function removeDesk(deskId: string) {
    SetDesks((prevDesks) => prevDesks.filter((desk) => desk.id !== deskId));
  }
  function addCard(card: card, deskId: string) {
    SetDesks((prevDesks) => {
      return prevDesks.map((desk) => {
        if (desk.id === deskId) {
          desk.cards.push(card);
          return { ...desk };
        }
        return desk;
      });
    });
  }
  function editeDesk(UpdatedDesk: desk) {
    SetDesks((prevDesks) => {
      return prevDesks.map((desk) => {
        if (desk.id === UpdatedDesk.id) {
          return UpdatedDesk;
        }
        return desk;
      });
    });
  }

  return (
    <userContext.Provider value={desks}>
      <desksCntollerContext.Provider
        value={{ addDesk, removeDesk, addCard, editeDesk }}
      >
        {children}
      </desksCntollerContext.Provider>
    </userContext.Provider>
  );
}

export default DeskProvider;

const desksTest: desk[] = [
  {
    id: "1",
    title: "جغرافیا",
    cards: [
      { id: "1", front: "مشهد شهر کدام استان است", back: "خراسان رضوی" },
      {
        id: "2",
        front: "قله دماوند در کدام رشته‌کوه قرار دارد",
        back: "البرز",
      },
      { id: "3", front: "بزرگترین دریاچه جهان کدام است", back: "دریای خزر" },
      { id: "4", front: "رود کارون از کدام شهر عبور می‌کند", back: "اهواز" },
      { id: "5", front: "کشور پهناورترین قاره آسیا چیست", back: "روسیه" },
    ],
  },
  {
    id: "2",
    title: "ریاضیات",
    cards: [
      { id: "1", front: "حاصل جمع ۵ و ۷ چیست", back: "۱۲" },
      { id: "2", front: "فرمول مساحت دایره چیست", back: "πr²" },
      { id: "3", front: "حاصل‌ضرب ۶ در ۸ چیست", back: "۴۸" },
      { id: "4", front: "عدد پی حدودا چند است", back: "۳.۱۴" },
      { id: "5", front: "معکوس عدد ۴ چیست", back: "¼" },
    ],
  },
  {
    id: "3",
    title: "تاریخ",
    cards: [
      {
        id: "1",
        front: "نخستین پادشاه هخامنشیان چه کسی بود",
        back: "کوروش کبیر",
      },
      { id: "2", front: "جنگ جهانی دوم در چه سالی آغاز شد", back: "۱۹۳۹" },
      { id: "3", front: "پایتخت امپراتوری روم چه شهری بود", back: "رم" },
      {
        id: "4",
        front: "چه کسی دیوار چین را ساخت",
        back: "امپراتور کین شی هوانگ",
      },
      {
        id: "5",
        front: "تمدن مصر باستان در کنار کدام رود شکل گرفت",
        back: "نیل",
      },
    ],
  },
  {
    id: "4",
    title: "علوم",
    cards: [
      { id: "1", front: "چه گازی برای تنفس انسان ضروری است", back: "اکسیژن" },
      { id: "2", front: "بزرگترین سیاره منظومه شمسی چیست", back: "مشتری" },
      { id: "3", front: "واحد اندازه‌گیری شدت جریان برق چیست", back: "آمپر" },
      {
        id: "4",
        front: "در فرآیند فتوسنتز چه چیزی تولید می‌شود",
        back: "اکسیژن و گلوکز",
      },
      { id: "5", front: "نزدیکترین ستاره به زمین چیست", back: "خورشید" },
    ],
  },
  {
    id: "5",
    title: "ادبیات",
    cards: [
      { id: "1", front: "مولوی شاعر کدام کشور است", back: "ایران" },
      { id: "2", front: "شاهنامه اثر کیست", back: "فردوسی" },
      { id: "3", front: "مثنوی معنوی شامل چند دفتر است", back: "۶ دفتر" },
      {
        id: "4",
        front: "حافظ شیرازی در چه قرنی زندگی می‌کرد",
        back: "قرن هشتم",
      },
      { id: "5", front: "غزل چیست", back: "نوعی شعر با موضوع عشق و عرفان" },
    ],
  },
];
