import React, { Suspense } from 'react';
import Model1 from "./components/3Dmodels/Model1"
import Model2 from "./components/3Dmodels/Model2"
import './App.css'

function App() {
  return (
    <>
      <Model1 />
      <Model2 />
    </>
  );
}

export default App;
