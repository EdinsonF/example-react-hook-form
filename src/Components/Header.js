
  let counter = 0;

const Header = () => {

  counter++;
  return (  
    <>
        
        <button type="button">Render {counter}</button>
    </>
  );
}
 
export default Header;