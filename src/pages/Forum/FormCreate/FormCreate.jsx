
import { useState } from 'react';
import { Container, TextField, Button, Typography, Paper} from '@mui/material'
import FileBase from 'react-file-base64'
import { Divider } from 'antd';



const FormCreate = () => {
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    })
    const handleSubmit = () => {

    }

    const handleChange = (e) => {
        setPostData({ ...postData, creator: e.target.value})
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
                        onChange={handleChange}
                        sx={{ padding: '10px' }}
                    />
                    <TextField
                        name='title'
                        variant='outlined'
                        label="Title"
                        fullWidth
                        value={postData.title}
                        onChange={handleChange}
                        sx={{ padding: '10px' }}
                    />
                    <TextField
                        name='message'
                        variant='outlined'
                        label="Message"
                        fullWidth
                        value={postData.message}
                        onChange={handleChange}
                        sx={{ padding: '10px' }}
                    />
                    <TextField
                        name='tags'
                        variant='outlined'
                        label="Tags"
                        fullWidth
                        value={postData.tags}
                        onChange={handleChange}
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

