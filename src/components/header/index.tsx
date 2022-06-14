import React, { ReactNode } from 'react';
import { shape, object, func, string, node, bool } from 'prop-types';
import IconButton from '../iconButton';
import TextButton from '../textButton';
import moment from 'moment';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { mergeStyles } from '../../utils/functions'; 
import defaultStyles, { modifiers } from './styles';

const chevron = require('../../../assets/chevron.png');

interface header{
    title: string;
    onBack?: any;
    onEditPress?: any;
    onFilterPress?: any;
    onHomePress?: any;
    onEditBilling?: any;
    OnSettingPress?: any;
    onListPress?: any;
    editState?: any,
    styles: any;
    children?: ReactNode;
    disableEdit?: boolean;
    onClose?: any;
    themed?: any, 
    isChatView?: boolean,
    activeTime?: string,
    profileImageUrl?: string,
}

const Header = (props: header) => { 
    const styles = {
        root: mergeStyles([
            defaultStyles.root,
            [modifiers.themed.root, props.themed],
            props.themed.root,
        ]),
        backButton: mergeStyles([
            modifiers.backButton,
            [modifiers.themed.backButton, props.themed],
            props.themed.backButton,
        ]),
        title: mergeStyles([
            defaultStyles.title,
            [modifiers.themed.title, props.themed],
            props.themed.title,
        ]), 
        editButton: {
            root: defaultStyles.editButton,
        },
        filterButton: defaultStyles.filterButton,
        homeButton: defaultStyles.homeButton,
        billingButton: defaultStyles.billingButton,
        settingButton:  defaultStyles.settingButton,
        listButton:  defaultStyles.listButton,
        chatViewStyle: defaultStyles.chatViewStyle,
        image: {
            height: 20,
            width: 20, 
        },
        backArea: mergeStyles([
            defaultStyles.backArea,
            [modifiers.themed.backButton, props.themed],
            props.themed.backButton,
        ]), 
        profileStyle: defaultStyles.profileStyle,
        headerAvatar: defaultStyles.headerAvatar,
        nameStyle: defaultStyles.nameStyle,
        timeStyle: defaultStyles.timeStyle,
    };

    const getStringAgo = (timeString) => {
        if(timeString){
            return `Active ${moment
                .unix(timeString)
                .fromNow(true)} ago`;
        }
        return `Active a few days ago`;
    }

    return (
        <View style={styles.root}>
            {props.onBack && !props.isChatView  && ( 
                 <IconButton
                    test="Back Button"
                    styles={styles.backButton}
                    source={chevron}
                    onPress={props.onBack}
                    boxed={props.themed} 
                />  
            )} 
              
             
            {!props.isChatView && <Text style={props.onListPress ? [styles.title, {paddingRight:25}] : styles.title}>
                {props.title}
            </Text>}
             
            {props.children}
            {props.onEditPress && (
                <TextButton
                    disabled={props.disableEdit}
                    styles={styles.editButton}
                    link
                    onPress={props.onEditPress}
                >
                    {props.disableEdit ? 'Edit' : props.editState ? 'Done' : 'Edit'}
                </TextButton>
            )}
            
             
          
                       
        </View>
    );
};

Header.propTypes = {
    title: string,
    onBack: func,
    onEdit: func,
    onClose: func,
    OnSettingPress: func,
    onListPress: func,
    disableEdit: bool,
    children: node,
    editState: bool,
    themed: bool,
    styles: shape({
        root: object,
        back: shape({
            root: object,
            image: object,
        }),
    }),
};

Header.defaultProps = {
    title: undefined,
    onBack: undefined,
    onEdit: undefined,
    onClose: undefined,
    children: undefined,
    disableEdit: false,
    editState: true,
    styles: {},
    themed: false,
};

Header.displayName = 'Header';

export default Header;
