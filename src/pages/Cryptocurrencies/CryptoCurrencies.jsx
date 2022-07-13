import { useState, useEffect } from 'react';
import axios from 'axios';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';

// import { useGetCryptosQuery } from '../../utilities/cryptoApi';
import { CloudDownloadOutlined } from '@ant-design/icons';

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

const CryptoCurrencies = ({ simplified }) => {
    const count = simplified ? 10 : 100;
    // const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        axios.request(options).then(function (response) {
            const filteredData = response?.data?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
            setCryptos(filteredData)

        }).catch(function (error) {
            console.error(error);
        });
    }, [searchTerm]);

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

    return (
        <>
            {!simplified && (
                <div className="search-crypto">
                    <Input placeholder='Search Cryptocurrency' onChange={handleChange} />
                </div>
            )}

            <Row gutter={[32, 32]} className="cryto-card-container">
                {cryptos?.map((currency) => (
                    <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.uuid}>
                        <Link to={`/crypto/${currency.uuid}`}>
                            <Card
                                title={`${currency.rank}. ${currency.name}`}
                                extra={<img className='crypto-image' src={currency.iconUrl} />}
                                hoverable
                            >

                                <p>Price: {millify(currency.price)}</p>
                                <p>Market Cap: {millify(currency.marketCap)}</p>
                                <p>Daily Change: {millify(currency.change)}</p>


                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default CryptoCurrencies;


