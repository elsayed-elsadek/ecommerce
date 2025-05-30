import React from 'react';
import { Spinner, Container } from 'react-bootstrap';

const LoadingSpinner = () => {
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
            <Spinner animation="border" role="status" variant="primary">
                <span className="visually-hidden">جاري التحميل...</span>
            </Spinner>
        </Container>
    );
};

export default LoadingSpinner; 