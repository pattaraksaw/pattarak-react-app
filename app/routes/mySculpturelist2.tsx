import { useState} from "react";
import { sculptureList } from "./SculptureLists";

export default function EProject() {
    const [index, setIndex] = useState(0);
    const [sctList, setSctList] = useState( sculptureList );


    function handleClickNext() {
        if (index === sculptureList.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }
    function handleClickBack() {
    setSctList(
        sctList.filter(tmp => tmp.id !== sctList.id 
        )
    );
    }

   //let sculpture = sculptureList[index];

   return (
    <center>
        <div className="p-10 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url('./images/bg3.gif')`}}>
            <h1 className="text-3xl font-bold text-slate-50">Project</h1>
            {
                sctList.map(sculpture => (
            <div key={sculpture.id}>
                <button className=" bg-red-500 rounded-3xl" onClick={() => {
                    setSctList(
                        sctList.filter(tmp => 
                            tmp.id !== sculpture.id 
                        )
                    );
                 }} >
                Prev 
            </button>
            <button className=" bg-green-500 rounded-3xl" onClick={handleClickNext}>
                Next 
            </button>
                
            <h2 className="text-3xl font-bold text-slate-50">
                <i>{sculpture.name}</i> โดย 
                {sculpture.author}
            </h2>
            <h3 className="text-3xl font-bold text-slate-50">
                {index + 1} จาก {sculptureList.length}
            </h3>
            <img src={sculpture.url} 
            title={sculpture.name}
            />
            <p className="text-3xl font-bold text-slate-50">
                {sculpture.description}
            </p>
            <a href={sculpture.reference} 
            target="_blank" className="text-3xl font-bold text-green-500">อ้างอิง</a>
            </div>
            
       ) ) 
       }
      </div>
      </center>
      );

}