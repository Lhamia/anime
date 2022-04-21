import { useState } from "react"
import"./loading.css"

export default function Loading(){
   const [isLoading, setIsLoading]= useState (false);
   return isLoading && <div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
}