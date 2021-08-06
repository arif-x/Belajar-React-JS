import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './Components/FunctionalComponent';
import ComponentClass from './Components/ComponentClass';
import {FirstClass, SecondClass} from './Components/MultiClass'

function App() {
  return (
    <div>
      <FunctionalComponent />
      <ComponentClass />
      <FirstClass />
      <SecondClass />
    </div>    
  );
}

export default App;
