import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, TouchableOpacityBase} from 'react-native';
import ResultsDetail from './ResultsDetail';
import {withNavigation} from 'react-navigation';

const ResultsList = function({header, results, navigation}){

    if(!results.length){
        return null;
    }

    return <View style={styles.container}>
        <Text style={styles.title}>{header}</Text>
        <FlatList 
            horizontal
            showsHorizontalScrollIndicator= {false}
            data={results}
            keyExctractor={function(result){result.id}}
            renderItem={function({item}){
                return <TouchableOpacity onPress={function(){navigation.navigate('Results', {id: item.id})}}>
                <ResultsDetail
                    result={item}
                />
                </TouchableOpacity>
            }}
        />
    </View>
};

export const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
});

export default withNavigation(ResultsList);

// <Text>Results: {results.length}</Text>