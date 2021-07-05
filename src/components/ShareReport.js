import React, {Component, useState} from "react";
import '../css/App.css'
import '../css/ShareReportForm.css'
import closeButton from "../resources/close-button.png"

const ShareReport = (props) => {

   const getYear = () => {
        return new Date().getFullYear();
    }

    const [currentYear, setCurrentYear] = useState(getYear())
    const [emails, setEmails] = useState(0);
    const [reportNotes, setReportNotes] = useState(0);


    const handleEmailChange = event => {
        let emailInput = event.target.value;
      
        setEmails(emailInput);
      };

      const handleNotesChange = event => {
        let reportNotesInput = event.target.value;
        setReportNotes(reportNotesInput);
      };
    
    const formatEmails = () => {
        let emailsFormatted = emails.split(",")
        return emailsFormatted
       
    }
    const handleSubmit = e => {
        e.preventDefault();
        //validate email call

        props.formHandler(formatEmails(emails), reportNotes);
        
    }

    return (
        <div className="share-report-container">
        
        <button className="share-report-exit-btn"><img src ={closeButton} alt=""></img></button>
        <form className ="share-report-form" type="submit" value="Submit">
            
            <h2>Primary Report {currentYear}</h2>
            <label>Enter email addresses separated by coma {"\n"}</label>
            <input id="email" type="email" className="email-input"placeholder="John.doe@pharmacy.net" onChange={handleEmailChange} required></input>
            {"\n"}
            <label>Add a note</label>
            {"\n"}
            <textarea id="reportNotes"className ="report-notes-input" placeholder="Optional" onChange={handleNotesChange} required></textarea>
            {"\n"}
            <div className="share-report-form-btns">
                <button className="cancel-btn">Cancel</button>
                <button className="share-report-submit-btn" type="submit" onClick={handleSubmit}>Share Report</button>
            </div>
        </form>

        </div>
        
    );


};



export default ShareReport;