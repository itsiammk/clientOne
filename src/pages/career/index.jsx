import React from 'react';
import {
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
} from '@mui/joy';
import WaveCommon from '@/components/Common/Wave';
import style from '../../components/Common/card.module.scss'

const CareerPage = () => {
  const jobPositions = [
    {
      title: 'Software Engineer',
      description:
        'We are seeking a talented Software Engineer to join our team. You will be responsible for designing, developing, and maintaining our software applications.',
    },
    {
      title: 'Product Manager',
      description:
        'We are looking for an experienced Product Manager to lead the development and execution of our product strategy.',
    },
    {
      title: 'UI/UX Designer',
      description:
        'We are seeking a creative UI/UX Designer to help us create intuitive and visually appealing user interfaces for our products.',
    },
  ];

  const theme = {
    primary: 'rgba(79, 70, 229, 0.9450980392)',
    secondary: '#ffffff',
  };

  return (
    <>
    <WaveCommon text={'Join Our Team'} />
    <Box sx={{ p: 4, bgcolor: 'white' }}>
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        
        <Typography level="body1" sx={{ mx: 'auto', color: 'text.secondary' }}>
          At <span className={style.swatiText}>Swati Enterprises</span>, we believe in fostering a diverse and inclusive
          environment where talented individuals can thrive and grow. We are
          committed to providing our employees with challenging opportunities
          and a supportive work culture that encourages collaboration, innovation,
          and personal development.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {jobPositions.map((position, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              variant="outlined"
              sx={{
                height: '100%',
                bgcolor: theme.primary,
                color: theme.secondary,
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: `0px 10px 20px rgba(0, 0, 0, 0.2)`,
                },
              }}
            >
              <CardContent>
                <Typography level="h3" component="h2" gutterBottom sx={{ color: 'white' }}>
                  {position.title}
                </Typography>
                <Typography level="body2">{position.description}</Typography>
              </CardContent>
              <CardActions>
                <Button
                    variant="solid"
                    className="my-custom-button"
                    sx={{
                        '&.my-custom-button': {
                        bgcolor: theme.secondary,
                        color: theme.primary,
                        backgroundImage: 'none !important',
                        '&:hover': {
                            letterSpacing: '2px',
                            transition: 'all 0.2s ease-in-out',
                        },
                        },
                    }}
                    >
                    Contact Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 6 }}>
        <Typography level="h4" component="h2" sx={{ mb: 2, color: 'text.primary' }}>
          Why Join Us?
        </Typography>
        <Typography level="body1" sx={{ mb: 2, color: 'text.secondary' }}>
          At our company, we believe in creating a work environment that fosters
          growth, encourages collaboration, and celebrates diversity. Here are
          a few reasons why you should consider joining our team:
        </Typography>
        <ul>
          <li>
            <Typography level="body1" component="span" color="text.secondary">
              Competitive compensation and benefits package
            </Typography>
          </li>
          <li>
            <Typography level="body1" component="span" color="text.secondary">
              Opportunities for professional development and career growth
            </Typography>
          </li>
          <li>
            <Typography level="body1" component="span" color="text.secondary">
              Collaborative and supportive work culture
            </Typography>
          </li>
          <li>
            <Typography level="body1" component="span" color="text.secondary">
              Flexible work arrangements
            </Typography>
          </li>
        </ul>
      </Box>
    </Box>
    </>
  );
};

export default CareerPage;