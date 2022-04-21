
import "./Contact.css"
import { useForm } from 'react-hook-form'
import FormErrors from "../FormErrors/FormErrors";

export default function ContactPage() {
  const { register, handleSubmit, watch,  formState: {errors}} = useForm()
  const submit = (data) => {
    console.log(data)
  };
  console.log(watch("name"))
  console.log(errors);
  return (
      <div className="formulario">
    <form onSubmit={handleSubmit(submit)}>
    
      <div>
        <label htmlFor="">Name</label>
        <input type="text" {...register('name', {required: true, minLength: 3})} />
        <FormErrors error={errors.name}/>
      </div>

      <div>
        <label htmlFor="">Surname</label>
        <input type="text" {...register('surname', {required: true})}/>
        <FormErrors error={errors.surname}/>
      </div>

      <div>
        <label htmlFor="">Description</label>
        <textarea name="description" {...register('description', {required: true, minLength: 15})}/>
        <FormErrors error={errors.description}/>
      </div>

      <div>
        <label htmlFor="">Gender</label>
        <select {...register('gender')}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        <input type="submit" />
   
      </div>

      
    </form></div>
  )
}
