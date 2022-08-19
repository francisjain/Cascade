import Avatarsample from './Avatarsample';
import Selectcheckbox from './selectcheck'
import './App.css';
import Test from './Test';
import Materv2 from './materV2'
import Routinghomepage from './routingpages'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Withselectoption from './routingpages/Withselectoption';
import Notselectoption from './routingpages/Notselectoption';
import Formvalide from './formvalide'

const userData = [
  { name: "Don", id: "02" },
  { name: "Parvathy", id: "03" },
  { name: "Kp", id: "04" },
  { name: "Francis", id: "05" },
  { name: "Harish", id: "06" }
];

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Formvalide />} />
          <Route path='/routhome' element={<Routinghomepage />} />
          <Route path='/avatar' element={<Avatarsample />} />
          <Route path='/selectcheckbox' element={<Selectcheckbox Data={userData} />} />
          <Route path='/withselectoption' element={<Withselectoption Data={userData} />} />
          <Route path='/withoutselectoption' element={<Notselectoption Data={userData} />} />


          <Route path='/materv2' element={<Materv2 />} />
          <Route path='/test' element={<Test />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
