import React from 'react';
import './App.scss';
import {AppStore} from "./store";
import {Teams} from "./components/Teams";
import {Statistics} from "./components/Statistics";

function App() {
    return (
        <AppStore>
            <main className="PremierLeague">
                <Teams />
                <Statistics />
            </main>
        </AppStore>
    );
}

export default App;
