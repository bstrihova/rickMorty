import React from 'react';
import { TextField, InputAdornment, Box, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function CharacterFilters({
    genderList,
    genderFilter,
    setGenderFilter,
    nameFilter,
    setNameFilter,
    setPageNumber,
}) {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{ gap: 2 }}
            flexWrap="wrap"
        >
            <TextField
                value={nameFilter}
                label="Search by name"
                placeholder="Rick"
                onChange={(e) => {
                    setNameFilter(e.target.value);
                    setPageNumber(1);
                }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
            <TextField
                value={genderFilter}
                select
                label="Gender"
                onChange={(e) => {
                    setGenderFilter(e.target.value);
                    setPageNumber(1);
                }}
                sx={{ minWidth: 150 }}
            >
                <MenuItem value="">All</MenuItem>
                {genderList.map((g, i) => (
                    <MenuItem key={i} value={g}>
                        {g}
                    </MenuItem>
                ))}
            </TextField>
        </Box>
    );
}

export default CharacterFilters;
