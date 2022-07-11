import { useEffect } from 'react';
import { Divider, Row, Col, Typography } from 'antd';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { Posts } from '../index'
import { getPosts } from '../../utilities/post-services';

const { Title } = Typography

const Forum = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts())
    },[dispatch])
    return (
        <div>
            <Divider orientation="left" className='fourm-title'>Crypto Forums</Divider>
            <Title level={4} className="show-more">
                <Link to="/form">Create a new Forum for dicussion</Link>
            </Title>

            <Posts />
            

        </div>
    );
}

export default Forum;
