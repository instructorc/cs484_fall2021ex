import logo from './task_list.png';
import Task from './Task';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="300" style={{margin: "auto", display: "block"}} />
        <Task />
        <h2>Predefined Task above</h2>
        
        <br />

        
      </header>
    </div>
  );
}

export default App;
