
import { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material'
import FileBase from 'react-file-base64'
import { Divider } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../../utilities/post-services';

const FormCreate = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    })

    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null )

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(updatePost(currentId, postData));
        } else {
            dispatch(createPost(postData));
            clear();
        }
        clear();

    }

    useEffect(() => {
        if(post) setPostData(post)
    },[post])

    const handleDone = (base64) => {
        setPostData({ ...postData, selectedFile: base64 })
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({
            creator: '',
            title: '',
            message: '',
            tags: '',
            selectedFile: ''
        })

    }

    return (


        <div className='form-page'>
            <Paper sx={{ padding: '10px', maxWidth: '450px' }}>

                <form autoComplete='off' noValidate className='form' onSubmit={handleSubmit} >
                    <Typography variant='h6'>{ currentId ? 'Edit your Thread': 'Start a New Thead'}</Typography>
                    <TextField
                        name='creator'
                        variant='outlined'
                        label="Creator"
                        fullWidth
                        value={postData.creator}
                        onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
                        sx={{ padding: '10px' }}
                    />
                    <TextField
                        name='title'
                        variant='outlined'
                        label="Title"
                        fullWidth
                        value={postData.title}
                        onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                        sx={{ padding: '10px' }}
                    />
                    <TextField
                        name='message'
                        variant='outlined'
                        label="Message"
                        fullWidth
                        value={postData.message}
                        onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                        sx={{ padding: '10px' }}
                    />
                    <TextField
                        name='tags'
                        variant='outlined'
                        label="Tags"
                        fullWidth
                        value={postData.tags}
                        onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
                        sx={{ padding: '10px' }}
                    />

                    <div className='fileInput'>
                        <FileBase
                            type="file"
                            multiple={false}
                            onDone={handleDone}
                        >

                        </FileBase>
                    </div>
                    <Button
                        sx={{ marginTop: 5 }} variant='contained' color='primary'
                        size='large'
                        type='submit'
                        fullWidth
                    >
                        Submit
                    </Button>
                    <Button
                        sx={{ marginTop: 1 }}
                        variant='contained' color='error'
                        size='small'
                        onClick={clear}
                        fullWidth

                    >
                        Clear
                    </Button>
                </form>
            </Paper>
        </div>
    );
}

export default FormCreate;

