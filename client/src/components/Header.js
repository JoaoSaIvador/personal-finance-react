import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function Header() {
    return (
        <Navbar expand="lg" variant="light" bg="light" className='custom-header mb-5'>
            <Container>
                <Navbar.Brand href="#">Personal Finance</Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default Header;