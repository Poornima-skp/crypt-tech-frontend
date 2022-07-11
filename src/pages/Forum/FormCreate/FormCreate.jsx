
import { useState } from 'react';
import { Container, TextField, Button, Typography, Paper} from '@mui/material'
import FileBase from 'react-file-base64'
import { Divider } from 'antd';
import { useDispatch } from 'react-redux';
import { createPost } from '../../../utilities/post-services';

const FormCreate = () => {
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    })

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPost(postData))
    }


    const handleDone = (base64) => {
        setPostData({ ...postData, selectedFile: base64 })
     }

    const clear = () => {

    }

    return (
            

        <div className='form-page'>
            <Divider orientation="left" className='fourm-title'>Create a New Thread</Divider>
            <Paper sx={{ padding: '10px', maxWidth: '500px' }}>
                <form autoComplete='off' noValidate className='form' onSubmit={handleSubmit} >
                    <Typography variant='h6'>Enter the details </Typography>
                    <TextField
                        name='creator'
                        variant='outlined'
                        label="Creator"
                        fullWidth
                        value={postData.creator}
                        onChange={(e) => setPostData({... postData, creator: e.target.value })}
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
                        onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
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

