import React from 'react';
import Layout from '@/components/Layout';
import { getUserProfile } from '@/api/utils';
import { List, ListItem, ListItemText } from '@mui/material';



export default function HomePage({ profile, records }) {

    const getDurationInSeconds = (start, end) => {
        const start_time = new Date(start);
        const end_time = new Date(end);
        return (end_time - start_time) / 1000;
    }
    return <div>
        <Layout>

            <h1>{profile.name}</h1>
            <List>
                {records.map((record) => (
                    <ListItem key={record.id}>
                        <ListItemText
                            primary={record.topic.name}
                            secondary={`Preparation Time ${record?.preparation_time??0}\n\
                            | Duration: ${getDurationInSeconds(record.start_ch_time, record.end_res_time)??0} seconds`}
                        />
                    </ListItem>
                ))}
            </List>


        </Layout>
    </div>;
}


export async function getStaticProps() {
    // Fetch data from an API
    const profileData = await getUserProfile();
    console.log("Profile Data", profileData?.["profile"] ?? {})
    console.log("name", profileData?.["profile"]["name"])
    return {
        props: {
            profile: profileData?.["profile"] ?? {},
            records: profileData?.["records"] ?? [],
        },
    };
}









