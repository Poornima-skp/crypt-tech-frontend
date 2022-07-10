import { useState, useEffect } from 'react';
import { Button, Menu, Space, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined, RedditCircleFilled } from '@ant-design/icons';


import logo from '../../images/Know.png'

const { Title } = Typography;
const Nav = () => {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (screenSize < 786) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);

    return (
        <div className='nav-container'>
            <div className="logo-container">

                <Avatar src={logo} size='large' />
                <Title level={2} className="logo">
                    <Link to="/" className='logo-link'>Crypt-Tech</Link>
                </Title>

                <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined /></Button>
            </div>
            {activeMenu && (
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
            )}

        </div>
    );
}

export default Nav;
