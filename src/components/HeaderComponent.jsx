import { Link } from 'react-router-dom';

function HeaderComponent() {
    return (
        <header className='header'>
            <div className='header-logo'>
                <img className='logo' src='../images/MediscreenLogo.png' />
                <h1>Mediscreen</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to='/patients' >Patient's List</Link>
                    </li>
                    <li>
                        <Link to='/patientHistoryList'>Patient's History List</Link>
                    </li>
                    <li>
                        <Link to='diabetesEvaluation/form'>Diabetes Evaluation</Link>
                    </li>
                </ul>
            </nav>
        </header >
    );
}


export default HeaderComponent;