import React, { useState, useEffect } from "react";
import { Box, Button, Typography, Stack, Chip } from "@mui/material";

function Counter() {
  const [count, setCount] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (count > 0 && count % 10 === 0) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  }, [count]);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <Box sx={{ mt: 2, position: 'relative' }}>
      {showConfetti && (
        <>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="confetti"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </>
      )}
      
      <Box sx={{ mb: 3 }}>
        <Typography 
          variant="h1" 
          sx={{
            fontWeight: 'bold',
            color: '#2C3E50',
            textShadow: '3px 3px 6px rgba(0,0,0,0.2)',
            animation: count !== 0 ? 'pulse 0.5s' : 'none'
          }}
        >
          {count}
        </Typography>
        {count > 0 && count % 10 === 0 && (
          <Chip 
            label="🎊 CARNAVAL! 🎊" 
            color="warning"
            sx={{ 
              mt: 1,
              fontSize: '1.2rem',
              animation: 'samba 0.5s ease-in-out infinite'
            }}
          />
        )}
      </Box>
      
      <Stack direction="row" spacing={2} justifyContent="center">
        <Button
          variant="contained"
          size="large"
          onClick={handleDecrease}
          sx={{
            background: 'linear-gradient(45deg, #FF006E 30%, #FB5607 90%)',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            px: 3,
            transition: 'all 0.3s',
            '&:hover': {
              background: 'linear-gradient(45deg, #FB5607 30%, #FF006E 90%)',
              transform: 'scale(1.1) rotate(-5deg)',
              boxShadow: '0 6px 20px rgba(255,0,110,0.4)'
            }
          }}
        >
          ⬇️ MENOS
        </Button>
        
        <Button
          variant="contained"
          size="large"
          onClick={handleIncrease}
          sx={{
            background: 'linear-gradient(45deg, #FFBE0B 30%, #8338EC 90%)',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            px: 3,
            transition: 'all 0.3s',
            '&:hover': {
              background: 'linear-gradient(45deg, #8338EC 30%, #FFBE0B 90%)',
              transform: 'scale(1.1) rotate(5deg)',
              boxShadow: '0 6px 20px rgba(131,56,236,0.4)'
            }
          }}
        >
          ⬆️ MAIS
        </Button>
        
        <Button
          variant="contained"
          size="large"
          onClick={handleReset}
          sx={{
            background: 'linear-gradient(45deg, #3A86FF 30%, #06FFB4 90%)',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            px: 3,
            transition: 'all 0.3s',
            '&:hover': {
              background: 'linear-gradient(45deg, #06FFB4 30%, #3A86FF 90%)',
              transform: 'scale(1.1) rotate(360deg)',
              boxShadow: '0 6px 20px rgba(58,134,255,0.4)'
            }
          }}
        >
          🔄 ZERAR
        </Button>
      </Stack>
    </Box>
  );
}

export default Counter;
