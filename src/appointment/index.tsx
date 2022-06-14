import React, { useState, useEffect } from 'react';
import { ScrollView, View, FlatList, Text, StatusBar, TextInput } from 'react-native';
import { Header, } from '../components';
import CustomButton from '../components/customButton';
import CustomText from '../components/customText';
import moment from 'moment';
import styles, { modifiers } from './styles';


export type StudentProps = {
    name: "";
    phone: "";
};

const Appointment = () => {
 
    const [selectedHour, setSelectedHour] = useState(0);
    const [hours, setHours] = useState([]);
    const [students, setStudents] = useState([]);

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
        console.log(hours)
    }, []);

 
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
                    {"act"}
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
                    data={hours} 
                    horizontal={false} 
                    decelerationRate={'fast'}
                    extraData={selectedHour}
                    renderItem={({ item, index }) => {
                        item = item;
                        return (
                            <View
                                style={{
                                    flex:1,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    margin: 1,
                                }}
                            >
                               
                                <CustomButton
                                    buttonStyle={
                                        selectedHour === item
                                            ? styles.dateSelectedContainerStyle
                                            : styles.dateContainerStyle
                                    }
                                    textStyle={
                                        selectedHour === item
                                            ? styles.dateSelectedTextStyle
                                            : styles.dateTextStyle
                                    }
                                    onPress={() => {
                                        setSelectedHour(item);
                                    }}
                                    text={item}
                                />
                                <TextInput
                                    onChangeText={text => setNotes(text)}
                                    style={styles.nameStyle}
                                    value={{}}
                                    placeholder="input name"
                                    placeholderTextColor="#999999"
                                />
                                <TextInput
                                    onChangeText={text => setNotes(text)}
                                    style={styles.phoneStyle}
                                    value={{}}
                                    placeholder="input phone"
                                    placeholderTextColor="#999999"
                                />
                                
                            </View>
                        );
                    }}
                    keyExtractor={(_, index) => index.toString()}
                />
                 
            </View>
        </View>
    );
};

export default Appointment;
