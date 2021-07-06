import React, { Component, useState } from "react";
import '../css/App.css'
import styled from "styled-components";


const ShareReport = (props) => {




    const getYear = () => {
        return new Date().getFullYear();
    }

    const [currentYear, setCurrentYear] = useState(getYear())
    const [emails, setEmails] = useState();
    const [reportNotes, setReportNotes] = useState();

    const formatEmails = () => {
        let emailsFormatted = emails.split(",")
        return emailsFormatted

    }
    const handleSubmit = e => {
        e.preventDefault();
        //validate email call
        if (emails != null && reportNotes != null) {
            props.formHandler(formatEmails(emails), reportNotes);
        }
        else {
            alert("Please fill out the required fields.")
        }

    }

    return (
        <StyledShareReportFormContainer>

            <StyledExitBtn onClick={props.closeReportForm}>X</StyledExitBtn>

            <StyledShareReportForm type="submit" value="Submit">

                <StyledHeader>Primary Report {currentYear}</StyledHeader>
                <StyledLabel>Enter email addresses separated by coma {"\n"}</StyledLabel>
                <StyledInput type="email" placeholder="John.doe@pharmacy.net" onChange={e=> setEmails(e.target.value)} required></StyledInput>
                {"\n"}
                <StyledLabel>Add a note</StyledLabel>
                {"\n"}
                <StyledTextArea id="reportNotes" placeholder="Optional" onChange={e=> setReportNotes(e.target.value)} required></StyledTextArea>
                {"\n"}
                <StyledBtnDiv>
                    <StyledCancelBtn onClick={props.closeReportForm}>Cancel</StyledCancelBtn>
                    <StyledSubmitBtn type="submit" onClick={handleSubmit}>Share Report</StyledSubmitBtn>
                </StyledBtnDiv>
            </StyledShareReportForm>

        </StyledShareReportFormContainer>

    );


};


const StyledShareReportFormContainer = styled.div`
    margin: auto;
    justify-content: center;
    width: 586px;
    height: 597px;
    background-color: white;
    border-radius: 10px;
    margin-top:10%; 
    position: relative;

    *  {
        margin: 1%;
        margin-bottom: 10%;
        }
    `;

const StyledShareReportForm = styled.form`
    display:inline-block;
    text-align: left;
    width: 80%;
    height: 80%;
    margin-top: 15%;
    `;

const StyledHeader = styled.h2`
    text-align: center;
    font-size:22px;
    font-weight:500;
    margin-bottom: 5%;
    color: #121a2d;
   
    `;

const StyledLabel = styled.label`
    color: #089bab;
    font-size:small;
    `;

const StyledInput = styled.input`
    border:none;
    border-bottom: 1px solid #121A2D;
    width: 90%;

    :focus, .report-notes-input:focus {
        outline: none;
    }
    ::placeholder {
       
        font-family: 'Poppins', sans-serif;
     }

   
    `;

const StyledSubmitBtn = styled.button`
    background-color: #089bab;
    color:white;
    width: 200px;
    height:40px;
    margin-left: 1%;
    `;

const StyledCancelBtn = styled.button`
    background-color: #e7e7e8;
    width: 100px;
    height: 40px;
    margin-right: 1%;
    `;

const StyledTextArea = styled.textarea`
    width: 90%;
    height:100px;
    border-radius: 4px;
    border: 2px solid #121a2d;
    resize: none;

    :focus, .report-notes-input:focus {
        outline: none;
    }

    ::placeholder {
        opacity: .5;
        color:#121a2d;
        font-family: 'Poppins', sans-serif;
        }
    `;

const StyledBtnDiv = styled.div`
    text-align: center;
    margin-top:10%;
    `;

const StyledExitBtn = styled.button`
    position:absolute;
    right: 40px;
    top: 25px;
    background-color: white;
    opacity: .5;
    font-size:larger;
    width:3em;
    font-weight:lighter;
    color: #121a2d;
    width: 2%;
    height: 2%;
    border: 2px solid black;

    `;

export default ShareReport;