import Axios from './ Components/Axios';
import Counter from './ Components/Counter';
import Header from './ Components/Header';
import Relogio from './ Components/Relogio';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Counter />

      <br />
      <br />

      <Relogio />

      <br />
      <br />

      <Axios />
    </div>
  );
}

export default App;
