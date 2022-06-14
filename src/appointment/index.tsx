import React, { useState, useEffect } from 'react';
import { ScrollView, View, FlatList, Text, StatusBar, TextInput, Image } from 'react-native';
import { Button, Header, IconButton, Modal, ModalConfirm, } from '../components';
import CustomButton from '../components/customButton';
import CustomText from '../components/customText';
import moment from 'moment';
import styles, { modifiers } from './styles';
import BookedView from './bookedView';

const addImage = require('../../assets/check.png');

export type StudentProps = {
    time: string;
    name: string;
    phone: string;
    booked: boolean;
};

const Appointment = () => {
 
    const [selectedHour, setSelectedHour] = useState("");
    const [hours, setHours] = useState<string[]>([]);
    const [students, setStudents] = useState<StudentProps[]>([]);
    const [visible, setVisible] = useState(false);
    const [showBookSessions, setShowBookSessions] = useState(false);
    const [selectName, setSelectName] = useState<string>("");
    const [selectPhone, setSelectPhone] = useState<string>("");
    

    useEffect(() => {
        const locale = 'en';  
        moment.locale(locale);  // optional - can remove if you are only dealing with one locale
        const hours = [];
        for(let hour = 8; hour < 16; hour++) {
            hours.push(moment({ hour }).format('h:mm A'));
            hours.push(
                moment({
                    hour,
                    minute: 30
                }).format('h:mm A')
            );
        }
        setHours(hours);
        
        let students: StudentProps[] = [];
        hours.forEach(time => {
            let student: StudentProps = {
                time: time,
                name: '',
                phone: '',
                booked: false
            };
            students.push(student);
        });
        setStudents(students);
    }, []);

    const onBooked = () => {
        students.forEach(student => {
            if(student.time === selectedHour){
                student.booked = true;
                student.name = selectName;
                student.phone = selectPhone;
            }
        });
        setStudents(students)
        setVisible(false);
    }

    const showBookedSessions = () => {

    }
 
    return (
        <View style={styles.rootContainer}>
            <StatusBar barStyle="light-content" translucent={true} />
            <Header title={"The Swing Doctoer - Appointment Sign Up"} themed />
            <View style={styles.tableHeader}>
                <Text
                    style={styles.timeStyle}
                >
                    {"Time"}
                </Text>
                <Text
                    style={[styles.nameStyle, {borderRadius:3, fontWeight: "800"}]}
                >
                    {"Name"}
                </Text>
                <Text
                    style={[styles.phoneStyle, {borderRadius:3, fontWeight: "800"}]}
                >
                    {"Phone Number"}
                </Text>
                <Text
                    style={[styles.bookStyle, {borderRadius:3, marginRight:-2, fontWeight: "800"}]}
                >
                    {""}
                </Text>
            </View>
            <View style={styles.tableContainer}>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    initialScrollIndex={12}
                    getItemLayout={(data, index) => ({
                        length: 1400,
                        offset: 40 * index,
                        index,
                    })} 
                    onScrollToIndexFailed={0} 
                    data={students} 
                    horizontal={false} 
                    decelerationRate={'fast'}
                    extraData={selectedHour}
                    renderItem={({ item, index }) => {
                        item = item;
                        return (
                            item.booked ?
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
                                    onChangeText={text => { if(selectedHour === item.time) setSelectName(text)}}
                                    style={
                                        selectedHour !== item.time ? 
                                            styles.nameStyle 
                                        :   [styles.nameStyle, {backgroundColor:'blue', color: 'white'}]
                                    }
                                    value={selectedHour === item.time ? selectName : ""}
                                    placeholder="input name"
                                    placeholderTextColor="#999999"
                                    onPressIn={()=>setSelectedHour(item.time)}
                                />
                                <TextInput
                                    onChangeText={text => { if(selectedHour === item.time) setSelectPhone(text)}}
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
                                />
                                <IconButton
                                    styles={selectedHour === item.time
                                        ? {image : {with: 40, Header: 40}, root: styles.bookedStyle}
                                        : {image : {with: 40, Header: 40}, root: styles.cancelStyle}
                                    }
                                    source={addImage}
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
                 <Button 
                    onPress={()=> { setShowBookSessions(true); }}
                    title="Booked Sessions"
                    style={{
                        container: styles.buttonContainer,
                        title: styles.buttonTitle,
                    }}
                />
            </View>
            <ModalConfirm
                message={"Are you sure want to book this appointment?"}
                visible={visible}
                onConfirm={onBooked}
                onCancel={() => { setVisible(false); }} 
                onClose={() => {setVisible(false); }}           
            />
            {showBookSessions && 
                <BookedView 
                    onShow={showBookSessions}
                    onCancel={() => { setShowBookSessions(false); }} 
                    data={students}
                    setData={setStudents}
                />
            }
            
        </View>
    );
};

export default Appointment;
