import { useState } from "react";
import { useNavigate } from "@remix-run/react";
import { cards } from "./data"; // ปรับเส้นทางให้ถูกต้องถ้าจำเป็น

function Profiles({
  id,
  nam,
  bio,
  bgp,
  imgu,
  usrn,
  cdat,
  onShowDetail
}: {
  id: number;
  nam: string;
  bio: any;
  bgp: string;
  imgu: string;
  usrn: string;
  cdat: string;
  onShowDetail: (id: number) => void;
}) {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex">
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        style={{ backgroundImage: `url(${bgp})`, color: "blue" }}
        title={nam}
      ></div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">{nam}</div>
          <p className="text-gray-700 text-base">{bio}</p>
        </div>
        <div className="flex items-center">
          <img className="w-10 h-10 rounded-full mr-4" src={imgu} alt="My icon" />
          <div className="text-sm">
            <p className="text-gray-900 leading-none">{nam}</p>
            <p className="text-gray-600">{cdat}</p>
          </div>
        </div>
        <button
          className="mt-2 bg-blue-500 text-white rounded px-4 py-2"
          onClick={() => onShowDetail(id)}
        >
          Show Details
        </button>
      </div>
    </div>
  );
}

export default function MyCards() {
  const [detailId, setDetailId] = useState<number | null>(null);
  const navigate = useNavigate();

  const cardItems = cards.map((cardItem) => (
    <Profiles
      key={cardItem.id}
      id={cardItem.id}
      nam={cardItem.name}
      bio={cardItem.biog}
      bgp={cardItem.bgProf}
      imgu={cardItem.userIcon}
      usrn={cardItem.userName}
      cdat={cardItem.createdAt}
      onShowDetail={(id) => {
        setDetailId(id);
        navigate(`/cards/${id}`); 
      }}
    />
  ));

  return (
    <div className="m-3 bg-stone-900 p-10">
      <h1 className="text-3xl font-bold text-slate-50">My Cards : Pattarak Sawatdee</h1>
      <div className="flex flex-row">
        <div className="m-2 p-3 bg-yellow-200 rounded-3xl">
          #webProgramming #softwareengineering
        </div>
      </div>
      {cardItems}
      <hr />
    </div>
  );
}
