import React, { createContext, useState } from 'react';

interface ImageColors {
    primary: string;
    secondary: string;
}

interface ContextProps {
    colores: ImageColors;
    prevColors: ImageColors;
    setMainColors: (colors: ImageColors) => void;
    setPrevMainColors: (colors: ImageColors) => void;
}


export const GradientContext = createContext({} as ContextProps);


export const GradientProvider = ({ children }: any) => {

    const [colores, setColores] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent',
    });

    const [prevColors, setPrevColors] = useState<ImageColors>({
        primary: 'transparent',
        secondary: 'transparent',
    });

    const setMainColors = (colors: ImageColors) => {
        setColores(colors);
    };

    const setPrevMainColors = (colors: ImageColors) => {
        setPrevColors(colors);
    };

    return (
        <GradientContext.Provider value={{
            colores,
            prevColors,
            setMainColors,
            setPrevMainColors,
        }}>
            {children}
        </GradientContext.Provider>
    );

};

