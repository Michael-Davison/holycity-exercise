import React, {Component, useState} from "react";
import ShareReport from './components/ShareReport';

import './css/App.css';

function App() {

  
  const [showReportForm, setShowReportForm] = useState(true);


  const reportFormHandler = (emails, reportNotes) =>

  {
   
    console.log(emails, reportNotes);

    //opens your native mailbox and populates with params
    window.open('mailto:'+emails+'?subject=subject&body=' + reportNotes);
    
  }

  
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
