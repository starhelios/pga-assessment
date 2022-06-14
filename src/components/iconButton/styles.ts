import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    root: {
        height: 22,
        width: 22,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
    },
    image: {
        height: 20,
        width: 20,
    },
});

export const modifiers = {
    boxed: {
        root: {
            backgroundColor: 'white',
            height: 35,
            width: 35,
            borderRadius: 10,
        },
        image: {
            height: 14,
            width: 14,
            marginRight: 2,
        },
    },
};
