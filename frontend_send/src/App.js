import React, { useState, useEffect, useRef } from 'react';
import { Container, Paper, TextField, List, ListItem, ListItemText, Typography, Drawer, IconButton, AppBar, Toolbar } from '@mui/material';
import { FaBars, FaTimes } from 'react-icons/fa';
import { TbEdit } from "react-icons/tb";
import Prodify from '../src/prodify.png';
import { FaArrowUp } from "react-icons/fa6";
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [currentChatIndex, setCurrentChatIndex] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showWatermark, setShowWatermark] = useState(true);

  const inputRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSend = () => {
    if (input.trim()) {
      const newMessage = { text: input, sender: 'user' };
      const updatedMessages = [...messages, newMessage];
      setMessages(updatedMessages);
      setInput('');
      setShowWatermark(false);

      // Simulate a bot response (replace with actual API call)
      setTimeout(() => {
        const botMessage = { text: 'This is a response from the bot.', sender: 'bot' };
        const updatedMessagesWithBot = [...updatedMessages, botMessage];
        setMessages(updatedMessagesWithBot);

        if (currentChatIndex === null) {
          setChatHistory([...chatHistory, updatedMessagesWithBot]);
          setCurrentChatIndex(chatHistory.length);
        } else {
          const updatedChatHistory = [...chatHistory];
          updatedChatHistory[currentChatIndex] = updatedMessagesWithBot;
          setChatHistory(updatedChatHistory);
        }
      }, 1000);
    }
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleChatSelect = (index) => {
    setCurrentChatIndex(index);
    setMessages(chatHistory[index]);
    setShowWatermark(false);
    if (isMobile) {
      setDrawerOpen(false);
    }
  };

  const handleNewChat = () => {
    setMessages([]);
    setCurrentChatIndex(null);
    setShowWatermark(true);
    if (isMobile) {
      setDrawerOpen(false);
    }
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };


const handleEditClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    handleNewChat(); // Call handleNewChat to open a new chat
  };

  return (
    <div className="app-container">
      <AppBar position="fixed" className="app-bar">
        <Toolbar className="toolbar-head">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            className="menu-button"
          >
            <FaBars />
          </IconButton>
          <Typography variant="h6" className="app-title">
            ProdifyGPT
          </Typography>
          <IconButton color="inherit" onClick={handleEditClick}>
            <TbEdit style={{ width: '23px', height: '23px' }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant={isMobile ? 'temporary' : 'permanent'} open={isMobile ? drawerOpen : true} onClose={toggleDrawer(false)} className="drawer">
        <div className="drawer-header">
          <Typography variant="h6">Chat History</Typography>
          {isMobile && (
            <IconButton onClick={toggleDrawer(false)} className="cancel-button">
              <FaTimes />
            </IconButton>
          )}
        </div>
        <List className="history-list">
          <ListItem button onClick={handleNewChat}>
            <img width={"40px"} src={Prodify} alt="Prodify logo" />
            <ListItemText primary="New Chat" />
          </ListItem>
          {chatHistory.map((chat, index) => (
            <ListItem button key={index} onClick={() => handleChatSelect(index)}>
              <ListItemText primary={`Chat ${index + 1}`} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Container className="chat-container">
        <Paper className="chat-box">
          <Toolbar /> {/* Spacer for AppBar */}
          {showWatermark && (
            <div className="watermark">
              <Typography>
                <center>
                  <img width={"100px"} src={Prodify} className='Watermarklogo' />
                  <p>How can I assist you today?</p>
                </center>
              </Typography>
            </div>
          )}
          <List className="chat-list">
            {messages.map((message, index) => (
              <ListItem key={index} className={message.sender === 'user' ? 'user-message' : 'bot-message'}>
                <ListItemText primary={message.text} />
              </ListItem>
            ))}
          </List>
          <div className="input-container">
            <TextField
              inputRef={inputRef}
              value={input}
              onChange={handleInputChange}
              variant="outlined"
              placeholder="Type a message..."
              fullWidth
              multiline
              maxRows={4}
              className="text-field"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    border: 'none',
                  },
                  '&.Mui-focused fieldset': {
                    border: 'none',
                  },
                },
                '& .MuiInputBase-input': {
                  padding: 0,
                  margin: 0,
                  height: '20px',
                  lineHeight: '20px',
                },
              }}
            />
            <IconButton onClick={handleSend} className="send-button">
              <FaArrowUp />
            </IconButton>
          </div>
        </Paper>
      </Container>
    </div>
  );
}

export default App;
