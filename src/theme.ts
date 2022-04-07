import { extendTheme, ComponentStyleConfig } from '@chakra-ui/react';

const Button: ComponentStyleConfig = {
    variants: {
        outline: {
            border: '2px solid',
            borderColor: 'purple.500',
            transition: '.5s',
            _hover: {
                bg: 'purple.500',
            }
        },
    }
}

const theme = extendTheme({
    initialColorMode: 'dark',
    useSystemColorMode: true,
    components: {
        Button,
    }
});


export default theme;