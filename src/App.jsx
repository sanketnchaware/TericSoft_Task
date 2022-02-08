import logo from './logo.svg';
import './App.css';
import { Header } from "./components/Header"
import { Navbar } from "./components/Navbar"
import { Highlights } from "./components/Highlights"
import { Provider } from "react-redux";
import { store } from "./redux/store"

function App() {
  return (

    <Provider store={store}>
      <div className="App">
        <Header />
        <Navbar />
        <Highlights />



        <h1>TericSoft</h1>
      </div>
    </Provider>
  );
}

export default App;
