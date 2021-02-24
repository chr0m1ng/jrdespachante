import logo from '../../assets/images/logo.svg';

const HomePage = () => (
    <div className="home-page">
        <header className="home-page-header">
            <img src={logo} className="home-page-logo" alt="logo" />
            <p>
                Edit <code>src/pages/HomePage/HomePage.tsx</code> and save to
                reload.
            </p>
            <a
                className="home-page-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </header>
    </div>
);

export default HomePage;
