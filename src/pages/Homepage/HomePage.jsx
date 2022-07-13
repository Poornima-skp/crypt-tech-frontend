import { useState, useEffect } from 'react';
import axios from 'axios';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom'
import { CryptoCurrencies, News} from '../index'
import { VerticalRightOutlined } from '@ant-design/icons';

const { Title } = Typography

const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '24h',
        'tiers[0]': '1',
        orderBy: 'marketCap',
        orderDirection: 'desc',
        limit: '50',
        offset: '0'
    },
    headers: {
        'X-RapidAPI-Key': 'd6b7253bf4msh4ebc624d6a86445p110ee7jsnfecee8a02617',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
};

const HomePage = () => {
    const [globalStats, setGlobalStats] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        axios.request(options).then(function (response) {

            const stats = response?.data?.data?.stats;
            setGlobalStats(stats)

        }).catch(function (error) {
            console.error(error);
        });
    }, [searchTerm]);

    
    return (
        <>
            <Title level={2} className="heading">Global Crypto Stats</Title>

            {/* <Row>
                <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
                <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
                <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} /></Col>
                <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} /></Col>
                <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
            </Row> */}
            <Row>
                <Col span={12}><Statistic title="Total Cryptocurrencies" value={0} /></Col>
                <Col span={12}><Statistic title="Total Exchanges" value={0} /></Col>
                <Col span={12}><Statistic title="Total Market Cap" value={0} /></Col>
                <Col span={12}><Statistic title="Total 24h Volume" value={0} /></Col>
                <Col span={12}><Statistic title="Total Markets" value={0} /></Col>
            </Row>

            <div className="home-heading-container">
                <Title level={2} className="home-title">Top Crytocurrencies</Title>
                {/* <Title level={3} className="show-more">
                    <Link to="/cryptocurrencies">Show More</Link>
                </Title> */}
            </div>
            <CryptoCurrencies simplified />

            <div className="home-heading-container">
                <Title level={2} className="home-title">Crypto Related News</Title>
                {/* <Title level={3} className="show-more">
                    <Link to="/news">Show More</Link>
                </Title> */}
            </div>
            <News simplified />
        </>
    );
}

export default HomePage;
