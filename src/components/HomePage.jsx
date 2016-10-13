import React, {PropTypes} from 'react';
import LeagueBox from './LeagueBox.jsx';

const player = [
    {
        name: 'Richard Saunders',
        tel1: '00000 000 000',
        tel2: '',
        email: 'richard@sdevsolutions.com'
    },
    {
        name: 'John Doe',
        tel1: '00000 000 000',
        tel2: '00000 000 000',
        email: 'xxxx@xxxxx.xxx'
    },
    {
        name: 'Bruce Banner',
        tel1: '00000 000 000',
        tel2: '',
        email: 'xxxx@xxxxx.xxx'
    },
    {
        name: 'Stephen Strange',
        tel1: '00000 000 000',
        tel2: '',
        email: 'xxxx@xxxxx.xxx'
    },
    {
        name: 'Tony Stark',
        tel1: '00000 000 000',
        tel2: '00000 000 000',
        email: 'xxxx@xxxxx.xxx'
    },
    {
        name: 'Bruice Wayne',
        tel1: '00000 000 000',
        tel2: '',
        email: ''
    },

];

const leagueDataMap = new Map();
leagueDataMap.set(player[0], new Map([[player[1], 7], [player[2], 6], [player[3], null], [player[4], null], [player[5], null], ['bp', null], ['total', null]]));
leagueDataMap.set(player[1], new Map([[player[0], 1], [player[2], null], [player[3], null], [player[4], null], [player[5], null], ['bp', null], ['total', null]]));
leagueDataMap.set(player[2], new Map([[player[0], 2], [player[1], null], [player[3], null], [player[4], null], [player[5], null], ['bp', null], ['total', null]]));
leagueDataMap.set(player[3], new Map([[player[0], null], [player[1], null], [player[2], null], [player[4], null], [player[5], null], ['bp', null], ['total', null]]));
leagueDataMap.set(player[4], new Map([[player[0], null], [player[1], null], [player[2], null], [player[3], null], [player[5], null], ['bp', null], ['total', null]]));
leagueDataMap.set(player[5], new Map([[player[0], null], [player[1], null], [player[2], null], [player[3], null], [player[4], null], ['bp', null], ['total', null]]));

const HomePage = () => {
    return (
        <div>
            <h1>Home</h1>
            <LeagueBox leagueData={leagueDataMap} />
        </div>
    );
};

export default HomePage;
