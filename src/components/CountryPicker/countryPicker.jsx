import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from './countryPicker.module.css';
import { fetchcountries } from '../../Api';

const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async() => {
    setFetchedCountries (await fetchcountries())    
    }
    fetchAPI();
}, [setFetchedCountries]);

    return (
        <FormControl className = {styles.formcontrol}>
            <NativeSelect defaultValue="" onChange = {(e) => {handleCountryChange(e.target.value)}}>
                <option value = "global">Global</option>
    {fetchedCountries.map((country, index) => <option key = {index} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker