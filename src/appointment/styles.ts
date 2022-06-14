import { StyleSheet } from 'react-native';
import metrics from '../utils/metrices';

let parentPaddingValue = metrics.width * 0.1;
let parentPadding = parentPaddingValue * 2;

let childPaddingValue = metrics.width * 0.03;
var childPadding = parentPadding + childPaddingValue * 2;

export const AVATAR_SIZE = 111;

export default StyleSheet.create({

    rootContainer:{
        width: '100%',
        height: '100%'
    },

    tableHeader: {
        marginTop: 3,
        flexDirection: 'row',
        backgroundColor: '#F9F9F9',
        width: metrics.width - 12, 
        height: 33,
        borderBottomWidth: 2,
        borderBottomColor: '#777777',
        alignItems:'center',
        alignSelf:'center'
    },

    tableContainer: {
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
        borderColor: "grey",
        borderWidth: 1,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        borderTopRightRadius:1,
        borderBottomRightRadius:1,
        padding: 8,
        backgroundColor: "blue", 
        marginLeft: 3,
        elevation: 3,
        flex: 0.25
    },

    dateContainerStyle: {
        alignSelf: 'center',
        borderColor: "grey",
        borderWidth: 1,
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        borderTopRightRadius:1,
        borderBottomRightRadius:1,
        padding: 8,
        marginLeft: 3,
        backgroundColor: "white",
        elevation: 3,
        flex: 0.25
    },

    dateSelectedTextStyle: {
        textAlign: 'center',
        color: "white",
        elevation: 3,
        
    },

    nameStyle: {
        textAlign: 'center',
        color: "black",
        orderColor: "grey",
        flex: 0.35,
        elevation: 3,
        padding: 8,
        borderWidth: 1,
        borderRadius: 1,
    },

    timeStyle: {
        textAlign: 'center',
        color: "black",
        orderColor: "grey",
        flex: 0.25,
        elevation: 3,
        padding: 8,
        borderWidth: 1,
        borderRadius: 3,
        marginLeft: -2,
        fontWeight: '800'
    },

    phoneStyle: {
        textAlign: 'center',
        color: "black",
        orderColor: "grey",
        flex: 0.35,
        elevation: 3,
        padding: 8,
        borderWidth: 1,
        borderRadius: 1,
        marginRight: 3
    },

    bookStyle: {
        textAlign: 'center',
        color: "black",
        orderColor: "grey",
        flex: 0.05,
        elevation: 3,
        padding: 8,
        borderWidth: 1,
        borderRadius: 1,
        marginRight: 3
    },

    dateTextStyle: {
        textAlign: 'center',
        color: "black",
        elevation: 3,
    },

    bookedStyle: {
        alignSelf: 'center',
        borderColor: "grey",
        borderWidth: 1,
        borderTopLeftRadius: 1,
        borderBottomLeftRadius: 1,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        padding: 8,
        backgroundColor: "blue", 
        marginRight: 3,
        elevation: 3,
        flex: 0.05,
        height: 35
    },

    cancelStyle: {
        alignSelf: 'center',
        borderColor: "grey",
        borderWidth: 1,
        borderTopLeftRadius: 1,
        borderBottomLeftRadius: 1,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        padding: 8,
        marginRight: 3,
        backgroundColor: "#00dddd",
        elevation: 3,
        flex: 0.05,
        height: 35
    },

    bookedTextStyle: {
        textAlign: 'center',
        color: "white", 
        elevation: 3,
        
    },

    cancelTextStyle: {
        textAlign: 'center',
        color: "black",
        elevation: 3,
    },

    imageStyle: {
        width:20,
        height: 20,
    },

    buttonContainer: {
        marginHorizontal: 20,
        backgroundColor: '#0253E2', 
        height: 40,
        justifyContent: 'center',
        borderRadius: 14,
    },

    buttonTitle: {
        color: 'white',
    },

    parentContainerStyle: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center', 
    },

    innerContainerStyle: {
        flexDirection: 'row',
        borderRadius: 5,
        flexWrap: 'wrap',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 10,
        marginHorizontal: 10,
        backgroundColor: 'white',
    },

    textStyle: {
        color: 'black',
        textAlign: 'center',
        fontSize: 18,
    },

    cancelSelectStateButtonStyle: {
        marginLeft: metrics.width - 50,
        marginBottom: 10
    },

    cancelSelectStateButtonTextStyle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 22,
    },

    modal: {
        backgroundColor: 'transparent',
        top: 0,
        bottom: 0,
        margin: 'auto',
        left: 0,
        right: 0,

    },

}); 
