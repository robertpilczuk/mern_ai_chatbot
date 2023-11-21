import { Avatar, Box, Button, Typography } from "@mui/material";
import React from "react";
import { useAuth } from "../context/AuthContext";
import { red } from "@mui/material/colors";
import ChatItem from "../components/chat/ChatItem";

const chatMessages = [
    { "role": "user", "content": "Hello!" },
    { "role": "assistant", "content": "Hi there! How can I assist you today?" },
    { "role": "user", "content": "I need help with programming." },
    { "role": "assistant", "content": "Sure, I'd be happy to help. What programming language are you working with?" },
    { "role": "user", "content": "I'm using Python." },
    { "role": "assistant", "content": "Great choice! What specific issue or question do you have about Python?" },
    { "role": "user", "content": "I'm having trouble understanding loops." },
    { "role": "assistant", "content": "No worries! Loops can be a bit tricky at first. What kind of loop are you struggling with - for, while, or something else?" },
    { "role": "user", "content": "Hello!" },
    { "role": "assistant", "content": "Hi there! How can I assist you today?" },
    { "role": "user", "content": "I need help with programming." },
    { "role": "assistant", "content": "Sure, I'd be happy to help. What programming language are you working with?" },
    { "role": "user", "content": "I'm using Python." },
    { "role": "assistant", "content": "Great choice! What specific issue or question do you have about Python?" },
    { "role": "user", "content": "I'm having trouble understanding loops." },
    { "role": "assistant", "content": "No worries! Loops can be a bit tricky at first. What kind of loop are you struggling with - for, while, or something else?" },
]


const Chat = () => {
    const auth = useAuth();

    return (<Box
        sx={{
            display: "flex",
            flex: 1,
            width: "100%",
            height: "100%",
            mt: 3,
            gap: 3,
        }}
    >
        <Box
            sx={{
                display: { md: "flex", xs: "none", sm: "none" },
                flex: 0.2,
                flexDirection: "column",
            }}>
            <Box
                sx={{
                    display: "flex",
                    width: "100%",
                    height: "60vh", 
                    bgcolor: "rgb(17,29,39)",
                    borderRadius: 5,
                    flexDirection: "column",
                    mx: 3,
                }}
            >
                <Avatar
                    sx={{
                        mx: "auto",
                        my: 2,
                        bgcolor: "white",
                        color: "black",
                        fontweight: 700,
                    }}
                >
                    {auth?.user?.name[0]}
                    {auth?.user?.name.split(" ")[1][0]}
                </Avatar>
                <Typography
                    sx={{
                        mx: "auto",
                        fontFamily: "work sans"
                    }}>
                    You are talking to a ChatBOT
                </Typography>
                <Typography
                    sx={{
                        mx: "auto",
                        fontFamily: "work sans",
                        my: 4,
                        p: 3
                    }}>
                    You can ask some questions related to Knowledge, Business, Advices, Education, etc. But avoid sharing personal information.
                </Typography>
                <Button sx={{
                    width: "200px",
                    my: "auto",
                    color: "white",
                    fontWeight: "700",
                    borderRadius: 3,
                    mx: "auto",
                    bgcolor: red[300],
                    ":hover": {
                        bgcolor: red.A400,
                    },
                }}
                >Clear Conversation</Button>
            </Box>
        </Box>
        <Box
            sx={{
                display: "flex",
                flex: { md: 0.8, xs: 1, sm: 1 },
                flexDirection: "column",
                px: 3,
            }}>
            <Typography
                sx={{
                    fontSize: "40px",
                    color: "white",
                    mb: 2,
                    mx: "auto",
                }}
            >Model - GPT 3.5 Turbo</Typography>
            <Box
                sx={{
                    width: "100%",
                    height: "60vh",
                    borderRadius: 3,
                    mx: "auto",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "scroll",
                    overflowX: "hidden",
                    overflowY: "hidden",
                    scrollBehavior: "smooth",
                }}
            >
                {chatMessages.map((chat, index) => (
                    <ChatItem content={chat.content} role={chat.role} key={index}/>
                ))}
            </Box>
        </Box>
    </Box>
    );
};

export default Chat;