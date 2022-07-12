import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material'
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import './Post.css';
import { deletePost } from '../../../../utilities/post-services';


const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();

    return (
        <Card sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            borderRadius: '15px',
            height: '100%',
            position: 'relative'
        }}>
            <CardMedia sx={{
                height: 0,
                paddingTop: '56.25%',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                backgroundBlendMode: 'darken'
            }}
                image={post.selectedFile || 'https://media.istockphoto.com/photos/currency-and-exchange-stock-chart-for-finance-and-economy-display-picture-id1358927461?b=1&k=20&m=1358927461&s=170667a&w=0&h=1Mso4NiczXwiunkwg7uwHtRhMhJZc5uxTE9vRZGsfhE='}
                title={post.title}
            />
            <div className="overlay">
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className="overlay2">
                <Button className='card-button' size='small' onClick={() => {setCurrentId(post._id) }}>
                    {/* <Link to='/form'><EditTwoToneIcon fontSize="medium" /></Link> */}
                    <EditTwoToneIcon fontSize="medium" />
                </Button>
            </div>
            <div className="details">
                <Typography variant="body2" color="textSecondary" >{post.tags.map((tag) => `#${tag}`)}</Typography>
            </div>
            <Typography sx={{ padding: '0 16px' }} variant="h5" gutterBottom >{post.title}</Typography>
            <CardContent>
                <Typography variant="h6" gutterBottom >{post.message}</Typography>
            </CardContent>
            <CardActions sx={{
                padding: '0 16px 8px 16px',
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <Button size="small" color="primary" onClick={() => { }}>
                    <ThumbUpAltIcon fontSize='small' />
                    Like
                    {post.likeCount}
                </Button>

                <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
                    <DeleteIcon fontSize='small' />
                    Delete
                </Button>
            </CardActions>

        </Card>
    );
}

export default Post;
