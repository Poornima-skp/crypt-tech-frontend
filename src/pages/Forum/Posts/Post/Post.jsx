import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material'
import { ThumbUpAltIcon, DeleteIcon, MoreHorizIcon } from '@mui/icons-material'


const Post = ({ post }) => {
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
            image={post.selectedFile}
            title={post.title}
            />
            <div className="overlay">
                
            </div>

        </Card>
    );
}

export default Post;
