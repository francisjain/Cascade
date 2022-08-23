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
import React, { useEffect, useState } from 'react';
import Userdetail from './formvalide/Userdetail';

const userData = [
  { name: "Don", id: "02", isChecked: false },
  { name: "Parvathy", id: "03", isChecked: false },
  { name: "Kp", id: "04", isChecked: false },
  { name: "Francis", id: "05", isChecked: false },
  { name: "Harish", id: "06", isChecked: false }
];

function App() {

  const [itemdata, setItemdata] = useState([]); // the lifted state


  const getData = (index) => { // the callback. Use a better name
    console.log(index, "ok");
    setItemdata([index]);
  };

  console.log(itemdata, "qqqqq");

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Formvalide getData={getData} />} />
          <Route path='/routhome' element={<Routinghomepage />} />
          <Route path='/avatar' element={<Avatarsample />} />
          <Route path='/selectcheckbox' element={<Selectcheckbox Data={userData} />} />
          <Route path='/withselectoption' element={<Withselectoption Data={userData} />} />
          <Route path='/withoutselectoption' element={<Notselectoption Data={userData} />} />
          <Route path='/userDetail' element={<Userdetail data={itemdata} />} />


          <Route path='/materv2' element={<Materv2 />} />
          <Route path='/test' element={<Test />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
