import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Home from './components/Home/Home';
import Worcks from './components/Worcks/Worcks';

function App() {
  return (
    <div className="App">
      <Home />
      <About/>
      <Worcks />
      <Contacts />
    </div>
  );
}

export default App;
