import React, {Component, useState} from "react";
import ShareReport from './components/ShareReport';

import './css/App.css';

function App() {

  
  const [showReportForm, setShowReportForm] = useState(true);


  const reportFormHandler = (email, reportNotes) =>

  {
    //service.reports call to backend
    console.log(email, reportNotes);
    
  }

  
  //const [reportNotes, setReportNotes] = useState(0);
  const closeReportForm = () => {
   setShowReportForm(!showReportForm);
  }

  return (
    <div className="App">
      {showReportForm && <ShareReport formHandler = {reportFormHandler} closeReportForm = {closeReportForm}/> }
  
    </div>
  );
}

export default App;
