//import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [alert, setAlert] = useState(null)
  const newAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const [mode, setmode] = useState(true)
  const toggleMode = () => {
    setmode(!mode)
    newAlert(mode ? "Dark mode has been enabled" : "Light mode has been enabled", "primary")
  }
  const themeStyle = {
    backgroundColor: !mode ? '#000d4c' : '#ffffff',
    color: !mode ? 'white' : 'black',
    padding: '20px',
    transition: '0.3s'
  };
  return (
    <>

      <Navbar title="TextUtils" menu1="Home" menu2="About" menu3="Contact us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} themeStyle={themeStyle} mode={mode} />
      <TextForm head="Enter Your text here" phText="Enter your text here..." themeStyle={themeStyle} newAlert={newAlert} />
      <About themeStyle={themeStyle} />

    </>
  );
}

export default App;