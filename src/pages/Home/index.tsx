import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
    return (
        <div className="home-container">
            <h2>Desafio Github API</h2>
            <p>Bootcamp Spring React - DevSuperior</p>
            <Link to="/usersearch">
                <button className="btn btn-primary btn-lg start-button">Começar</button>
            </Link>
        </div>
    );
}

export default Home;
