import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import config from "./config"
import ColorModeToggle from "../components/ColorModeToggle";


const theme = extendTheme({ config });

export function ThemeProvider({ children }) {
    return <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        {children}
        <ColorModeToggle />
        {/* <CreateSaleOrderModal isOpen={isModalOpen} onClose={handleCloseModal} /> */}
    </ChakraProvider>;
}
