import React from 'react';
import { Routes, Route, Link} from 'react-router-dom';

// Components
import { Nav } from '../../components/index';

// Pages
import { HomePage, Exchanges, CryptoCurrencies, CryptoDetails, News } from '../index';

// CSS
import './App.css';
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

                        

                    </div>
                </Layout>

            </div>
            <div className="footer">
                
            </div>

        </div>
    );
}

export default App;
