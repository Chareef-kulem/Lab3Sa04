import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

const availableZipItems = [
    { place: 'Phuket', code: '83000' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
    { place: 'Satun', code: '91000' },
]

const ZipItem = ({ place, code, navigation ,Postal}) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code })}>
        <View style={styles.backdrop}>
            <Text style={{flex:1,fontSize: 25,textAlign:"center",fontStyle:'italic'}}> {place}</Text>
            <Text style={{flex:1,fontSize: 25,textAlign:"center"}}> {code}</Text>
        </View>
    </TouchableHighlight>
)


const _keyExtractor = item => item.code

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <View>
            <FlatList
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
            />
            <StatusBar style="auto" />
        </View>
    );

}

const styles = StyleSheet.create({
    backdrop: {
        borderColor:'cyan',
        borderWidth: 2,
        borderRadius: 50,
        backgroundColor:'cyan',
        marginTop: 15,
        fontSize: 20,
        flexDirection:'row',
    },
});

