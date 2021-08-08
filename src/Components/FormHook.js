import React, {useState} from 'react';
import Header from './Header';


const FormHook = () => {

  const [form, setForm] = useState({});

  

  return ( 
    <>
    

      <h2>Form Hook</h2>
      <form>
        <label>Name:</label>
        <input type="text" name="nombre" />
        <label>Last Name:</label>
        <input type="text" name="apellido" />
        <input type="submit" value="Send" />
      </form>
    </>
   );
}
 
export default FormHook;