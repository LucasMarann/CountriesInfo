import React, { useEffect, useState } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';

const url = 'https://restcountries.com/v3.1/all';

const Info = () => {
  const [data, setData] = useState({
    name: '',
    capital: '',
    region: '',
    languages: '',
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(url);
        console.log(response.data);
        const filteredData = response.data.filter((item: any) => {item.name, item.capital, item.region, item.languages})
        setData({
          name: filteredData.name,
          capital: filteredData.capital,
          region: filteredData.region,
          languages: filteredData.languages,
        });
      } catch (error) {
        console.log('Erro na requisição', error);
      }
    };

    getData(); 
  }, []);

  return ( 
    <ScrollView>
      <Text>Nome: {data.name} </Text>
      <Text>Capital: {data.capital} </Text>
      <Text>Região: {data.region} </Text>
      <Text>Liguagem Principal: {data.languages} </Text>  
    </ScrollView>
  )
};

export default Info;
