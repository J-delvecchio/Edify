import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavBar } from './components/NavBar/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemCounter } from './components/Counter/ItemCounter';
import './index.css';
function App() {
  return (
    <div className="App">
      <NavBar titulo="Edify" />
      <ItemListContainer nombre="Joaquin"/>
      <ItemCounter/>
    </div>
  );
}

export default App;
