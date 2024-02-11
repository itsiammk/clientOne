import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import style from './card.module.scss'

const Cards = ({title, info, imageSrc}) => {
  return (
    <Box>
        <Card className={style.mainCard}>
            <CardMedia
              component={'img'}
              height={140}
              image={imageSrc}
              alt={'image'}
            />
            <CardContent>
                <Typography className={style.title} gutterBottom variant={'h5'} component={'div'}>
                    {title}
                </Typography>
                <Typography className={style.info} variant={'body2'} color={'text.secondary'}>
                    {info}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size={'small'} > View more </Button>
            </CardActions>
        </Card>
    </Box>
  )
}

export default Cards