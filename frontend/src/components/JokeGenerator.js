import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
  Fade,
  useTheme
} from '@mui/material';
import {
  AutoAwesome as SparkleIcon,
  Refresh as RefreshIcon,
  Code as CodeIcon,
  Movie as MovieIcon,
  VideoCall as VideoCallIcon,
  Rocket as RocketIcon
} from '@mui/icons-material';

// Collection of jokes for different audiences
const jokes = {
  developer: [
    "Why do programmers prefer dark mode? Because light attracts bugs!",
    "A SQL query walks into a bar, walks up to two tables and asks, 'Can I join you?'",
    "Why was the JavaScript developer sad? Because he didn't know how to 'null' his feelings.",
    "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
    "Why do Java developers wear glasses? Because they don't C#!",
    "What's a programmer's favorite hangout spot? The Foo Bar.",
    "Why did the developer go broke? Because he used up all his cache.",
    "What's the object-oriented way to become wealthy? Inheritance.",
    "Why did the functions stop calling each other? They had too many arguments.",
    "What do you call a programmer from Finland? Nerdic."
  ],
  contentCreator: [
    "Why don't content creators ever get lost? They always follow the engagement.",
    "What's a YouTuber's favorite exercise? The algorithm shuffle.",
    "How many influencers does it take to change a light bulb? One to change it and ten to make 'How I Changed a Light Bulb and It Changed My Life' videos.",
    "Why was the TikToker always calm during emergencies? They were used to working with short deadlines.",
    "What's an influencer's favorite game? Tag, you're sponsored!",
    "Why did the streamer cross the road? To get better Wi-Fi.",
    "What do you call a Twitch streamer who's also a chef? A kitchen stream dream team.",
    "Why don't content creators ever get bored? They're always entertaining themselves.",
    "How do content creators stay cool? They have lots of fans.",
    "What's a podcaster's favorite dessert? Mic-roons!"
  ],
  editor: [
    "Why don't video editors go to the beach? They're afraid of the cuts.",
    "How many editors does it take to change a light bulb? Just one, but they'll try 37 different bulbs before making a final decision.",
    "What's an editor's favorite game? Cut and paste.",
    "Why was the editor always calm? Because they had complete control.",
    "What do you call an editor with no projects? Freelance.",
    "Why did the editor get kicked out of the library? Too many unnecessary cuts.",
    "What's an editor's favorite exercise? The jump cut.",
    "Why don't editors ever lose arguments? They always have the final cut.",
    "How do editors communicate? They send each other clips.",
    "What's an editor's favorite movie? The Director's Cut."
  ]
};

