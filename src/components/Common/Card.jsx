import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import style from './card.module.scss'

export default function BasicCard() {
  return (
    <Card 
      sx={{ width: '100%' }}
      color="neutral"
      invertedColors={false}
      orientation="vertical"
      size="lg"
      variant="soft"
    >
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
          srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <div>
        <Typography level="title-lg">Bridges</Typography>
        <Typography level="body-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere et eveniet iusto minus illum ipsa sequi excepturi. totam nesciunt eligendi porro.</Typography>
      </div>
      <CardContent orientation="horizontal">
        <button className={style.button} >
          Explore
        </button>
      </CardContent>
    </Card>
  );
}