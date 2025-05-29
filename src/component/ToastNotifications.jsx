import React from 'react';
import { Toast, ToastContainer } from 'react-bootstrap';
import { useToast } from '../context/ToastContext';

const ToastNotifications = () => {
    const { toasts, removeToast } = useToast();

    return (
        <ToastContainer position="top-end" className="p-3">
            {toasts.map((toast) => (
                <Toast
                    key={toast.id}
                    onClose={() => removeToast(toast.id)}
                    show={true}
                    delay={3000}
                    autohide
                    bg={toast.type}
                >
                    <Toast.Header>
                        <strong className="me-auto">{toast.title}</strong>
                    </Toast.Header>
                    <Toast.Body className={toast.type === 'dark' ? 'text-white' : ''}>
                        {toast.message}
                    </Toast.Body>
                </Toast>
            ))}
        </ToastContainer>
    );
};

export default ToastNotifications; 