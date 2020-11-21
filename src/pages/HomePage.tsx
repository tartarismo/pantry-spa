import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';



export const HomePage:React.FC = () => {
    return(
        <>
            <Container fluid="sm">
                <div className="text-center">
                    <h3 className="mt-5">Welcome to PANTRY</h3>
                    <div>
                        Here you can find your supplies
                    </div>
                    <div className="mt-5"><Button as={Link} to="/login">Sign In</Button></div>
                </div>
            </Container>
        </>
    );
}