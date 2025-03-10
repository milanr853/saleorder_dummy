import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const config = {
    initialColorMode: 'system',
    useSystemColorMode: false,
};

const styles = {
    global: (props) => ({
        body: {
            bg: mode('white', 'gray.800')(props),
            color: mode('black', 'white')(props),
        },
    }),
};

const theme = extendTheme({ config });

export default theme;
