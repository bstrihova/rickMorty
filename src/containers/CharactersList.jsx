import React, { useEffect, useMemo, useState } from 'react';
import CharacterPreviewCard from '../components/character-preview-card';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import { Typography, Box, Pagination, Alert } from '@mui/material';
import CharacterFilters from '../components/character-filters';

function CharactersList() {
    const [nameFilter, setNameFilter] = useState('');
    const [genderFilter, setGenderFilter] = useState('');
    const [pageNumber, setPageNumber] = useState(1);
    const [characters, setCharacters] = useState(new Array());
    const [charactersPageCount, setCharactersPageCount] = useState(0);
    const [loadingCharacters, setLoadingCharacters] = useState(false);
    const [error, setError] = useState(null);

    const genderList = ['female', 'male', 'genderless', 'unknown'];

    useEffect(() => {
        fetchData();
    }, [pageNumber, genderFilter, nameFilter]);

    const fetchData = async () => {
        setLoadingCharacters(true);
        try {
            const response = await fetch(
                `https://rickandmortyapi.com/api/character?page=${pageNumber}&name=${nameFilter}&gender=${genderFilter}`
            );
            const data = await response.json();
            if (data && data.info) {
                setCharacters(data.results);
                setCharactersPageCount(data.info.pages);
                return;
            }
            if (data.error) {
                setCharacters([]);
                setCharactersPageCount(10);
                return;
            }
        } catch (error) {
            setError(error);
        } finally {
            setLoadingCharacters(false);
        }
    };

    const content = useMemo(() => {
        if (characters.length > 0 || loadingCharacters)
            return characters.map((char) => (
                <Grid item as={Link} to={`/character/${char.id}`} key={char.id}>
                    <CharacterPreviewCard
                        character={char}
                        loading={loadingCharacters}
                    />
                </Grid>
            ));
        return 'No characters found. You can try changing the filter';
    }, [characters, loadingCharacters]);

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{ gap: 3 }}
        >
            {error && <Alert severity="error">{error}</Alert>}
            <Typography variant={'h3'}>Characters</Typography>
            <CharacterFilters
                genderList={genderList}
                genderFilter={genderFilter}
                setGenderFilter={setGenderFilter}
                nameFilter={nameFilter}
                setNameFilter={setNameFilter}
                setPageNumber={setPageNumber}
            />
            <Pagination
                count={charactersPageCount}
                page={pageNumber}
                onChange={(e, value) => setPageNumber(value)}
                disabled={characters.length === 0}
            />
            <Grid
                container
                sx={{ gap: 4 }}
                justifyContent="center"
                alignItems="flex-start"
            >
                {content}
            </Grid>
        </Box>
    );
}

export default CharactersList;
