import logo from './logo.svg';
import './App.css';
import MyNavbar from './components/MyNavbar';
import ValaszdKi from './components/ValaszdKi';
import Cim from './components/Cim';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Tanuljunk angolul!
      </header>
      <MyNavbar/>
      <Cim/>
      <ValaszdKi/>
    </div>
  );
}

export default App;
