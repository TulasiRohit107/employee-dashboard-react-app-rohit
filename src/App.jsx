import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './components/title.jsx';
import MediaCard from './components/employeecard.jsx';
import Data from './data/data.js';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';

function App() {
  const [showOnLeave, setShowOnLeave] = useState(true)
  console.log(showOnLeave);

  const filteredData = showOnLeave ? Data.filter((employee) => employee.onLeave ) : Data;
  const toggleOnLeave = (event) => { if(showOnLeave) {setShowOnLeave(false)} else setShowOnLeave(true) };
  return (
    <Container fixed>
      <Box>
        <Typography variant="h1" gutterBottom>
        Leave Dashboard
      </Typography>
      </Box>
      <Stack spacing={2} direction="row">
        <Switch onChange={toggleOnLeave} />
</Stack>
    <MediaCard data={filteredData} /> 
    </Container>
  );
}

export default App
