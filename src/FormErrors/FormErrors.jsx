export default function FormErrors({error}){
    return( 
    <div>
        {error && <>
        {error.type==="required" && <span> It's required</span>} 
        
        {error.type==="minLength" && <span>Too short</span>} 
        </>}</div> 
    
    )}
   

