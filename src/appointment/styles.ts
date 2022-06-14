import { StyleSheet } from 'react-native';
import metrics from '../utils/metrices';

let parentPaddingValue = metrics.width * 0.1;
let parentPadding = parentPaddingValue * 2;

let childPaddingValue = metrics.width * 0.03;
var childPadding = parentPadding + childPaddingValue * 2;

export const AVATAR_SIZE = 111;

export default StyleSheet.create({
    cancelTextStyle: {
        textAlign: 'left',
        color: "black",
        fontSize: 14,
    },

    rootContainer:{
        width: '100%',
        height: '100%'
    },

    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F9F9F9',
        width: metrics.width, 
    },

    creditButtonStyle: {
        marginLeft: -9,
        marginTop: 14,
        width: metrics.width * 0.49,
        height: 44,
        borderRadius: 22,
        backgroundColor: 'white'
    },

    creditButtonTextStyle: {
        textAlign: 'center',
        paddingTop: 11,
        fontSize: 16,
        color: 'blue',
    },

    creditTextStyle: {
        textAlign: 'left',
        paddingTop: 10,
        color: 'white',
        fontSize: 20,
        fontWeight: '500',
    },

    genderTextStyle: {
        textAlign: 'left',
        paddingTop: 5,
        color: 'white',
        fontSize: 20,
        fontWeight: '400',
    },

    itemsParentContainerStyle: {
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingLeft: parentPaddingValue,
        paddingRight: parentPaddingValue,
        paddingTop: parentPaddingValue * 0.5,
        paddingBottom: parentPaddingValue * 0.5,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 1.5,
    },

    itemTextStyle: {
        textAlign: 'left',
        paddingTop: 5,
        color: 'black',
        fontSize: 16,
    },

    logoutParentContainerStyle: {
        marginTop: metrics.width * 0.1,
        marginBottom: metrics.width * 0.1,
    },

    logoutTextStyle: {
        textAlign: 'center',
        paddingTop: 10,
        color: "#D41F08",
        fontSize: 20,
        width: metrics.width,
    },

    nameTextStyle: {
        textAlign: 'left',
        color: 'white',
        fontSize: 20,
    },

    myRecentExpertContainerStyle: {
        alignItems: 'flex-start',
        backgroundColor: 'white',
        width: metrics.width * 0.95,
        height: 425,
        borderRadius: 15,
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 13, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 10, //IOS
        elevation: 2, // Android
        // margin: 15,
    },

    profileImageParentContainerStyle: {
        flexDirection: 'column',
    },

    profileInfoParentContainerStyle: {
        flexDirection: 'column',
        alignItems: 'center',
        shadowColor: 'rgba(0,0,0, .4)', // IOS
        shadowOffset: { height: 13, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 10, //IOS
        elevation: 2, // Android
    },
 
    appointmentsList: {
        padding: 10,
    },

    dateSelectedContainerStyle: {
        alignSelf: 'center',
        borderColor: "blue",
        borderWidth: 1,
        borderRadius: 4,
        padding: 8,
        backgroundColor: "blue", 
        elevation: 3,
    },

    dateContainerStyle: {
        alignSelf: 'center',
        borderColor: "blue",
        borderWidth: 1,
        borderRadius: 4,
        padding: 8,
        backgroundColor: "white",
        elevation: 3,
    },

    dateSelectedTextStyle: {
        textAlign: 'center',
        color: "white",
        width: 100,
        elevation: 3,
    },

    dateTextStyle: {
        textAlign: 'center',
        color: "black",
        width: 100,
        elevation: 3,
    },
});

export const modifiers = {
    searchBar: {
        root: {
            marginTop: 20,
        },
    },
    container: {
        safeAreaBottom: {
            height: 0,
        }, 
    },
};
