// React
import { useState, useEffect } from 'react';

export const useNavbar = () => {
    const [isActive, setIsActive] = useState(false);

    const handleChangeBackground = () => {
        setIsActive(window.scrollY >= 80);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleChangeBackground);
    }, []);

    return {
        isActive,
    };
};
