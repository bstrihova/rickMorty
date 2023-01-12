import React, { useEffect, useState, Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './containers/Layout';
import Home from './containers/Home';
import Character from './containers/Character';

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [pageLoaded, setPageLoaded] = useState(false);

    useEffect(() => {
        setLoggedIn(localStorage.hasOwnProperty('token-info'));
        setPageLoaded(true);
    }, []);

    return (
        <Router>
            <Layout loggedIn={loggedIn} setLoggedIn={setLoggedIn}>
                {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Routes>
                    {pageLoaded && (
                        <Fragment>
                            <Route
                                exact
                                path="/character/:characterId"
                                element={<Character loggedIn={loggedIn} />}
                            />
                            <Route
                                path="/"
                                element={
                                    <Home
                                        setLoggedIn={setLoggedIn}
                                        loggedIn={loggedIn}
                                    />
                                }
                            />
                            <Route
                                path="*"
                                element={<p>There's nothing here: 404!</p>}
                            />
                        </Fragment>
                    )}
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
