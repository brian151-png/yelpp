import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

const valu = "Search";

export const vaaa = valu;

export const namae = "search";

const SearchBar = function({term, onTermChange, onTermSubmit}) {

    return <View  style = {styles.backgroundStyle}>
        <Feather name={namae} style={styles.iconStyle} />
        <TextInput 
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.inputStyle}
            placeholder={valu}
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
        />
         
    </View>
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: 'grey',//'#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10
    },
    inputStyle: {
        //borderColor: 'black',
        //borderWidth: 1,
        flex: 1,
        fontSize: 18 //default is 14
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;

//onChangeText={function(newTerm){onTermChange(newTerm)}}
//onEndEditing={function(){onTermSubmit()}}