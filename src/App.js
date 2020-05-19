import React from 'react';
import Cards from './components/Cards/cards';
import Charts from './components/Charts/chart';
import CountryPicker from './components/CountryPicker/countryPicker';
import styles from './App.module.css';
import {fetchData} from './Api/index';


class covid extends React.Component {
  state = {
    data : {},
    country : ""
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({
      data : fetchedData
    })
    
  }

  handleCountryChange = async(country) => {
    const fetchedData = await fetchData(country);
    this.setState({
      data: fetchedData,
      country : country
    })

  }
  render(){
    const {data} = this.state;
    return (
      <div className={styles.container}>
        <Cards data = {data}/>  
        <CountryPicker handleCountryChange = {this.handleCountryChange}/>
        <Charts/>

      
      </div>
          );
  }
}

export default covid;
 

//Line no 25 pe <cards data1 = {data2}/> data1 is the name of prop that we are sending to child component,
// and {data} is th eactua; data coming from state. {this.state.data}.