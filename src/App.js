import ArgonTable from './components/ArgonTable';
import LoadHeadersButton from './components/LoadHeadersButton';
import { Box, Container } from '@mui/material';

function App() {
  const styling = {
    'textAlign': 'center',
    'border': '2px solid black',
    'color': 'white',
    'padding': '5px',
    'backgroundColor': 'purple',
    'marginLeft': '7%',
    'marginRight': '7%'
  }
  return (
    <>
      <h1 style = {styling}> Argon Table </h1>
      <Box textAlign='center' sx={{paddingBottom: '20px'}}>
        <LoadHeadersButton />
      </Box>
      <Container>
        <ArgonTable />
      </Container>
    </>
  );
}

export default App;
