import { useState, useEffect } from 'react';
import axios from 'axios';

import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

// import { useGetCryptosQuery } from '../../utilities/cryptoApi';
// import { useGetCryptoNewsQuery } from '../../utilities/cryptoNewsApi';

const { Text, Title } = Typography;
const { Option } = Select;

const generalImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKYanopbdlurWLV_5MhU49HYMTQqwcmt9zQw&usqp=CAU'

const options = {
    method: 'GET',
    url: 'https://bing-news-search1.p.rapidapi.com/news/search',
    params: { q: 'cryptocurrency', freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off' },
    headers: {
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': 'd6b7253bf4msh4ebc624d6a86445p110ee7jsnfecee8a02617',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
    }
};

const News = ({ simplified }) => {
    const [newsCategory, setNewsCategory] = useState([])
    // const { data: cryptoNews } = useGetCryptoNewsQuery({
    //     newsCategory, count: simplified ? 6 : 12
    // })
    // const { data } = useGetCryptosQuery(100);

    // if (!cryptoNews?.value) return 'Loading...'

    // console.log(cryptoNews)

    useEffect(() => {
        axios.request(options).then(function (response) {
            const news = response.data.value;
            // console.log(response.data.value);
            setNewsCategory(news)
        }).catch(function (error) {
            console.error(error);
        });
    },[])
    // console.log(newsCategory)

    const handleChange = (value) => (
        setNewsCategory(value)
    )

    return (
        <Row gutter={[24, 24]}>
            {!simplified && (
                <Col span={24}>
                    <h1 className='page-title'>Crypto Related News</h1>
                </Col>
            )}
            {newsCategory.map((news, i) => (
                <Col xs={24} sm={12} lg={6} key={i}>
                    <Card hoverable className="news-card">
                        <a href={news.url} target="_blank" rel="nonreferrer">
                            <div className="news-image-container">
                                <Title className='news-title' level={4}>
                                    {news.name.length > 50 ? `${news.name.substr(0, 50)}...`
                                        : news.name}
                                </Title>
                                <img src={news?.image?.thumbnail?.contentUrl || generalImage} alt='news' />
                            </div>
                            <p>
                                {news.description.length > 125 ? `${news.description.substr(0, 125)}...`
                                    : news.description
                                }
                            </p>
                            <div className="provider-container">
                                <div>
                                    <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || generalImage} alt="" />
                                    <Text className='provider.name'>{news.provider[0].name}</Text>
                                </div>
                                <Text>{moment(news.datePublished).endOf('T').fromNow()}</Text>
                            </div>
                        </a>
                    </Card>
                </Col>
            ))}
        </Row>

    );
}

export default News;



