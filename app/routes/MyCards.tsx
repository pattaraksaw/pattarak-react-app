import { space } from "postcss/lib/list";
import { cards } from "./data";
import { act, useState } from "react";

function Ismember ({ id,act } : {id : number,act : boolean}) {
    if(act)
        return <span key={id}>  ✅ This checked</span>
        else 
        return <span key={id}> ❌ Dis not VIP </span>
}

function Profiles ({id, nam, bio, bgp, imgu, usrn,cdat,act} : {id:number, nam:string, bio:any, bgp:string, imgu:string, usrn:string,cdat:string,act:boolean}) {
    return (
        <div className="max-w-sm w-full lg:max-w-full lg:flex">
  <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url(${bgp})`,color: "blue"}} title={nam}>
  </div>
  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8">
      <p className="text-sm text-gray-600 flex items-center">
        <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        </svg>
        <Ismember id={id} act = {act}/>
      </p>
      <div className="text-gray-900 font-bold text-xl mb-2">{nam}</div>
      <p className="text-gray-700 text-base">สาขาวิชาเทคโนโลยีสารสนเทศ <br/>
      คณะบริหารธุรกิจและเทคโนโลยีสารสนเทศ <br/>
      มหาวิทยาลัยเทคโนโลยีราชมงคลตะวันออก วิทยาเขตจักรพงษ์ภูวนาภ</p>
    </div>
    <div className="flex items-center">
      <img className="w-10 h-10 rounded-full mr-4" src={imgu} alt="My icon" />
      <div className="text-sm">
        <p className="text-gray-900 leading-none">{nam}</p>
        <p className="text-gray-600">{cdat}</p>
      </div>
    </div>
  </div>
</div>
    );
}

export default function MyCards () {
const [active, setActive] = useState(true);

    const name = "Pattarak Sawatdee";
    const note = "#webProgramming #softwareengineering";
    const chk = true;

    const items = cards.filter(
      cardItem => cardItem.active === active 
    );

    const cardItems = items.map(cardItem => 

    <Profiles 
    id ={cardItem.id}
    nam ={cardItem.name}
    bio={cardItem.biog}
    bgp={cardItem.bgProf}
    imgu={cardItem.userIcon}
    usrn={cardItem.userName}
    cdat={cardItem.createdAt}
    act={cardItem.active}
    />
    );

function handleClickActive(){
  console.log("--> handleClickActive");
  setActive(true);
  alert("handleClickActive --> "+ active);
}
function handleClickNonAct(){
  console.log("--> handleClickNonAct");
  setActive(false);
  alert("handleClickNonAct --> "+ active);
}

     return (
        <div className="m-3 bg-stone-900 p-10">
            <h1 className="text-3xl font-bold text-slate-50">My Cards : Pattarak Sawatdee</h1>
            <div className="flex flex-row">
            <div className="m-2 p-3 bg-yellow-200 rounded-3xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5h6.75V15H4.5v-4.5ZM3.75 18h15A2.25 2.25 0 0 0 21 15.75v-6a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 1.5 9.75v6A2.25 2.25 0 0 0 3.75 18Z" />
</svg>
{note}</div>
            <div className="m-2 p-3 bg-yellow-200 rounded-3xl"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
</svg>
{note}</div>
            </div>
            {/* <Profiles /> */}
            {cardItems}
            <hr />
            <button className="w-1/2 bg-green-500 rounded-3xl" onClick={handleClickActive}>Active</button>
            <button className="w-1/2 bg-red-500 rounded-3xl" onClick={handleClickNonAct}>Non-Active</button>
        </div>
     );
}