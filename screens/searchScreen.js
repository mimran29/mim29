import React, {useState} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResult from '../hooks/useResult';
import ResultsList from '../components/ResultsList';

const searchScreen = ()=> {
    const [term,setTerm] = useState('');
    const [SearchApi , results, errorMessage] = useResult();
    
    
    
    return (
        <View>
            <SearchBar 
            term ={term}
            onTermChange={setTerm}
            onTermSubmit = {()=>SearchApi(term)}
            />
            {errorMessage? <Text> {errorMessage}</Text>:null}
            <Text>We have found {results.length} results</Text>
            <ResultsList title ="Cost Effective"/>
            <ResultsList title ="Serderhana"/>
            <ResultsList title ="KAYA"/>
        </View>
     );
};


const styles = StyleSheet.create({});

export  default searchScreen ;