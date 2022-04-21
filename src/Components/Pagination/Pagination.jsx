
import { useState } from "react";
 
export default function Pagination ({onClickAnimes}){
    const [actualPage, setActualPage ]= useState(1)
    const changePage = (newPage) =>{
        setActualPage(newPage);
        onClickAnimes(newPage * 12)
    }
   
   return (
       <div>
          <button className="btn"onClick={()=> changePage(actualPage -1)} >{"<"}</button>
          {actualPage}
          <button className="btn"onClick={()=> changePage (actualPage +1)}>{ ">"}</button>
   
       </div>
   
   )

}