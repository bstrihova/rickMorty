import React from 'react';
import { Typography, Box } from '@mui/material';

function CharacterDetailCard({ character }) {
    return (
        <Box
            display="flex"
            width="80%"
            sx={{ gap: 2 }}
            flexWrap="wrap"
            alignItems="center"
            justifyContent="center"
        >
            <img src={character.image} />
            <Box display="flex" flexDirection="column" sx={{ gap: 2 }}>
                <Typography variant="h3">{character.name}</Typography>
                <Typography variant="body1">
                    Gender: {character.gender} <br />
                    Location:{' '}
                    {character.location ? character.location.name : undefined}
                    <br />
                    Origin:{' '}
                    {character.location
                        ? character.location.name
                        : undefined}{' '}
                    <br />
                    Species: {character.species} <br />
                    Status: {character.status} <br />
                    Starred in{' '}
                    {character.episode
                        ? character.episode.length
                        : undefined}{' '}
                    episodes
                </Typography>
            </Box>
        </Box>
    );
}

export default CharacterDetailCard;
