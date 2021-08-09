import React, {useState} from 'react';
import { useForm } from "react-hook-form";

let counter= 0;
const FormHook = () => {

  counter++;

  const [result, setResult] = useState();
  const { register, formState: { errors }, handleSubmit } = useForm();

  console.log(errors?.nombre?.type);
  const onSubmit = (data) => {
   console.log("entro");
    setResult(JSON.stringify(data))
  }


  return ( 
    <>
    <div className="container">
      <div className="header">
        <h2>Form Hook</h2>
        <span className="counter">Render {counter}</span>
      </div>
      
        <form onSubmit={handleSubmit(onSubmit)} className="formulario"> 
          
          <div className="campo">
            <label>Name:</label>
            <input type="text"
              {...register("nombre", 
                  { 
                    required: true, 
                    maxLength: 20, 
                    minLength: 4 }
              )}
            />
            <div className="mensajes">
              {errors?.nombre?.type === "required" 
                  && <p>This field is required</p>}
              {errors?.nombre?.type === "maxLength" 
                  && 
                <p> name cannot exceed 20 characters</p>
              }
              {errors?.nombre?.type === "minLength" 
                  && 
                <p> name must have min 4 characters</p>
              }
            </div>
          </div>
            <div className="campo">
            <label>Last Name:</label>
            <input type="text"
              {...register("apellido", 
                { 
                  required: true, 
                  maxLength: 20, 
                  minLength: 4 }
              )}
            />
          {errors?.apellido?.type === "required" 
              && <p>This field is required</p>}
          {errors?.apellido?.type === "maxLength" 
              && 
            <p> name cannot exceed 20 characters</p>
          }
          {errors?.apellido?.type === "minLength" 
              && 
            <p> name must have min 4 characters</p>
          }
          {result}
            </div>
          <input type="submit" value="Send" />

        
        </form>
      </div>
    </>
   );
}
 
export default FormHook;