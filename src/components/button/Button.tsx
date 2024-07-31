// Next
import dynamic from 'next/dynamic';
import Image from 'next/image';

// React
import React from 'react';

// Assets
import { waiuruHead } from 'assets/lottie';

// Styles
import * as S from './Button.styles';

// Models
import { ButtonProps } from './models';

// Lottie
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const Button = ({ src, type, label, loading, tabIndex, disabled, className, onClick }: ButtonProps) => {
    return (
        <S.Component
            onClick={onClick}
            disabled={disabled || loading}
            className={`${[type]} ${className} `}
            tabIndex={tabIndex}
        >
            {loading ? (
                <Lottie loop={true} autoPlay={true} animationData={waiuruHead} className="lottie" />
            ) : (
                <>
                    <p>{label}</p>
                    {src ? <Image src={src} width={24} height={24} alt="img" draggable="false" /> : null}
                </>
            )}
        </S.Component>
    );
};

export default Button;
