import React from 'react';
import { Button, Menu, Space, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined, RedditCircleFilled} from '@ant-design/icons';


import logo from '../../images/Know.png'

const { Title } = Typography;
const Nav = () => {
    return (
        <div className='nav-container'>
            <div className="logo-container">
                
                    <Avatar src={logo} size='large' />
                    <Title level={2} className="logo">
                        <Link to="/" className='logo-link'>Crypt-Tech</Link>
                    </Title>
              
                {/* <button className='menu-control-container'></button> */}
            </div>
            <Menu className='menu'>
                <Menu.Item icon={<HomeOutlined />} className='menu'>
                    <Link to='/' className='logo-link'>Home</Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined />} className='menu'>
                    <Link to='/cryptocurrencies' className='logo-link'>Cryptocurrencies</Link>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectOutlined />} className='menu'>
                    <Link to='/exchanges' className='logo-link'>Exchanges</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined />} className='menu'>
                    <Link to='/news' className='logo-link'>News</Link>
                </Menu.Item>
            </Menu>
            
        </div>
    );
}

export default Nav;
