import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation} from 'react-router-dom';
import { Button, Menu, Space, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined, RedditCircleFilled } from '@ant-design/icons';


import logo from '../../images/Know.png'

const { Title } = Typography;

const Nav = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

    // console.log(user);

    useEffect(() => {
        const token = user?.token;

        setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])

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

    const logout = () => {
        dispatch({ type: 'LOGOUT' })

        navigate('/');
        setUser(null);
    }

    // const user = false;

    return (
        <div className='nav-container'>
            <div className="logo-container">

                <Avatar src={logo} size='large' />
                <Title level={2} className="logo">
                    <Link to="/" className='logo-link'>Crypt-Tech</Link>
                </Title>
                <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined /></Button>
                
            </div>
            {user ? (
                <div className='profile'>
                    <Avatar className='purple' alt={user.result.name} src={user.result.imageUrl} >{user.result.name.charAt(0)}</Avatar>
                    <Title className='userName' level={5}>{user.result.name}</Title>
                    <Button className="auth-button logout" type="primary" danger ghost size='middle' onClick={logout}>
                        Logout
                    </Button>
                </div>
            ) : (
                    <div className="auth-link">
                        {/* <Button className="auth-button" type="link" size={'large'}>
                            SignUp
                        </Button> */}
                        <Button className="auth-button" type="link" size={'large'}>
                            <Link to='/auth'>Sign In</Link>
                        </Button>

                    </div>
            )}

            
            {activeMenu && (
                <Menu className='menu'>

                    <Menu.Item icon={<HomeOutlined />} className='menu'>
                        <Link to='/' className='logo-link'>Home</Link>
                    </Menu.Item>

                    <Menu.Item icon={<FundOutlined />} className='menu'>
                        <Link to='/cryptocurrencies' className='logo-link'>Cryptocurrencies</Link>
                    </Menu.Item>
                
                    <Menu.Item icon={<BulbOutlined />} className='menu'>
                        <Link to='/news' className='logo-link'>News</Link>
                    </Menu.Item>

                    <Menu.Item icon={<MoneyCollectOutlined />} className='menu'>
                        <Link to='/forum' className='logo-link'>Forum</Link>
                    </Menu.Item>

                </Menu>
            )}

         </div>
    );
}

export default Nav;
