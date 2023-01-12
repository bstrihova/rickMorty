import React, { useEffect, useState, Fragment } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Typography, Alert, CircularProgress } from '@mui/material';
import CharacterDetailCard from '../components/character-detail-card';

function Character({ loggedIn }) {
    let { characterId } = useParams();

    const [character, setCharacter] = useState(new Object());
    const [loadingCharacter, setLoadingCharacter] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoadingCharacter(true);
        try {
            const response = await fetch(
                `https://rickandmortyapi.com/api/character/${characterId}`
            );
            const data = await response.json();
            if (data.error) {
                setError(data.error);
                return;
            }
            if (data) {
                setCharacter(data);
                return;
            }
        } catch (error) {
            setError(error);
        } finally {
            setLoadingCharacter(false);
        }
    };

    if (!loggedIn) {
        return <Navigate to="/" replace />;
    }

    if (loadingCharacter) return <CircularProgress />;

    return (
        <Fragment>
            <Typography variant="body1" sx={{ mb: 4 }} as={Link} to="/">
                ← Return to all characters
            </Typography>
            {error && <Alert severity="error">{error}</Alert>}
            {character.hasOwnProperty('name') && (
                <CharacterDetailCard character={character} />
            )}
        </Fragment>
    );
}

export default Character;
