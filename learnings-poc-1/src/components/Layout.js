import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Outlet } from 'react-router-dom';
import Footer from './Footer';
import { useTheme } from './ThemeContext';
import Switch from '@mui/material/Switch';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Layout() {

    const { theme, toggleTheme } = useTheme();
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    function handleChange() {
        toggleTheme(theme === 'light' ? 'dark' : 'light')
    }

    function clickMethod(num) {
        console.log(num)
    }

    return (
        <>
            <Navbar className={theme}>
                <Container>
                    <img style={{ height: "30px" }} src="https://preview.colorlib.com/theme/alime/img/core-img/logo.png" />
                    <Nav>
                        <NavLink to="/">Home</NavLink>
                        <NavDropdown title="Component" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/classcomp">Class Component</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/functionalcomp">
                                Functional Component
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavLink to="/counter">Counter(lifting state)</NavLink>
                        <NavLink to="/useForm">Use Form</NavLink>
                        <NavLink to="/users">Users(axios)</NavLink>
                        <NavLink to="/todolist">Todo List</NavLink>
                        <NavLink to="/predefined/*">Predefined Hooks</NavLink>
                        <Switch {...label} onChange={handleChange} checked={theme == 'dark'} />
                    </Nav>
                </Container>
            </Navbar>
            <div>
                <Outlet />
                {/* if i call a method on onclick event using paranthesis it will not create an instance of the method it will call the method directly */}
                {/* <button onClick={clickMethod(9)}>Click me</button> */}
            </div>
            <Footer />
        </>
    );
}

export default Layout;