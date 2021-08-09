import React, {useState} from 'react';

let counter = 0;

const Form = () => {

  counter++;

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
    <div className="container">
        <div className="header">
          <h2>Form HandleChange</h2>
          <span className="counter">Render {counter}</span>
        </div>
        
        <form onSubmit={sendForm} className="formulario">
            <div className="campo">
              <label>Name:</label>
              <input type="text" name="nombre"  onChange={handleInput}/>
            </div>

            <div className="campo">
              <label>Last Name:</label>
              <input type="text" name="apellido"  onChange={handleInput}/>
              {result}
            </div>

          <input type="submit" value="Send" />
        </form>
     </div> 
    </>
   );
}
 
export default Form;