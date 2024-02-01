import AddToDo from '../../componets/add-todo';
import ListToDo from '../../componets/list-todo';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './index.css';
const Home = () => {
    return (
        <>
            <Container maxWidth="md">
                <Box className='todo-box' sx={{ bgcolor: '#efefef', height: '100vh' }} >
                    <ListToDo />
                    <AddToDo />
                </Box>
            </Container>
        </>

    )
}

export default Home;