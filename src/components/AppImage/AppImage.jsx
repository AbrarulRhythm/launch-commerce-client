import { useState } from 'react';

const AppImage = ({ src, alt = 'Image', fallbackSrc = '/fallback_icon.jpg', className = '', ...props }) => {
    const [imgSrc, setImgSrc] = useState(src || fallbackSrc);

    return (
        <img
            src={imgSrc || fallbackSrc}
            alt={alt}
            className={`object-cover ${className}`}
            onError={() => {
                setImgSrc(fallbackSrc);
            }}
            {...props}
        />
    );
};

export default AppImage;
