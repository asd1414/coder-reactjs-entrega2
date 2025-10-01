import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import './App.css'

function App() {
 



  return (
    <div className="app">
      <NavBar />
      <ItemListContainer greetings={"La mejor tienda virtual"} />
    </div>
  )
}

export default App
