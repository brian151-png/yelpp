import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import yelp from '../api/yelp'

const ResultsShowScreen = function({navigation}){

    // console.log(props);

    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');
    
    // console.log(result);

    const getResult = async function(id){
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(function(){
        getResult(id);
    }, []);
    
    // console.log(id);

    if (!result) {
        return null;
    }
    
    return <View>
        <Text>{result.name}</Text>
        <FlatList 
            data={result.photos}
            keyExtractor={(photo)=>photo}
            renderItem={function({item}){
                return <Image style={styles.image} source={{ uri: item }} />
            }}
        />
    </View>
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300
    }
});

export default ResultsShowScreen;

// array of objects []
// an object null