import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ListPatientComponent from './components/ListPatientComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import HomePage from './components/HomePage';
import AddAPatientPage from './pages/AddingPatient';
import UpdatePatient from './pages/UpdatePatient';
import InformationPatient from './pages/InformationPatient';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
            <div className="container">
              <Routes>
                <Route path='/patients' element = {<ListPatientComponent/>} />
                <Route path='/patient/add' element = {<AddAPatientPage/>} />
                <Route path='/patient' element = {<InformationPatient/>} />
                <Route path='/patient/update' element = {<UpdatePatient/>} />
                <Route exact path='/' element = {<HomePage/>} />
              </Routes>
            </div>
          <FooterComponent />
      </Router>  
      
    </div>
  );
}

export default App;
