import React from 'react';
import SignIn from './SignIn';
import CharactersList from './CharactersList';

function Home({ setLoggedIn, loggedIn }) {
    if (loggedIn) return <CharactersList />;
    return <SignIn setLoggedIn={setLoggedIn} loggedIn={loggedIn} />;
}

export default Home;
