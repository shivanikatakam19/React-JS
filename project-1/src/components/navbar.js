import logo from '../images/logo.svg'

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className='d-flex align-items-center'>
                <img className='App-logo' src={logo} alt="logo" />
                <h2 className='logo-bg'>ReactFacts</h2>
            </div>
            <div className="collapse navbar-collapse justify-content-end me-4" id="navbarNav">
                <h4 className="text-white" href="w">React Course - Project 1</h4>
            </div>
        </nav>
    )
}

export default Navbar