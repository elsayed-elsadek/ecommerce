import React, { useState, useEffect } from 'react';
import { Image, Spinner } from 'react-bootstrap';

const LazyImage = ({ src, alt, className, style }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => setIsLoaded(true);
        img.onerror = () => setError(true);
    }, [src]);

    if (error) {
        return (
            <div className={`placeholder ${className}`} style={style}>
                <span>خطأ في تحميل الصورة</span>
            </div>
        );
    }

    if (!isLoaded) {
        return (
            <div className={`placeholder ${className}`} style={style}>
                <Spinner animation="border" size="sm" />
            </div>
        );
    }

    return (
        <Image
            src={src}
            alt={alt}
            className={className}
            style={style}
            loading="lazy"
        />
    );
};

export default LazyImage; 