import React, { useState, useEffect, useRef } from "react";
import { Container, Typography, Paper, IconButton, Slider, Box } from "@mui/material";
import { VolumeUp, VolumeOff, MusicNote } from "@mui/icons-material";
import Counter from "./Components/Counter";

function App() {
  const [speechBubbles, setSpeechBubbles] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(30);
  const audioRef = useRef(null);

  const parrotPhrases = [
    "CARAMBA! 🌴",
    "OI AMIGO! 👋",
    "SAMBA TIME! 💃",
    "BRASIL! 🇧🇷",
    "QUE CALOR! 🌞",
    "FESTA! 🎉",
    "CARNIVAL! 🎭",
    "SQUAAAWK! 🦜",
    "OPA OPA! 🎺",
    "RIO LINDO! ✨",
    "VAMOS LÁ! 🚀",
    "TUDO BEM? 😄",
    "GOOOOOL! ⚽",
    "CACHAÇA! 🥃",
    "IPANEMA! 🏖️"
  ];

  useEffect(() => {
    // Luo audio elementti Samba-musiikille
    audioRef.current = new Audio();
    // Käytä ilmaista samba-musiikkia (voit vaihtaa URL:n)
    audioRef.current.src = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
    audioRef.current.loop = true;
    audioRef.current.volume = volume / 100;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => {
        console.log("Autoplay estetty, käyttäjän pitää klikata ensin");
      });
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue);
  };

  const handleParrotClick = (event, parrotId) => {
    event.stopPropagation();
    
    // Lisää squawk-animaatio
    const parrot = event.target;
    parrot.style.animation = 'squawk 1s ease-out';
    
    // Valitse satunnainen lause
    const phrase = parrotPhrases[Math.floor(Math.random() * parrotPhrases.length)];
    
    // Luo puhekupla papukaijan viereen
    const rect = parrot.getBoundingClientRect();
    const bubbleId = Date.now();
    
    setSpeechBubbles(prev => [...prev, {
      id: bubbleId,
      text: phrase,
      x: rect.left + rect.width / 2,
      y: rect.top - 20
    }]);
    
    // Poista puhekupla 2 sekunnin kuluttua
    setTimeout(() => {
      setSpeechBubbles(prev => prev.filter(bubble => bubble.id !== bubbleId));
    }, 2000);
    
    // Palauta animaatio alkuperäiseksi
    setTimeout(() => {
      parrot.style.animation = '';
    }, 1000);
  };

  return (
    <>
      {/* Siniset Rio-papukaijat taustalla */}
      <div className="parrot parrot-1" onClick={(e) => handleParrotClick(e, 1)}>🦜</div>
      <div className="parrot parrot-2" onClick={(e) => handleParrotClick(e, 2)}>🦜</div>
      <div className="parrot parrot-3" onClick={(e) => handleParrotClick(e, 3)}>🦜</div>
      <div className="parrot parrot-4" onClick={(e) => handleParrotClick(e, 4)}>🦜</div>
      <div className="parrot parrot-5" onClick={(e) => handleParrotClick(e, 5)}>🦜</div>
      
      {/* Puhekuplat */}
      {speechBubbles.map(bubble => (
        <div
          key={bubble.id}
          className="speech-bubble"
          style={{
            left: bubble.x + 'px',
            top: bubble.y + 'px',
            transform: 'translateX(-50%)'
          }}
        >
          {bubble.text}
        </div>
      ))}
      
      {/* Musiikkikontrollit */}
      <Paper
        sx={{
          position: 'fixed',
          top: 20,
          right: 20,
          p: 2,
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          borderRadius: 2,
          zIndex: 1000,
          minWidth: 200
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <MusicNote sx={{ color: '#FF006E' }} />
          <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
            SAMBA {isPlaying ? '🎵' : '🔇'}
          </Typography>
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
          <IconButton 
            onClick={toggleMusic}
            sx={{ 
              background: isPlaying 
                ? 'linear-gradient(45deg, #FF006E 30%, #FB5607 90%)' 
                : 'linear-gradient(45deg, #8338EC 30%, #3A86FF 90%)',
              color: 'white',
              '&:hover': {
                transform: 'scale(1.1)'
              }
            }}
          >
            {isPlaying ? <VolumeUp /> : <VolumeOff />}
          </IconButton>
          
          <Slider
            value={volume}
            onChange={handleVolumeChange}
            size="small"
            sx={{
              color: '#FF006E',
              '& .MuiSlider-thumb': {
                backgroundColor: '#FFBE0B',
              }
            }}
          />
        </Box>
      </Paper>
      
      <Container maxWidth="sm" sx={{ textAlign: "center", mt: 8 }}>
        <Paper 
          elevation={12}
          sx={{ 
            p: 4, 
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderRadius: 4,
            border: '3px solid',
            borderImage: 'linear-gradient(45deg, #FF006E, #FB5607, #FFBE0B, #8338EC, #3A86FF) 1',
            animation: 'samba 2s ease-in-out infinite'
          }}
        >
          <Typography 
            variant="h2" 
            gutterBottom
            sx={{
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #FF006E, #FB5607, #FFBE0B, #8338EC)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
              mb: 3
            }}
          >
            🎭 Rio Counter 🎉
          </Typography>
          <Counter />
        </Paper>
      </Container>
    </>
  );
}

export default App;
