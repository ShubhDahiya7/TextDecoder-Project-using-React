import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from "./components/About";


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
          <Navbar title="TextDecoder" about="Aboutus"/>
          {/*my-3 is a class which gives margin along y of 3*/}
          <div className="container my-3">
          <TextForm heading="Enter Your text to analyze"/>
              <About/>
          </div>
      </>
  );
}

export default App;
