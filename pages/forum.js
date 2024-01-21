import React from 'react';
import { Form, Button, List, } from 'semantic-ui-react';


import { useEffect, useState } from 'react';
import CreateFormForm from '@/components/createForm';

import Layout from '@/components/Layout';
import { getPosts, getForum, respondThread, createForum } from '@/api/utils';
// import {FormForCreate} from '@/components/createForm';


export default function Forum() {



    const [forumsData, setForumsData] = useState([]);
    const [individualPost, setIndividualPost] = useState(null);
    const [parent_id, setParent_id] = useState(0);




    useEffect(() => {
        getAllPosts();
    }, []);


    const getAllPosts = async () => {
        const forumsData = await getPosts();
        setForumsData(forumsData);
    }

    const ForumList = () => {
        return (

            <div>

                <div className="ui list">

                    <List.Item onClick={() => {
                        // loadIndividualPost(null);
                        setIndividualPost(null);
                        setParent_id(0);
                    }}>
                        <List.Content>
                            <List.Header>Select Root</List.Header>
                            <List.Description>Create a root thread</List.Description>
                        </List.Content>
                    </List.Item>
                    {forumsData.map((forum, index) => (

                        <List.Item key={index} className="hoverable-item" onClick={() => {
                            loadIndividualPost(forum.thread_id);
                            setParent_id(forum.thread_id);
                        }}>
                            <List.Content>
                                <List.Header>{forum.body}</List.Header>
                                <List.Description>{forum.created_time}</List.Description>
                            </List.Content>
                        </List.Item>
                    ))}
                </div>
            </div>
        );
    };

    const loadIndividualPost = async (id) => {
        const individualPost = await getForum(id);
        // setIndividualPost(individualPost);
        console.log("individualPost", individualPost);
        setIndividualPost({ ...individualPost });


    }



    const showIndividualForum = (postData) => {
        const [individualPost, comments] = [postData["forum"], postData["comments"]];

        if(individualPost == null){
            return <div></div>;
        }

        return (
            <div className="ui list"


            >
                <div className="item"


                >
                    <div className="content">
                        <div className="header">{individualPost?.title??""}</div>
                        <div className="description">
                            {individualPost?.body??""}

                            <br />
                            Created by User ID {individualPost.user_id} on {individualPost.created_time}
                        </div>
                    </div>
                </div>

                {
                    comments.map((comment, index) => (
                        <div className="item" key={index}
                            onClick={() => {
                                const post = comment?.["forum"]
                                console.log("subs elected", post.thread_id)
                                loadIndividualPost(post.thread_id);
                                setParent_id(post.thread_id);
                            }}
                        >
                            {showIndividualForum(comment)}
                        </div>
                    ))
                }

                {/* Buttons for creating comment */}


            </div>
        )
    }


    return (
        <Layout>
            <h1>Forum</h1>
            {individualPost && showIndividualForum(individualPost)}
            <CreateFormForm getAllPosts={getAllPosts} parent_id={parent_id} loadIndividualPost={loadIndividualPost} />

            <h5>Threads</h5>
            <ForumList />

        </Layout>
    )
}




