import { space } from "postcss/lib/list";
import { cards } from "./data";

function Ismember ({ act } : {act: boolean}) {
    if(act)
        return <span>  ✅ This checked</span>
        else 
        return <span> ❌ Dis not VIP </span>
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
        <Ismember act = {act}/>
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
    const name = "Pattarak Sawatdee";
    const note = "#webProgramming #softwareengineering";
    const chk = true;

    const cardItems = cards.map(cardItem => 

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
     return (
        <>
            <h1>My Cards : Pattarak Sawatdee</h1>
            <p>{note}</p>
            {/* <Profiles /> */}
            {cardItems}
        </>
     );
}