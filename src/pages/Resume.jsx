import { Typography , Stack , Box , Paper , Button } from '@mui/material'
import React from 'react'
import DescriptionIcon from '@mui/icons-material/Description';
import DownloadIcon from '@mui/icons-material/Download';

export default function Resume() {
  return (
    <div>
      <Typography
        component="h2"
        sx={{
          color: '#252a2e',
          fontFamily: 'Georgia, "Times New Roman", serif',
          fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
          fontWeight: 700,
          textAlign: 'center',
          mb: { xs: 3, md: 4 },
          mt:'30px',
        }}
      >
        Create an ATS Friendly Resume in Minutes with AI
      </Typography>

      <Stack>
         <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        mx:'220px',
        gap:'150px',
        mt:'10px',
        '& > :not(style)': {
          m: 1,
          width: 420,
          height: 243,
        },
      }}
    >
      <Paper elevation={10}
        sx={{
          textAlign:'center',
          pt:'55px',
        }}
      >
        <DescriptionIcon fontSize='large' sx={{color:'blue'}}/>
        <Typography
          sx={{
            fontSize:'30px',
            fontWeight:'bold',
            mb:'10px',
            mt:'10px',
          }}
        >
          Add Your Details  <br/> 
        </Typography>
        <Typography>
          Our AI will generate skills & summary <br /> 
        </Typography>
        <Typography
          sx={{
            fontWeight:'bold',
            mb:'10px',
            mt:'10px',
          }}
        >
          Step 1
        </Typography>
      </Paper>

      <Paper elevation={10}
        sx={{textAlign:'center',
          pt:'55px',
        }}
      >
        <DownloadIcon fontSize='large' sx={{color:'brown'}}/>
        <Typography
          sx={{
            fontSize:'30px',
            fontWeight:'bold',
            mb:'10px',
            mt:'10px',
          }}
        >
          Download Your Resume  <br/> 
        </Typography>
        <Typography>
          Download CV as PDF and start applying <br /> 
        </Typography>
        <Typography
          sx={{
            fontWeight:'bold',
            mb:'10px',
            mt:'10px',
          }}
        >
          Step 2
        </Typography>
      </Paper>
    </Box>
      </Stack>

      <Button sx={{color:'white', backgroundColor:'brown' , ml:'680px' , height:'35px', mt:'50px', borderRadius:'10px'}}>Lets Start</Button>
      


    </div>
  )
}
