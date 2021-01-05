import './App.css';
import Home from './pages/Home';
import Mission from './pages/Mission';
import OurProcess from './pages/OurProcess';
import Trend from './pages/Trend';
import Navbar from './components/Navbar';
import ComingSoon from './pages/ComingSoon';
import { setConfiguration } from "react-grid-system";

setConfiguration({ gutterWidth: 100 });

export default function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Trend/>
      <Mission/>
      <OurProcess/>
      <ComingSoon/>
    </div>
  );
}
