import { useState } from 'react'
import React from 'react';
import Schedule from './pages/dashboard/Schedule'
 import Homee from './pages/dashboard/Homee';
// import Landing from './pages/Landing';
import Basic from './layouts/Basic';
//import Reports from './pages/dashboard/Reports';

function App(props) {
  return (
    <div>
 { <Basic></Basic> }
 {/* <Reports></Reports> */}
 {<Homee></Homee> }
 <Schedule></Schedule>
    </div>
  );
}



export default App
