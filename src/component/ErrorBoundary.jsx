import React from 'react';
import { Alert, Button, Container } from 'react-bootstrap';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
        // يمكنك هنا إرسال معلومات الخطأ إلى خدمة تتبع الأخطاء
        console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <Container className="mt-5">
                    <Alert variant="danger">
                        <Alert.Heading>عذراً، حدث خطأ ما!</Alert.Heading>
                        <p>
                            حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى أو تحديث الصفحة.
                        </p>
                        <hr />
                        <div className="d-flex justify-content-end">
                            <Button
                                onClick={() => window.location.reload()}
                                variant="outline-danger"
                            >
                                تحديث الصفحة
                            </Button>
                        </div>
                    </Alert>
                </Container>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary; 