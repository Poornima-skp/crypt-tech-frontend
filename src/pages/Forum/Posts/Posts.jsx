import React from 'react';
import { Grid, CircularProgress } from '@mui/material'
import { useSelector } from 'react-redux';

import { Post } from '../../index'

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts)

    // console.log(posts)
    return (
        !posts.length ? <CircularProgress /> : (

            <Grid sx={{ display: 'flex', alignItems: 'center'}} container alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={10} sm={5} lg={3} >
                        <Post post={post} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Posts;
