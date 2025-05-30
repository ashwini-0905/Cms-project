
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'

import React from 'react';
import { Link } from "react-router-dom";
// import Home from './pages/Home';
import Landing from './pages/Landing';

function App() {
  return (
    <div>
     {/* <Home/> */}
      <Landing></Landing>
          </div>
  );
}

export default App;

import { useState } from 'react'
import React from 'react';
// import Scheduling from './pages/Scheduling';
 import Homee from './pages/dashboard/Homee';
// import Landing from './pages/Landing';
//import Basic from './layouts/Basic';
//import Reports from './pages/dashboard/Reports';

function App(props) {
  return (
    <div>
 {/* <Basic></Basic> */}
 {/* <Reports></Reports> */}
 <Homee></Homee>
    </div>
  );
}



export default App

