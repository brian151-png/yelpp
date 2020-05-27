import React, {useState} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
// import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = function(){
    
    const[term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    console.log('Hello')

    //console.log(results[0].price)
    
    const filterResultsByPrice = function(price){
        return results.filter(function(result){
            return result.price === price
        })
    };

    return <>
        <SearchBar 
            term = {term}
            onTermChange = {setTerm}
            onTermSubmit={function(){searchApi(term)}}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        
        <ScrollView>
            <ResultsList 
                header='Cost Effective'
                results={filterResultsByPrice('$')}
                
            />
            <ResultsList  
                header='Bit Pricier'
                results={filterResultsByPrice('$$')}

            />
            <ResultsList  
                header='Big Spender'
                results={filterResultsByPrice('$$$')}
                
            />
        </ScrollView>
    </>
};

const styles = StyleSheet.create({});

export default SearchScreen;

// await wait for some response to come back, once this thing resolves with some actual
// data, we will assign the result to the response variable

//.data prop is the actual JSON that we got back from the API
// response.data is going to be the whole object inside the yelp documentation

//onTermChange = {function(newTerm){setTerm(newTerm)}}
//onTermSubmit={function(){searchApi()}}

// <Text style={{marginLeft:15}}>We have found {results.length} results</Text>