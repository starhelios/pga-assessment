import React, { useState, useEffect } from 'react';
import { ScrollView, View, FlatList, Text, StatusBar } from 'react-native';
import { Header, } from '../components';
import CustomButton from '../components/customButton';
import CustomText from '../components/customText';
import moment from 'moment';
import styles, { modifiers } from './styles';

const Appointment = () => {
 
    const [selectedHour, setSelectedHour] = useState(0);
    const [hours, setHours] = useState([]);

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
            <View style={styles.container}>
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
                                    width: '100%', 
                                    flexDirection: 'column',
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
