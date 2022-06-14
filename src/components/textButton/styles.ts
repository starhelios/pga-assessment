import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    root: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        maxHeight: 45,
        minHeight: 45,
        borderRadius: 50,
        backgroundColor: 'blue',
    },
    touchable: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: 'transparent',
        opacity: 1,
    },
    text: {
        fontSize: 16,
        color: 'white',
        fontWeight: '500',
    },
    icon: {
        paddingHorizontal: 20,
    },
});

export const modifiers = {
    link: {
        root: {
            backgroundColor: 'transparent',
        },
        touchable: {
            backgroundColor: 'transparent',
            borderWidth: 0,
        },
        text: {
            color: 'blue',
            fontSize: 18,
        },
    },

    outlined: {
        touchable: {
            backgroundColor: 'white',
            borderColor: 'blue',
        },
        text: {
            color: 'blue',
        },
    },
    hidden: {
        root: {
            opacity: 0,
        },
    },
    disabled: {
        root: {
            opacity: 0.4,
        },
    },
    secondary: {
        root: {},
        text: {
            color: '#8e8e93',
        },
        touchable: {
            borderRadius: 4,
            borderColor: '#8e8e93',
            backgroundColor: 'white',
            justifyContent: 'flex-start',
        },
    },
};
