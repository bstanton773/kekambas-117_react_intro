import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

type NavigationProps = {
    isLoggedIn: boolean
}

export default function Navigation({ isLoggedIn }:NavigationProps) {
    return (
        <>
            <Navbar bg='dark' data-bs-theme='dark'>
                <Container>
                    <Navbar.Brand to="/" as={Link}>Kekambas</Navbar.Brand>
                    <Nav className='me-auto'>
                        { isLoggedIn ? (
                            <>
                                <Nav.Link href='/'>Log Out</Nav.Link>
                                <Nav.Link href='/'>Create Post</Nav.Link>
                            </>
                        ) : (
                            <>
                                <Nav.Link to='/login' as={Link}>Log In</Nav.Link>
                                <Nav.Link href='/'>Sign Up</Nav.Link>
                            </>
                        )}
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}