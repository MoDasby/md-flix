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
        solid: {
            bg: 'purple.500',
            color: 'white',
            transition: '.5s',
            _hover: {
                bg: 'purple.600',
            }
        }
    }
}

const theme = extendTheme({
    config: {
        initialColorMode: 'dark',
    },
    components: {
        Button,
    }
});


export default theme;