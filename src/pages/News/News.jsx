import React from 'react';
import { Select, Typography, Row, Col, Avatar, Card} from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../../utilities/cryptoNewsApi';

const { Text, Title } = Typography;
const { Option } = Select;

const generalImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKYanopbdlurWLV_5MhU49HYMTQqwcmt9zQw&usqp=CAU'

const News = ({ simplified }) => {
    // const count = simplified ? 10 : 100;
    const { data: cryptoNews } = useGetCryptoNewsQuery({
        newsCategory: 'Cryptocurrency', count: simplified ? 6 : 12
    })

    if(!cryptoNews?.value)  return 'Loading...'

    // console.log(cryptoNews)

    return (
        <Row gutter={[ 24, 24]}>
            {cryptoNews.value.map((news, i) => (
                <Col xs={24} sm={12} lg={6} key={i}>
                    <Card hoverable className="news-card">
                        <a href={news.url} target="_blank" rel="nonreferrer">
                            <div className="news-image-container">
                                <Title className='news-title' level={4}>
                                    {news.name}
                                </Title>
                                <img src={news?.image?.thumbnail?.contentUrl || generalImage}  alt= 'news'/>
                            </div>
                            <p>
                                {news.description > 100 ? `${news.description.substing(0,100)}...`
                                :news.description
                                }
                            </p>
                            <div className="provider-container">
                                <div>
                                    <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || generalImage} alt=""/>
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
