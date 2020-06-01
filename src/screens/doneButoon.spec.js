import { renderHook, act } from '@testing-library/react-hooks'
import {vaaa} from '../components/SearchBar';
import SearchBar, {namae} from '../components/SearchBar';
import SearchScreen from './SearchScreen';
import {linku} from '../api/yelp';
import {kagi} from '../api/yelp';
import {styles} from '../components/ResultsList';

describe('Done Button Working', () => {

    // TEST 1

    test('Verify PlaceHolderText', () => {
        
        console.log(vaaa);

        expect(vaaa).toEqual("Search");
    })

    // TEST 2

    test('Correct Icon', () => {

        console.log(namae);

        expect(namae).toEqual("search");
    })

    // TEST 3

    test('Verify correct yelp key', () => {
        
        console.log(kagi);

        expect(kagi).toEqual('Bearer K9MoIETY1AsUS43FwXx3LgM8F6FVuV45wOiaOtfu0YlVTiupxZAEcfZWK_SM0Z2IAWUy8M0uBLBBISLmfpO2i6pb3f5e2IGKrGPPATv16WgVndpIkeC3Pvxle5ipXnYx');
    })

    // TEST 4

    test('Verify correct yelp link', () => {

        console.log(linku);

        expect(linku).toEqual('https://api.yelp.com/v3/businesses');
    })

    // TEST 5

    test('Verify boldness of font', () => {

        console.log(styles.title.fontWeight);

        const font = styles.title.fontWeight;

        expect(font).toEqual('bold');
    })

    // TEST 6

    //test( 'Something', () => {

    //    const { result } = renderHook(() => SearchScreen());
    
    //    console.log(result.current.term);
    
    //    act(() => result.current.term)
    //    expect(result.current.term).toEqual('Something went wrong');
   
    //})

})
