import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Outlet } from 'react-router-dom';

function RouterLayout() {

    return (
        <>
            <Navbar className="dark">
                <Container>
                    <Nav>
                        <NavLink to="/">Login</NavLink>
                    </Nav>
                </Container>
            </Navbar>
            <div>
                <Outlet />
            </div>
        </>
    );
}

export default RouterLayout;