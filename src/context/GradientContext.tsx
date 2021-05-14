import React, {createContext, useState} from 'react';

interface imageColors {
  primary: string;
  secondary: string;
}

interface contextProps {
  colors: imageColors;
  prevcolors: imageColors;
  setMainColors: (colors: imageColors) => void;
  setPrevMainColors: (colors: imageColors) => void;
}

export const GradientContext = createContext({} as contextProps);

export const GradientProvider = ({children}: any) => {
  const [colors, setcolors] = useState<imageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const [prevcolors, setprevcolors] = useState<imageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const setMainColors = (colors: imageColors) => {
    setcolors(colors);
  };

  const setPrevMainColors = (colors: imageColors) => {
    setprevcolors(colors);
  };

  return (
    <GradientContext.Provider
      value={{colors, prevcolors, setMainColors, setPrevMainColors}}>
      {children}
    </GradientContext.Provider>
  );
};
