import React, { useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import {
  Box,
  Container,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  CircularProgress,
  Paper,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useTheme } from '@mui/material/styles';

function Chatbot() {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Witaj! Jak mogę Ci pomóc?' },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const theme = useTheme();

  const handleSend = async () => {
    if (!input.trim()) return;
    if (!apiKey) {
      alert('Proszę wprowadzić klucz API OpenAI.');
      return;
    }

    const isValidApiKey = (key) => /^[\x20-\x7E]*$/.test(key);
    if (!isValidApiKey(apiKey)) {
      alert('Klucz API zawiera nieprawidłowe znaki.');
      return;
    }

    const newMessages = [
      ...messages,
      { sender: 'user', text: input },
    ];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4',
          messages: newMessages.map((msg) => ({
            role: msg.sender === 'user' ? 'user' : 'assistant',
            content: msg.text,
          })),
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey.trim()}`,
          },
        }
      );

      const botReply = response.data.choices[0].message.content;
      setMessages([
        ...newMessages,
        { sender: 'bot', text: botReply },
      ]);
    } catch (error) {
      console.error('Błąd:', error);
      setMessages([
        ...newMessages,
        { sender: 'bot', text: 'Przepraszam, wystąpił błąd.' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxWidth="md" sx={{ mb: 4, mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        ChatGPT
      </Typography>
      <Box sx={{ mb: 2 }}>
        <TextField
          label="Wprowadź swój OpenAI API Key"
          variant="outlined"
          fullWidth
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value.trim())}
        />
      </Box>
      <Paper elevation={3} sx={{ p: 2, mb: 2, maxHeight: '60vh', overflowY: 'auto' }}>
        {messages.map((msg, idx) => (
          <Box
            key={idx}
            sx={{
              display: 'flex',
              mb: 1,
              justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
            }}
          >
            <Box
              sx={{
                bgcolor: msg.sender === 'user' ? theme.palette.primary.main : theme.palette.grey[300],
                color: msg.sender === 'user' ? '#fff' : '#000',
                p: 1.5,
                borderRadius: 2,
                maxWidth: '80%',
              }}
            >
              {msg.sender === 'bot' ? (
                <ReactMarkdown>{msg.text}</ReactMarkdown>
              ) : (
                <Typography>{msg.text}</Typography>
              )}
            </Box>
          </Box>
        ))}
        {isLoading && (
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 1 }}>
            <Box
              sx={{
                bgcolor: theme.palette.grey[300],
                color: '#000',
                p: 1.5,
                borderRadius: 2,
                maxWidth: '80%',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <CircularProgress size={20} sx={{ mr: 1 }} />
              <Typography>Piszę odpowiedź...</Typography>
            </Box>
          </Box>
        )}
      </Paper>
      <Box component="form" onSubmit={(e) => { e.preventDefault(); handleSend(); }}>
        <TextField
          label="Napisz wiadomość..."
          variant="outlined"
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton color="primary" onClick={handleSend}>
                  <SendIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Container>
  );
}

export default Chatbot;
