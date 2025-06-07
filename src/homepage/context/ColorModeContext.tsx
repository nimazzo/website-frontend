import {createContext, useContext} from 'react';

export const useColorMode = () => useContext(ColorModeContext);
export const ColorModeContext = createContext({ toggleColorMode: () => {} });
