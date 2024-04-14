import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import style from './card.module.scss'

export default function BasicCard({title, info, imageSrc}) {
  return (
    <Card 
      sx={{ width: 350}}
      color="neutral"
      invertedColors={false}
      orientation="vertical"
      size="lg"
      variant="soft"
    >
      <AspectRatio minHeight="120px" maxHeight="200px" objectFit='contain'>
        <img
          src={imageSrc}
          loading="lazy"
          alt={title}
        />
      </AspectRatio>
      <div>
        <Typography mb={2} level="title-lg">{title}</Typography>
        <Typography level="body-sm">{info}</Typography>
      </div>
      <CardContent orientation="horizontal">
        <button className={style.button} >
          Explore
        </button>
      </CardContent>
    </Card>
  );
}