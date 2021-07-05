import ShareReport from './components/ShareReport';
import './css/App.css';

function App() {


  const reportFormHandler = (email, reportNotes) =>

  {
    //service.reports call to backend
    console.log(email, reportNotes);
    
  }

  return (
    <div className="App">
      <ShareReport formHandler = {reportFormHandler}/>
  
    </div>
  );
}

export default App;
