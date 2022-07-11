// import { useState } from 'react';
// import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
// import moment from 'moment';

// import { useGetCryptosQuery } from '../../utilities/cryptoApi';
// import { useGetCryptoNewsQuery } from '../../utilities/cryptoNewsApi';

// const { Text, Title } = Typography;
// const { Option } = Select;

// const generalImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKYanopbdlurWLV_5MhU49HYMTQqwcmt9zQw&usqp=CAU'

// const News = ({ simplified }) => {
//     const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
//     const { data: cryptoNews } = useGetCryptoNewsQuery({
//         newsCategory, count: simplified ? 6 : 12
//     })
//     const { data } = useGetCryptosQuery(100);

//     if (!cryptoNews?.value) return 'Loading...'

//     // console.log(cryptoNews)
//     const handleChange = (value) => (
//         setNewsCategory(value)
//     )

//     return (
//         <Row gutter={[24, 24]}>
//             {!simplified && (
//                 <Col span={24}>
//                     <Select
//                         showSearch
//                         className='select-news'
//                         placeholder='Select a Crypto'
//                         optionFilterProp='="children'
//                         onChange= {handleChange}
//                         filterOption = {(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase() >= 0)
//                         }
//                     >
//                         <Option value="Cryptocurrency"> Crytocurrency </Option>

//                         {data?.data?.coins.map((coin) => <Option value={coin.name}>{coin.name}</Option>)}

//                     </Select>
//                 </Col>
//             )}
//             {cryptoNews.value.map((news, i) => (
//                 <Col xs={24} sm={12} lg={6} key={i}>
//                     <Card hoverable className="news-card">
//                         <a href={news.url} target="_blank" rel="nonreferrer">
//                             <div className="news-image-container">
//                                 <Title className='news-title' level={4}>
//                                     {news.name.length > 50 ? `${news.name.substr(0, 50)}...`
//                                         : news.name}
//                                 </Title>
//                                 <img src={news?.image?.thumbnail?.contentUrl || generalImage} alt='news' />
//                             </div>
//                             <p>
//                                 {news.description.length > 125 ? `${news.description.substr(0, 125)}...`
//                                     : news.description
//                                 }
//                             </p>
//                             <div className="provider-container">
//                                 <div>
//                                     <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || generalImage} alt="" />
//                                     <Text className='provider.name'>{news.provider[0].name}</Text>
//                                 </div>
//                                 <Text>{moment(news.datePublished).endOf('T').fromNow()}</Text>
//                             </div>
//                         </a>
//                     </Card>
//                 </Col>
//             ))}
//         </Row>

//     );
// }

// export default News;

import React from 'react';

const News = () => {
    return (
        <div>
            <h1> News </h1>
        </div>
    );
}

export default News;

