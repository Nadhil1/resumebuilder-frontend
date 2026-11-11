import {Divider ,Box, Button ,Container,Stack, Typography } from '@mui/material'
import React from 'react'
import Paper from '@mui/material/Paper';


export default function Download() {
  return (
    <div>
      <Container>
        <Stack direction='row'>
        <Typography variant='h4' sx={{mx:'20px',mt:'50px'}}>All Downloaded Resume Details</Typography>
        <Button sx={{color:'white', backgroundColor:'brown' , ml:'500px' , height:'35px', mt:'50px'}}>View in cart</Button>
      </Stack>

      <Typography sx={{mt:'30px'}}>
        Total downloaded resumes from our site is <Box component='span' sx={{color:'brown' , fontWeight:'bold', fontSize:'24px'}}>10</Box>
      </Typography>

       <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        mx:'100px',
        gap:'70px',
        mt:'10px',
        '& > :not(style)': {
          m: 1,
          width: 250,
          height: 353,
        },
      }}
    >
      <Paper elevation={10}
        sx={{
          flex: '1 1 0',
          minWidth: 0,
          p: 1.5,
          overflowWrap: 'anywhere'
        }}>

          <Typography sx={{ fontSize: '13px', fontWeight: 'bold' }}>
            Arav Sharma
          </Typography>

          <Typography sx={{ fontSize: '10px' }}>
            Phone: 345643790
          </Typography>
          <Typography sx={{ fontSize: '10px' }}>
            Email: arav@gmail.com
          </Typography>
          <Typography sx={{ fontSize: '10px' }}>
            LinkedIn: Arav
          </Typography>
          <Typography sx={{ fontSize: '10px' }}>
            Location: Pune, India
          </Typography>

          <Divider sx={{ my: 1 }} />

          <Typography sx={{ fontSize: '11px', fontWeight: 'bold' }}>
            Professional Summary
          </Typography>
          <Typography sx={{ fontSize: '10px' }}>
            Node.js developer experienced in building scalable backend
            services and REST APIs. Skilled in server-side development,
            database integration, and performance optimization.
          </Typography>

          <Divider sx={{ my: 1 }} />

          <Typography sx={{ fontSize: '11px', fontWeight: 'bold' }}>
            Technical Skills
          </Typography>
          <Typography sx={{ fontSize: '10px' }}>
            Node.js | Express.js | REST APIs | MongoDB |
            Authentication | Middleware | Server Side Logic |
            API Security | Database Integration | Git
          </Typography>

          <Divider sx={{ my: 1 }} />

          <Typography sx={{ fontSize: '11px', fontWeight: 'bold' }}>
            Education
          </Typography>
          <Typography sx={{ fontSize: '10px' }}>
            Bachelor's Degree in B.Tech in Computer Science
          </Typography>
          <Typography sx={{ fontSize: '10px' }}>
            SRM Institute of Science and Technology
          </Typography>
          <Typography sx={{ fontSize: '10px' }}>
            Year of Graduation: 2021
          </Typography>
      </Paper>
       <Paper elevation={10}
        sx={{
          flex: '1 1 0',
          minWidth: 0,
          p: 1.5,
          overflowWrap: 'anywhere'
        }}>

          <Typography sx={{ fontSize: '13px', fontWeight: 'bold' }}>
            Arav Sharma
          </Typography>

          <Typography sx={{ fontSize: '10px' }}>
            Phone: 345643790
          </Typography>
          <Typography sx={{ fontSize: '10px' }}>
            Email: arav@gmail.com
          </Typography>
          <Typography sx={{ fontSize: '10px' }}>
            LinkedIn: Arav
          </Typography>
          <Typography sx={{ fontSize: '10px' }}>
            Location: Pune, India
          </Typography>

          <Divider sx={{ my: 1 }} />

          <Typography sx={{ fontSize: '11px', fontWeight: 'bold' }}>
            Professional Summary
          </Typography>
          <Typography sx={{ fontSize: '10px' }}>
            Node.js developer experienced in building scalable backend
            services and REST APIs. Skilled in server-side development,
            database integration, and performance optimization.
          </Typography>

          <Divider sx={{ my: 1 }} />

          <Typography sx={{ fontSize: '11px', fontWeight: 'bold' }}>
            Technical Skills
          </Typography>
          <Typography sx={{ fontSize: '10px' }}>
            Node.js | Express.js | REST APIs | MongoDB |
            Authentication | Middleware | Server Side Logic |
            API Security | Database Integration | Git
          </Typography>

          <Divider sx={{ my: 1 }} />

          <Typography sx={{ fontSize: '11px', fontWeight: 'bold' }}>
            Education
          </Typography>
          <Typography sx={{ fontSize: '10px' }}>
            Bachelor's Degree in B.Tech in Computer Science
          </Typography>
          <Typography sx={{ fontSize: '10px' }}>
            SRM Institute of Science and Technology
          </Typography>
          <Typography sx={{ fontSize: '10px' }}>
            Year of Graduation: 2021
          </Typography>
      </Paper>
      <Paper elevation={10}
        sx={{
          flex: '1 1 0',
          minWidth: 0,
          p: 1.5,
          overflowWrap: 'anywhere'
        }}>

          <Typography sx={{ fontSize: '13px', fontWeight: 'bold' }}>
            Arav Sharma
          </Typography>

          <Typography sx={{ fontSize: '10px' }}>
            Phone: 345643790
          </Typography>
          <Typography sx={{ fontSize: '10px' }}>
            Email: arav@gmail.com
          </Typography>
          <Typography sx={{ fontSize: '10px' }}>
            LinkedIn: Arav
          </Typography>
          <Typography sx={{ fontSize: '10px' }}>
            Location: Pune, India
          </Typography>

          <Divider sx={{ my: 1 }} />

          <Typography sx={{ fontSize: '11px', fontWeight: 'bold' }}>
            Professional Summary
          </Typography>
          <Typography sx={{ fontSize: '10px' }}>
            Node.js developer experienced in building scalable backend
            services and REST APIs. Skilled in server-side development,
            database integration, and performance optimization.
          </Typography>

          <Divider sx={{ my: 1 }} />

          <Typography sx={{ fontSize: '11px', fontWeight: 'bold' }}>
            Technical Skills
          </Typography>
          <Typography sx={{ fontSize: '10px' }}>
            Node.js | Express.js | REST APIs | MongoDB |
            Authentication | Middleware | Server Side Logic |
            API Security | Database Integration | Git
          </Typography>

          <Divider sx={{ my: 1 }} />

          <Typography sx={{ fontSize: '11px', fontWeight: 'bold' }}>
            Education
          </Typography>
          <Typography sx={{ fontSize: '10px' }}>
            Bachelor's Degree in B.Tech in Computer Science
          </Typography>
          <Typography sx={{ fontSize: '10px' }}>
            SRM Institute of Science and Technology
          </Typography>
          <Typography sx={{ fontSize: '10px' }}>
            Year of Graduation: 2021
          </Typography>
      </Paper>
    </Box>
      </Container>
    </div>
  )
}