const JokeGenerator = () => {
  const theme = useTheme();
  const [jokeType, setJokeType] = useState('developer');
  const [currentJoke, setCurrentJoke] = useState('');
  const [fadeIn, setFadeIn] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const containerRef = useRef(null);
  const [particles, setParticles] = useState([]);

  // Create particles for the energy effect
  useEffect(() => {
    if (isGenerating) {
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: 50 + (Math.random() * 40 - 20),
        y: 50 + (Math.random() * 40 - 20),
        size: 2 + Math.random() * 4,
        speed: 0.5 + Math.random() * 2,
        color: Math.random() > 0.6
          ? theme.palette.primary.main
          : Math.random() > 0.5
            ? theme.palette.secondary.main
            : theme.palette.warning.main,
        angle: Math.random() * Math.PI * 2,
        opacity: 0.7 + Math.random() * 0.3,
      }));
      setParticles(newParticles);

      // Clear particles after animation
      const timer = setTimeout(() => {
        setParticles([]);
        setIsGenerating(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [isGenerating, theme.palette]);



  const getRandomJoke = (type) => {
    const jokeArray = jokes[type];
    const randomIndex = Math.floor(Math.random() * jokeArray.length);
    return jokeArray[randomIndex];
  };

  useEffect(() => {
    setCurrentJoke(getRandomJoke(jokeType));
  }, [jokeType]);

  const handleJokeTypeChange = (type) => {
    if (type !== jokeType) {
      setFadeIn(false);
      setTimeout(() => {
        setJokeType(type);
        setFadeIn(true);
      }, 300);
    }
  };

  const handleRefreshJoke = () => {
    setFadeIn(false);
    setIsGenerating(true);
    setTimeout(() => {
      setCurrentJoke(getRandomJoke(jokeType));
      setFadeIn(true);
    }, 300);
  };



  return (
    <Card
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        position: 'relative',
        overflow: 'visible',
        mb: 4,
        background: '#FFFFFF',
        border: '1px solid rgba(0, 0, 0, 0.12)',
        borderRadius: 0,
        transition: 'transform 0.3s ease',
        width: '100%',
        maxWidth: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* Floating particles */}
      {particles.map((particle) => (
        <Box
          key={particle.id}
          sx={{
            position: 'absolute',
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            borderRadius: '50%',
            top: `${particle.y}%`,
            left: `${particle.x}%`,
            opacity: particle.opacity,
            filter: 'blur(1px)',
            zIndex: 10,
            animation: `float-particle 1.5s forwards ease-out`,
            '@keyframes float-particle': {
              '0%': {
                transform: 'translateY(0) translateX(0)',
                opacity: particle.opacity
              },
              '100%': {
                transform: `translateY(${-50 - Math.random() * 50}px) translateX(${(Math.random() - 0.5) * 100}px)`,
                opacity: 0
              },
            },
          }}
        />
      ))}

      <CardContent sx={{
        p: { xs: 1.5, sm: 2, md: 3 },
        position: 'relative',
        zIndex: 1,
        width: '100%',
        boxSizing: 'border-box',
      }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            mb: { xs: 1, sm: 1.5, md: 2 },
            transform: 'translateZ(30px)',
            transformStyle: 'preserve-3d',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              mr: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <RocketIcon
              sx={{
                color: '#000000',
                fontSize: { xs: 20, sm: 22, md: 24 },
              }}
            />
          </Box>
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'monospace',
              fontWeight: 'bold',
              color: '#000000',
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.25rem' },
              textAlign: 'center',
            }}
          >
            Cosmic Joke Generator
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            gap: { xs: 0.5, sm: 0.75, md: 1 },
            mb: { xs: 1.5, sm: 2, md: 3 },
            flexWrap: 'wrap',
            transform: 'translateZ(20px)',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <JokeTypeChip
            label="For Developers"
            icon={<CodeIcon />}
            isActive={jokeType === 'developer'}
            onClick={() => handleJokeTypeChange('developer')}
          />
          <JokeTypeChip
            label="For Content Creators"
            icon={<VideoCallIcon />}
            isActive={jokeType === 'contentCreator'}
            onClick={() => handleJokeTypeChange('contentCreator')}
          />
          <JokeTypeChip
            label="For Editors"
            icon={<MovieIcon />}
            isActive={jokeType === 'editor'}
            onClick={() => handleJokeTypeChange('editor')}
          />
        </Box>

        <Fade in={fadeIn} timeout={500}>
          <Box
            sx={{
              minHeight: { xs: 100, sm: 110, md: 120 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: { xs: 1.5, sm: 2, md: 3 },
              border: '1px solid rgba(0, 0, 0, 0.12)',
              position: 'relative',
              overflow: 'hidden',
              width: '100%',
              boxSizing: 'border-box',
            }}
          >
            <Box sx={{ position: 'relative', zIndex: 1, width: '100%' }}>
              <Typography
                variant="body1"
                align="center"
                sx={{
                  fontFamily: 'monospace',
                  fontWeight: 400,
                  lineHeight: 1.6,
                  color: '#000000',
                  fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                  wordBreak: 'break-word',
                }}
              >
                {currentJoke}
              </Typography>
            </Box>
          </Box>
        </Fade>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: { xs: 1.5, sm: 2, md: 3 },
            transform: 'translateZ(30px)',
            width: '100%',
          }}
        >
          <Button
            variant="contained"
            color="primary"
            startIcon={<RefreshIcon />}
            onClick={handleRefreshJoke}
            sx={{
              py: { xs: 0.5, sm: 0.75, md: 1 },
              px: { xs: 1, sm: 1.5, md: 2 },
              borderRadius: 0,
              backgroundColor: '#1976d2',
              fontFamily: 'monospace',
              fontWeight: 400,
              transition: 'all 0.2s ease',
              fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem' },
              '&:hover': {
                backgroundColor: '#1565c0',
              },
            }}
          >
            Generate New Joke
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

// Custom Chip component with minimalist style
const JokeTypeChip = ({ label, icon, isActive, onClick }) => {
  return (
    <Chip
      icon={icon}
      label={label}
      onClick={onClick}
      color={isActive ? 'primary' : 'default'}
      variant={isActive ? 'filled' : 'outlined'}
      sx={{
        borderRadius: 0,
        py: { xs: 0.75, sm: 1, md: 1.5 },
        height: 'auto',
        border: '1px solid rgba(0, 0, 0, 0.12)',
        background: isActive ? '#000000' : 'transparent',
        transition: 'all 0.2s ease',
        margin: { xs: '2px', sm: '3px' },
        '& .MuiChip-label': {
          fontFamily: 'monospace',
          fontWeight: 400,
          px: { xs: 0.5, sm: 0.75, md: 1 },
          fontSize: { xs: '0.65rem', sm: '0.75rem', md: '0.85rem' },
          color: isActive ? '#FFFFFF' : '#000000',
          whiteSpace: 'normal',
          overflow: 'visible',
          lineHeight: 1.2,
        },
        '& .MuiChip-icon': {
          color: isActive ? '#FFFFFF' : '#000000',
          fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' },
          marginRight: { xs: 0.25, sm: 0.5 },
          marginLeft: { xs: 0.25, sm: 0.5 },
        },
        '&:hover': {
          background: isActive ? '#333333' : '#f5f5f5',
        },
      }}
    />
  );
};

export default JokeGenerator;
