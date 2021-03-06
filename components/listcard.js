import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from "next/image"
import Link from "next/link"


export default function ImgMediaCard(props) {
    console.log(props)
    const { link, name, details, id } = props
    return (
        <Card sx={{ maxWidth: 300 }}>
            <CardMedia height="140">
                <Image src={`/${link}`} width="300" height="220" alt="cow"></Image>
            </CardMedia>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {details.slice(0, 140)}
                </Typography>
            </CardContent>
            <CardActions>
                <Link href={`home/${id}`}><button >view more</button></Link>
                {/* <Button size="small">View more</Button> */}
            </CardActions>
        </Card>
    );
}
