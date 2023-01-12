import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

export default function CharacterPreviewCard({ character, loading = true }) {
    return (
        <Card
            sx={{
                maxWidth: 200,
                ':hover': {
                    boxShadow: 4,
                },
            }}
        >
            {loading ? (
                <Skeleton variant="rectangular" height={140} width={200} />
            ) : (
                <CardMedia
                    image={character.image}
                    title={character.name}
                    sx={{ height: 140, width: 200 }}
                />
            )}
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {loading ? <Skeleton /> : character.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {loading ? (
                        <Skeleton />
                    ) : (
                        `Gender: ${character.gender.toLowerCase()}`
                    )}
                </Typography>
            </CardContent>
        </Card>
    );
}
