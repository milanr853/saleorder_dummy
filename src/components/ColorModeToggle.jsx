import { useColorMode, IconButton } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

function ColorModeToggle() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <div
            className='absolute top-10 right-10 z-10'
        >
            <IconButton
                aria-label="Toggle color mode"
                icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                onClick={toggleColorMode}
            />
        </div>
    );
}

export default ColorModeToggle;
