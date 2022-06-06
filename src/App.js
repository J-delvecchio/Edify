import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { NavBar } from './components/NavBar/Navbar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

import './index.css';
function App() {
  return (
    <div className="App">
      <NavBar titulo="Edify" />
      <ItemListContainer nombre="Joaquin"/>
    </div>
  );
}

export default App;
