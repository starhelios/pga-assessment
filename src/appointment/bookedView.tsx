import React, { useState, useEffect } from 'react';
import { ScrollView, View, FlatList, Text, StatusBar, TextInput, Modal } from 'react-native';
import CustomButton from '../components/customButton';
import CustomText from '../components/customText';
import moment from 'moment';
import styles from './styles';
import { IconButton, ModalConfirm } from '../components';

const removeImage = require('../../assets/close.png');


const BookedView = ({ onShow, onCancel, data, setData }) => {
 
    const [selectedHour, setSelectedHour] = useState("");
    const [selectedBookedHour, setSelectedBookedHour] = useState("");
    const [hours, setHours] = useState<string[]>([]);
    const [visible, setVisible] = useState(false);
    const [booked, setBooked] = useState(false);
    const [showBookSessions, setShowBookSessions] = useState(true);
    const [selectName, setSelectName] = useState<string>("");
    const [selectPhone, setSelectPhone] = useState<string>("");

    const onCanceled = () => {
        data.forEach(student => {
            if(student.time === selectedHour){
                student.booked = false;
                student.name = selectName;
                student.phone = selectPhone;
            }
        });
        setData(data);
        setVisible(false);
    }
 
    return (
        <Modal
            animationType="fade"
            onRequestClose={() => {}}
            transparent
            visible={showBookSessions}
            style={styles.modal}
        >
            <View style={styles.parentContainerStyle}>
                <CustomButton
                    buttonStyle={styles.cancelSelectStateButtonStyle}
                    textStyle={styles.cancelSelectStateButtonTextStyle}
                    text={'X'}
                    onPress={() => {
                        onCancel(false);
                        setShowBookSessions(false) ;
                    }}
                />
                <View style={styles.innerContainerStyle}>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        initialScrollIndex={12}
                        getItemLayout={(data, index) => ({
                            length: 1400,
                            offset: 40 * index,
                            index,
                        })} 
                        onScrollToIndexFailed={0} 
                        data={data} 
                        horizontal={false} 
                        decelerationRate={'fast'}
                        extraData={selectedHour}
                        renderItem={({ item, index }) => {
                            item = item;
                            return (
                                !item.booked ?
                                <></>
                                :
                                <View
                                    style={{
                                        flex:1,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        margin: 1,
                                    }}
                                    key={index}
                                >
                                
                                    <CustomButton
                                        buttonStyle={
                                            selectedHour === item.time
                                                ? styles.dateSelectedContainerStyle
                                                : styles.dateContainerStyle
                                        }
                                        textStyle={
                                            selectedHour === item.time
                                                ? styles.dateSelectedTextStyle
                                                : styles.dateTextStyle
                                        }
                                        onPress={() => {
                                            setSelectedHour(item.time);
                                        }}
                                        text={item.time}
                                    />
                                    <TextInput
                                        style={
                                            selectedHour !== item.time ? 
                                                styles.nameStyle 
                                            :   [styles.nameStyle, {backgroundColor:'blue', color: 'white'}]
                                        }
                                        value={selectedHour === item.time ? selectName : ""}
                                        placeholder="input name"
                                        placeholderTextColor="#999999"
                                        onPressIn={()=>setSelectedHour(item.time)}
                                        editable={false}
                                    />
                                    <TextInput
                                        style={
                                            selectedHour !== item.time ? 
                                                styles.phoneStyle 
                                            :   [styles.phoneStyle, {backgroundColor:'blue', color: 'white'}]
                                        }
                                        value={selectedHour === item.time ? selectPhone : ""}
                                        keyboardType={'phone-pad'}
                                        placeholder="123-456-7890"
                                        placeholderTextColor="#999999"
                                        onPressIn={()=>setSelectedHour(item.time)}
                                        editable={false}
                                    />
                                    <IconButton
                                        styles={selectedHour === item.time
                                            ? {image : {with: 40, Header: 40}, root: styles.bookedStyle}
                                            : {image : {with: 40, Header: 40}, root: styles.cancelStyle}
                                        }
                                        source={removeImage}
                                        onPress={() => {
                                            setSelectedHour(item.time);
                                            setVisible(true)
                                        }} 
                                    />
                                    
                                </View>
                            );
                        }}
                        keyExtractor={(_, index) => index.toString()}
                    />
                </View>
            </View>
            <ModalConfirm
                message={"Are you sure want to cancel a booking?"}
                visible={visible}
                onConfirm={onCanceled}
                onCancel={() => { setVisible(false); }} 
                onClose={() => {setVisible(false); }}           
            />
        </Modal>
            
    );
};

export default BookedView;
