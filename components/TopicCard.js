import React, { useState } from 'react';
import {CardContent, Grid, Typography, Card} from '@mui/material';


export default function TopicCard({topic, selectedTopic, index, handleSpecificTopicSubmit}) {
    return (

        <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
            <Card
                onClick={() => handleSpecificTopicSubmit(topic.id)}
                sx={{
                    ':hover': {
                        boxShadow: 20, // theme.shadows[20]
                        cursor: 'pointer',
                    },
                    ...(selectedTopic === topic.id ? {
                        border: '2px solid #3f51b5',
                    } : {}),

                }}
            >
                <CardContent>
                    <Typography variant="h5" component="div">
                        {topic.name}
                    </Typography>
                    <Typography color="textSecondary">
                        {topic.description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}


