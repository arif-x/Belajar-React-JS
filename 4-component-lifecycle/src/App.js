import './App.css';
import ClassProps from './Components/ClassProps';
import FunctionalProps from './Components/FunctionalProps';
import NewComponent from './Components/NewComponent';
import StateComponent from './Components/StateComponent';

function App() {
  return (
    <div>
      <h1>Props</h1>
      <ClassProps name="Arip" place="di Rumah">
        <p>Child Component</p>
      </ClassProps>
      <ClassProps name="Arip" place="di Rumah">
        <button>Child Component</button>
      </ClassProps>
      <FunctionalProps name="Arip" place="Omah" />

      <h1>States</h1>
      <NewComponent />
      <StateComponent></StateComponent>
    </div>
  );
}

export default App;
