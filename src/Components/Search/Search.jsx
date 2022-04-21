
import { useForm } from "react-hook-form";
import "./Search.css"
export default function Search({onSubmit}){
    const {register, handleSubmit} = useForm();
    
    return <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder={"Buscar.."}className="Buscador"{...register("title")}type="text"/>
    </form>
}