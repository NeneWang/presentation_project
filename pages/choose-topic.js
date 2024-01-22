import React from 'react';
import Layout from '@/components/Layout';
import { Grid, Card, CardContent, Typography, TextField, Button } from '@mui/material';
import { useState } from 'react';
import Timer from '@/components/Timer';
import TopicCard from '@/components/TopicCard';


const randomTopics = [
    {
        "image": null,
        "id": "f9423c40-eff7-46b0-b3c7-a874a66a57e6",
        "categories": [
            "fe7ae450-50cb-4ee5-9fb7-5a84e3ae0e9d"
        ],
        "created_time": "2024-01-18T01:54:48.416855",
        "name": "The History and Impact of Social Media",
        "description": "Trace the evolution of social media platforms and their influence on society.",
        "level": null,
        "updated_time": "2024-01-18T01:54:48.416855"
    },
    {
        "image": null,
        "id": "f2f80d21-fa8c-463b-a836-008ccfc57073",
        "categories": [
            "5267aa2a-3a3f-4767-a4fb-667de87e4997"
        ],
        "created_time": "2024-01-18T01:54:48.331925",
        "name": "Cultural Diversity and Inclusion in the Workplace",
        "description": "Highlight the benefits of diversity and strategies for creating inclusive work environments.",
        "level": null,
        "updated_time": "2024-01-18T01:54:48.331925"
    },
    {
        "image": null,
        "id": "e9bce290-6f55-4ba1-ba25-ef9b945b1464",
        "categories": [
            "3a75552c-68cd-44ac-afd2-699c430bd970"
        ],
        "created_time": "2024-01-18T01:54:47.569506",
        "name": "The Psychology of Decision-Making",
        "description": "Delve into the cognitive processes that drive our choices and decisions.",
        "level": null,
        "updated_time": "2024-01-18T01:54:47.569506"
    }
]



export default function HomePage() {

    const [selectedTopic, setSelectedTopic] = useState(null); // [topicId, setTopicId

    const handleCustomTopicSubmit = () => {
        // Add your code to handle the submitted topic here
        setSelectedTopic('own');
    };

    const handleSpecificTopicSubmit = (specificTopic) => {
        // Add your code to handle the submitted topic here
        console.log('Submitted Topic:', specificTopic);
        setSelectedTopic(specificTopic);
    }


    const [userTopic, setUserTopic] = useState('');
    return <div>
        <Layout>
            <h1>Choose a Topic.</h1>
            <div>
                <Grid container spacing={2}>
                    {randomTopics.map((topic, index) => (
                        <TopicCard topic={topic} selectedTopic={selectedTopic} index={index}  handleSpecificTopicSubmit={handleSpecificTopicSubmit}/>
                    ))}


                    <Grid item xs={12} sm={6} md={6} lg={6} key={'own'}>
                        <Card
                            sx={{
                                ...(selectedTopic === 'own' ? {
                                    border: '2px solid #3f51b5',
                                } : {}),

                            }}
                            onClick={handleCustomTopicSubmit}

                        >
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Write down your own topic
                                </Typography>
                                <br /><Grid item xs={10}>
                                    <TextField
                                        label="Your Topic"
                                        variant="outlined"
                                        fullWidth
                                        value={userTopic}
                                        onChange={(e) => {
                                            setUserTopic(e.target.value)
                                        }}
                                    />
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
                <Button>Randomize</Button>

                <Grid container spacing={2}>
                    <Timer />
                </Grid>


            </div>
        </Layout>
    </div>;
}