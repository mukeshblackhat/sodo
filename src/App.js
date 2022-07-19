import './App.css'
import Navbar from './components/navbar/Navbar'
import Split from './components/split/Split'
import LogoLine from './components/LogoLine/Logoline'


function App() {
  return (
    <div className="App">
      <Navbar className="navbar"/>
      <Split/>
      <LogoLine/>
    </div>
  );
}

export default App;
