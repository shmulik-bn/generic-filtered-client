import './App.css';
import { Header } from './components/Header/Header';
import { PersonTable } from './components/PersonTable/PersonTable';
import { UseGetPersonData } from './core/hooks/getPersonData.hook';




function App() {
  UseGetPersonData();

  return (
    <div className="App">
      <Header/>
      <PersonTable />
    </div>
  );
}

export default App;
