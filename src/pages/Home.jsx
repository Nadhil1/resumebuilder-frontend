import React from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Home() {
  return (
    <section>

    <Box
      component="section"
      sx={{
        minHeight: 'min(700px, 75vh)',
        width: '100%',
        backgroundImage:
          "url('https://png.pngtree.com/thumb_back/fw800/background/20230322/pngtree-the-two-young-employees-working-in-the-office-two-young-employees-photo-image_2088512.jpg')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: { xs: 1, sm: 2 },
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          width: '90%',
          maxWidth: '1200px',
          minHeight: 'calc(min(700px, 75vh) - 32px)',
          bgcolor: 'rgba(35, 43, 38, 0.66)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          px: { xs: 2, sm: 4, md: 6 },
          py: { xs: 5, sm: 6 },
          boxSizing: 'border-box',
        }}
      >
        <Typography
          component="h1"
          sx={{
            color: '#fff',
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '2.75rem' },
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: '1000px',
            mb: 3,
          }}
        >
          Designed To Get Hired.
          <br />
          Your Skills, Your Story,
          <br />
          Your Next Job – All In One.
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: '#765b4a',
            borderRadius: 2,
            color: '#fff',
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: '1rem',
            textTransform: 'none',
            px: 2,
            '&:hover': { bgcolor: '#624938' },
          }}
        >
          Make your Resume with AI
        </Button>
      </Box>
    </Box>

    <Box
      component="section"
      sx={{
        px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 4, md: 1 },
      }}
    >
      <Typography
        component="h2"
        sx={{
          color: '#252a2e',
          fontFamily: 'Georgia, "Times New Roman", serif',
          fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
          fontWeight: 700,
          textAlign: 'center',
          mb: { xs: 3, md: 4 },
        }}
      >
        What's AI rBuilder
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          alignItems: 'center',
          gap: { xs: 3, md: 5 },
          
        }}
      >
        <Box
          sx={{
            color: '#252a2e',
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: { xs: '0.95rem', md: '0.9rem' },
            lineHeight: 1.65,
            textAlign: 'justify',
            mx: { xs: 0, md: 3 },
          }}
        >
          <Typography component="p" sx={{ mb: 1.5, font: 'inherit' }}>
            An AI rBuilder is a web application that helps users create professional
            resumes quickly and efficiently using artificial intelligence. Traditional
            resume creation can be time-consuming and difficult, especially for
            freshers who may not know the correct format or keywords required for
            modern recruitment systems.
          </Typography>
          <Typography component="p" sx={{ mb: 1.5, font: 'inherit' }}>
            The system can suggest job-specific keywords, professional summaries,
            and skill recommendations to make the resume more effective and ATS
            (Applicant Tracking System) friendly.
          </Typography>
          <Typography component="p" sx={{ mb: 1.5, font: 'inherit' }}>
            The main goal of the AI rBuilder is to simplify the resume creation
            process and help job seekers build professional, well-structured
            resumes in a few minutes. Users can edit content, preview their resume,
            and download it in formats such as PDF.
          </Typography>
          <Typography component="p" sx={{ font: 'inherit' }}>
            This type of system is especially useful for students and fresh
            graduates, who want to create high-quality resumes that increase their
            chances of getting shortlisted for job interviews.
          </Typography>
        </Box>
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=85"
          alt="Professional reviewing documents at a desk"
          sx={{
            display: 'block',
            width: '100%',
            height: { xs: 240, sm: 350, md: 420 },
            objectFit: 'cover',
            
          }}
        />
      </Box>
    </Box>

    <Box
      component="section"
      sx={{
        px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 4, md: 1 },
      }}
    >
      <Typography
        component='h2'
        sx={{
           color: '#252a2e',
          fontFamily: 'Georgia, "Times New Roman", serif',
          fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
          fontWeight: 700,
          textAlign: 'center',
          mb: { xs: 3, md: 4 },
        }}
      > Testimony
      </Typography>
      <Box>
         <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          alignItems: 'center',
          gap: { xs: 3, md: 5 },
          
        }}
        >
          <Box
          sx={{
            color: '#252a2e',
            fontFamily: 'Georgia, "Times New Roman", serif',
            fontSize: { xs: '0.95rem', md: '0.9rem' },
            lineHeight: 1.65,
            textAlign: 'justify',
            margin:'50px'
          }}
        >
          <Typography component="h5" sx={{ mb: 1.5, font: 'bold',fontWeight:'200px' }}>
            Trusted by professionals worldwide
          </Typography>
          <Typography component="p" sx={{ mb: 1.5, font: 'inherit' }}>
            At rBuilder, we don't just help you create résumés — we help you land
            the job. Whether you're a seasoned professional or just starting out,
            our tools are designed to get results.
          </Typography>
          <Typography component="p" sx={{ mb: 1.5, font: 'inherit' }}>
            In fact, users who used rBuilder reported getting hired an average of
            48 days faster.
          </Typography>
          <Typography component="p" sx={{ font: 'inherit' }}>
            Join thousands of job-seekers who’ve fast-tracked their careers with a
            résumé that truly stands out.
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            width: '100%',
            maxWidth: 420,
            justifySelf: 'center',
            gridTemplateColumns: {
              xs: 'repeat(2, minmax(0, 1fr))',
              sm: 'repeat(3, minmax(0, 1fr))',
              md: 'repeat(4, minmax(0, 1fr))',
            },
            gap: 1.5,
          }}
        >
          <Box component="img" src="https://tse4.mm.bing.net/th/id/OIP.53mrZZAWSRmTe-4RG2MO6QHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Professional portrait" sx={{ width: '100%', aspectRatio: '1', objectFit: 'cover' }} />
          <Box component="img" src="https://i.pinimg.com/736x/20/57/2b/20572baabbf418db9cfb52c5026fdce1.jpg" alt="Professional portrait" sx={{ width: '100%', aspectRatio: '1', objectFit: 'cover' }} />
          <Box component="img" src="https://wallpapers.com/images/hd/random-person-headshot-photo-png-67-9jbhdcy89ounnema.png" alt="Professional portrait" sx={{ width: '100%', aspectRatio: '1', objectFit: 'cover' }} />
          <Box component="img" src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/35af6a41332353.57a1ce913e889.jpg" alt="Professional portrait" sx={{ width: '100%', aspectRatio: '1', objectFit: 'cover' }} />
          <Box component="img" src="https://tse1.explicit.bing.net/th/id/OIP.tcEjr6Iaj5yoh2by2XB2LQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Professional portrait" sx={{ width: '100%', aspectRatio: '1', objectFit: 'cover' }} />
          <Box component="img" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww" alt="Professional portrait" sx={{ width: '100%', aspectRatio: '1', objectFit: 'cover' }} />
          <Box component="img" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww" alt="Professional portrait" sx={{ width: '100%', aspectRatio: '1', objectFit: 'cover' }} />
          <Box component="img" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhbmRvbSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" alt="Professional portrait" sx={{ width: '100%', aspectRatio: '1', objectFit: 'cover' }} />
          <Box component="img" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww" alt="Professional portrait" sx={{ width: '100%', aspectRatio: '1', objectFit: 'cover' }} />
          <Box component="img" src="https://tse4.mm.bing.net/th/id/OIP.q_OsFaeD9cibPbYXTHZOMgHaLM?r=0&w=828&h=1252&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Professional portrait" sx={{ width: '100%', aspectRatio: '1', objectFit: 'cover' }} />
          <Box component="img" src="https://static.vecteezy.com/system/resources/previews/046/295/376/non_2x/portrait-half-body-of-a-young-happy-man-confidently-smiling-in-a-casual-studio-setup-isolate-him-against-a-random-color-background-for-a-striking-visual-impact-photo.jpg" alt="Professional portrait" sx={{ width: '100%', aspectRatio: '1', objectFit: 'cover' }} />
          <Box component="img" src="https://img.freepik.com/premium-photo/portrait-smiling-girl-her-twenties-with-random-ethnicity-random-head-shape_992397-8960.jpg?w=2000" alt="Professional portrait" sx={{ width: '100%', aspectRatio: '1', objectFit: 'cover' }} />
        </Box>

        </Box>
      </Box>

    </Box>

    </section>
    
  )
}
