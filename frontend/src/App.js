import React, {useState, useEffect, useRef} from 'react';
import Home from './pages/Home';
import Mission from './pages/Mission';
import OurProcess from './pages/OurProcess';
import Trend from './pages/Trend';
import Navbar from './components/Navbar';
import ComingSoon from './pages/ComingSoon';
import { setConfiguration } from "react-grid-system";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


setConfiguration({ gutterWidth: 100 });

export default function App() {

  const [dispToast, setToast] = useState('')
  const initialRender = useRef(true);

	const notify = () => toast.info(dispToast, {
      position: "bottom-right",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
  });

  useEffect(() => { 
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      notify();
    }
  })

  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <Home handleToast={setToast}/>
      <Trend/>
      <Mission/>
      <OurProcess/>
      <ComingSoon handleToast={setToast}/>
    </div>
  );
}
