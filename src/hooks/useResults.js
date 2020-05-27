import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default function(){

    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async function(searchTerm){

        console.log('Hi there!');

        console.log(results)
        
        try {
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'san jose'
            }
        });
        setResults(response.data.businesses);
    } catch (err) {
        setErrorMessage('Something went wrong');
    }
    };

    // Call searchApi when component is first rendered. BAD CODE!
    // searchApi('pasta');
    // The above generates infinite loops

    useEffect(function(){
        searchApi('pasta');
    }, [])

    return [searchApi, results, errorMessage]

};




