import React from 'react';
import { Button, Menu, Space, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined, RedditCircleFilled} from '@ant-design/icons';


import logo from '../../images/logo2.jpg'

const { Title } = Typography;
const Nav = () => {
    return (
        <div className='nav-container'>
            <div className="logo-container">
                
               <Space align="center">
                    <Avatar src={logo} size='large' />
                    <Title level={2} className="logo">
                        <Link to="/" style={{ color: 'black' }}>Crypt-Tech</Link>
                    </Title>
                </Space>

              
                {/* <button className='menu-control-container'></button> */}
            </div>
            <Menu style={{ background:'#2fa7a1'}}>
                <Menu.Item icon={<HomeOutlined />}>
                    <Link to='/'>Home</Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined />}>
                    <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectOutlined />}>
                    <Link to='/exchanges'>Exchanges</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined />}>
                    <Link to='/news'>News</Link>
                </Menu.Item>
            </Menu>
            
        </div>
    );
}

export default Nav;
