import { useState, useEffect } from 'react';
import axios from 'axios';
import HTMLReactParcer from 'html-react-parser';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import { Col, Row, Typography, Select } from 'antd';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined, CloudDownloadOutlined } from '@ant-design/icons';

// import { useGetCryptoDetailsQuery } from '../../utilities/cryptoApi';

const { Title, Text } = Typography;
const { Option } = Select;

const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd',
    params: { referenceCurrencyUuid: 'yhjMzLPhuIDl', timePeriod: '24h' },
    headers: {
        'X-RapidAPI-Key': 'd6b7253bf4msh4ebc624d6a86445p110ee7jsnfecee8a02617',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
};


const CryptoDetails = () => {
    const [cryptoDetails, setCryptoDetails] = useState('');

    const [timePeriod, setTimePeriod] = useState('7d');

    // const fetchCoin = async () => {
    //     const data = await axios.get(SingleCoin(coinId))
    // }

    // console.log(coinId, 'outside')

    const { coinId } = useParams();
    // const { data, isFetching } = useGetCryptoDetailsQuery(coinId);  
    // const cryptoDetails = data?.data?.coin;
    console.log(cryptoDetails);

    
    useEffect(() => {
        axios.request(options).then(function (response) {

            const coinData = response?.data?.data;
            console.log(coinId, 'inside')

            setCryptoDetails(coinData)
            
            console.log(coinData, 'coinData');
        }).catch(function (error) {
            console.error(error);
        });
    }, [coinId])

//     console.log(coinId, 'coinid')
// console.log(cryptoDetails?.coin?.name, 'let hpe')
//     console.log(cryptoDetails.coin.price, 'let hpe')


    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

    // const stats = [
    //     { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(Number(cryptoDetails?.price))}`, icon: <DollarCircleOutlined /> },
    //     { title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    //     // { title: '24h Volume', value: `$ ${cryptoDetails["24hVolume"] && millify(cryptoDetails["24hVolume"])}`, icon: <ThunderboltOutlined /> },
    //     { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(Number(cryptoDetails?.marketCap))}`, icon: <DollarCircleOutlined /> },
    //     // { title: 'All-time-high(daily avg.)', value: `$ ${millify(Number((cryptoDetails?.allTimeHigh.price)))}`, icon: <TrophyOutlined /> },
    // ];

    // const genericStats = [
    //     { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <FundOutlined /> },
    //     { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
    //     { title: 'Change', value: cryptoDetails?.change ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
    //     // { title: 'Total Supply', value: `$ ${millify(Number((cryptoDetails?.supply.total)))}`, icon: <ExclamationCircleOutlined /> },
    //     // { title: 'Circulating Supply', value: `$ ${millify(Number((cryptoDetails?.supply.circulating)))}`, icon: <ExclamationCircleOutlined /> },
    // ];



    const handleChange = (value) => {
        setTimePeriod(value)
    }

    return (
        // <Col className='coin-detail-container'>
        //     <Col className='coin-heading-container'>
        //         <Title level={2} className='coin-name'>
        //             {cryptoDetails.name} Price
        //         </Title>
        //         <p>
        //             {cryptoDetails.name} live price in US Dollars
        //         </p>
        //     </Col>
        //     <Select
        //         defaultValue="7d"
        //         className="select-timeperiod"
        //         placeholder="Select a time period"
        //         onchange={handleChange}
        //     >
        //         {time.map((date) => <Option key={date}>{date}</Option>)}
        //     </Select>
        //     <Col className='stats-container'>
        //         <Col className='coin-value-statistics'>
        //             <Col className='coin-value-staistics-heading'>
        //                 <Title level={3} className="coin-details-heading">
        //                     {cryptoDetails.name} Value Statistics
        //                 </Title>
        //                 <p>
        //                     An overview showing the stats of {cryptoDetails.name}
        //                 </p>
        //             </Col>
        //             {stats.map(({ icon, title, value }) => (
        //                 <Col className='coin-stats'>
        //                     <Col className='coin-stats-name'>
        //                         <Text>{icon}</Text>
        //                         <Text>{title}</Text>
        //                     </Col>
        //                     <Text className='stats'>{value}</Text>
        //                 </Col>
        //             ))}
                
        //         </Col>

        //         <Col className='other-stats-info'>
        //             <Col className='coin-value-staistics-heading'>
        //                 <Title level={3} className="coin-details-heading">
        //                     {cryptoDetails.name} Other Statistics
        //                 </Title>
        //                 <p>
        //                     An overview showing the stats of all Cryptocurrenciies
        //                 </p>
        //             </Col>
        //             {genericStats.map(({ icon, title, value }) => (
        //                 <Col className='coin-stats'>
        //                     <Col className='coin-stats-name'>
        //                         <Text>{icon}</Text>
        //                         <Text>{title}</Text>
        //                     </Col>
        //                     <Text className='stats'>{value}</Text>
        //                 </Col>
        //             ))}

        //         </Col>
        //     </Col>
        //     <Col className='coin-desc-link'>
        //         <Row className='coin-desc'>
        //             <Title level={3} className="coin-details-heading">
        //                 What is {cryptoDetails.name}
        //                 {HTMLReactParcer(cryptoDetails.description)}
        //             </Title>
        //         </Row>
        //     </Col>
        // </Col>
       <div>
            <h1>{coinId}</h1>

       </div>
    );
}

export default CryptoDetails;
