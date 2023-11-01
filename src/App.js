import './App.css';
import Navbar from "./components/Navbar";


// lets declare global js variable
//let name = "shubham"
function App() {
  // Important pts -
  // everything inside the return of this function based component is jsx
  // app.js file is what finally runs on our react-application
  // in jsx we use className instead of class we write in html
  // camelCasing is used while writing code
  // Everything inside {} curvy brackets is seen/resolved as js inside function component
  return (
      <>
          <Navbar title="TextWeb" about="Aboutus"/>
      </>
  );
}

export default App;
