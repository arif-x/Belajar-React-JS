import './App.css';
import Click from './Components/Click';
import Counter from './Components/Counter';
import ParentComponent from './Components/ParentComponent';

function App() {
  return (
    <div>
      <Click />
      <Counter />
      <ParentComponent />
    </div>    
  );
}

export default App;
