import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { setConfiguration } from "react-grid-system";

setConfiguration({ gutterWidth: 100 });

export default function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
    </div>
  );
}
