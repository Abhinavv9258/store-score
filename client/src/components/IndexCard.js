import React from 'react'
// import { Link } from 'react-router-dom';

import {
    Card,
    CardActionArea,
    CardMedia,
    CardActions,
    CardContent,
    Typography,
    Button
} from '@mui/material'

// importing icons
import { FaArrowRightLong } from "react-icons/fa6";

import '../assets/css/IndexCard.css';


const IndexCard = ({ cardImage, cardName, cardButton }) => {
    return (
        <>
            <Card className='index-cards' sx={{ maxWidth: 345 }}>
                <CardActionArea style={{ cursor: 'default' }}>
                    <CardMedia
                        className='index-card-media'
                        component='img'
                        height='auto'
                        image={cardImage}
                        alt={cardImage}
                    />
                </CardActionArea>
                <CardContent>
                    <Typography sx={{ display: 'flex', flexDirection: 'row' }} gutterBottom variant='h6' component='div'>
                        {cardName}
                    </Typography>
                </CardContent>
                <CardActions className='card-actions'>
                    {/* <Link to={cardName}> */}
                    <Button className='index-btn'>
                        <Typography>
                            {cardButton} &nbsp;
                        </Typography>
                        <FaArrowRightLong />
                    </Button>
                    {/* </Link> */}
                </CardActions>
            </Card>

        </>
    );
};

export default IndexCard;
