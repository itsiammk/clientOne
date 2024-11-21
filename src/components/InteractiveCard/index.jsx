import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';

export default function InteractiveCard({heading, image, width, isMobile}) {
  return (
    <Card
      variant="outlined"
      orientation="horizontal"
      sx={{
        width: 'auto',
        '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
      }}
      cus
    >
      <AspectRatio ratio="1" sx={{ width: 90 }}>
        <img
          src={image}
        //   srcSet={`${image}2x`}
        //   loading="lazy"
          alt="interactive card"
        />
      </AspectRatio>
      <CardContent>
        <Typography level={isMobile ? 'h2' : "title-lg"} id="card-description">
          {heading}
        </Typography>
        {/* <Typography level="body-sm" aria-describedby="card-description" mb={1}>
          <Link
            overlay
            underline="none"
            href="#interactive-card"
            sx={{ color: 'text.tertiary' }}
          >
            California, USA
          </Link>
        </Typography> */}
        {/* <Chip
          variant="outlined"
          color="primary"
          size="sm"
          sx={{ pointerEvents: 'none' }}
        >
          Cool weather all day long
        </Chip> */}
      </CardContent>
    </Card>
  );
}