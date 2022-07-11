import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// Components
import { Nav } from '../../components/index';

// Pages
import { HomePage, Forum, CryptoCurrencies, CryptoDetails, News, FormCreate, Auth } from '../index';

// CSS
import './App.css';
import '../../components/Nav/Nav.css'
import '../Homepage/HomePage.css'
import '../Cryptocurrencies/CryptoCurrencies.css'
import '../News/News.css'
import '../CryptoDetails/CryptoDetails.css'
import '../Forum/Forum.css'
import '../Forum/FormCreate/FormCreate.css'
import '../Forum/Posts/Post/Posts.css'
import { Layout, Typography, Space } from 'antd';


const App = () => {
    return (

        <div className='app'>

            <div className="navbar">
                <Nav />
            </div>
            
            <div className="main">
            <Layout>
               
                    <div className="routes">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/forum" element={<Forum />} />
                            <Route path="/form" element={<FormCreate />} />
                            <Route path="/auth" element={<Auth />} />
                            <Route path="/cryptocurrencies" element={<CryptoCurrencies />} />
                            <Route path="/crypto/:coinId" element={<CryptoDetails />} />
                            <Route path="/news" element={<News />} />
                        </Routes>
                    </div>
                </Layout>

                    <div className="footer">
                        <Typography.Title level={5}>
                            Crypt-tech <br />
                            All Rights Reserved
                        </Typography.Title>
                        <Space>
                            <Link to="/">Home</Link>
                            <Link to="/exchanges">Exchanges</Link>
                            <Link to="/cryptoCurrencies">CryptoCurrencies</Link>
                            <Link to="/news">News</Link>
                        </Space>
                    </div>

               
            </div>
        </div>
    );
}

export default App;
