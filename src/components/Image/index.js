import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import style from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, fallback = images.noImage, ...props }, ref) => {
    const [_fallcack, setFallback] = useState('');
    const handleError = () => {
        setFallback(fallback);
    };
    return (
        <img
            className={classNames(style.wrapper, className)}
            ref={ref}
            src={_fallcack || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;
