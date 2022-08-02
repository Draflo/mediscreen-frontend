import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ListPatient from './components/ListPatient';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import HomePage from './components/HomePage';
import AddAPatientPage from './pages/AddingPatient';
import UpdatePatient from './pages/UpdatePatient';
import InformationPatient from './pages/InformationPatient';
import ListPatientHistory from './pages/ListPatientHistory';
import InformationPatientHistory from './pages/InformationPatientHistory';
import AddAPatientHistoryPage from './pages/AddingPatientHistory';
import UpdateOrAddNote from './pages/UpdateOrAddNote';
import DiabetesEvaluation from './pages/DiabetesEvaluation';
import DiabetesEvaluationId from './pages/DiabetesEvaluationId';
import DiabetesEvaluationForm from './components/DiabetesEvaluationForm';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
            <div className="container">
              <Routes>
                <Route path='/patients' element = {<ListPatient/>} />
                <Route path='/patient/add' element = {<AddAPatientPage/>} />
                <Route path='/patient' element = {<InformationPatient/>} />
                <Route path='/patient/update' element = {<UpdatePatient/>} />
                <Route exact path='/' element = {<HomePage/>} />
                <Route path='/patientHistoryList' element = {<ListPatientHistory/>} />
                <Route path='/patientHistory' element = {<InformationPatientHistory/>} />
                <Route path='/patientHistory/add' element = {<AddAPatientHistoryPage/>} />
                <Route path='/patientHistory/update' element = {<UpdateOrAddNote/>} />
                <Route path='/diabetesEvaluation' element = {<DiabetesEvaluation/>} />
                <Route path='/diabetesEvaluation/id' element = {<DiabetesEvaluationId/>} />
                <Route path='/diabetesEvaluation/form' element = {<DiabetesEvaluationForm/>} />
              </Routes>
            </div>
          <FooterComponent />
      </Router>  
      
    </div>
  );
}

export default App;
