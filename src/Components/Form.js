import React, {useState} from 'react';
import Header from './Header';

const Form = () => {

  const [form, setForm] = useState({});
  const [result, setResult] = useState("");

  

  const handleInput = e => {
    setForm({
      ...form, [e.target.name] : e.target.value
    })
  }
  
  const sendForm = (e) => {
    e.preventDefault();
    setResult(JSON.stringify(form));
  
  }

  return ( 
    <>
    {console.log("hola")}
      <Header/>

      <h2>Form HandleChange</h2>
      <form onSubmit={sendForm}>
        <label>Name:</label>
        <input type="text" name="nombre"  onChange={handleInput}/>
        <label>Last Name:</label>
        <input type="text" name="apellido"  onChange={handleInput}/>
        {result}
        <input type="submit" value="Send" />
      </form>
    </>
   );
}
 
export default Form;