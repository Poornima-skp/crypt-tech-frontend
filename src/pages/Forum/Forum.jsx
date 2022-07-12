import { useEffect, useState } from 'react';
import { Divider, Row, Col, Typography } from 'antd';
import { useDispatch } from 'react-redux';
import { Posts, FormCreate } from '../index'
import { getPosts } from '../../utilities/post-services';

const { Title } = Typography

const Forum = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts())
    }, [currentId, dispatch])

    return (
        <div>
            <Divider orientation="left" className='fourm-title'>Crypto Forums</Divider>
            {/* <Title level={4} className="show-more">
                <Link to="/form" onClick={(currentId) => {<FormCreate currentId={currentId} setCurrentId={setCurrentId}/>}}>Create a new Forum for dicussion </Link>
            </Title> */}


            <div className="forum-page">
                <Posts setCurrentId={setCurrentId} />

                <Title level={4} className="form">
                    <FormCreate currentId={currentId} setCurrentId={setCurrentId} />
                </Title>
            </div>

        </div>
    );
}

export default Forum;
