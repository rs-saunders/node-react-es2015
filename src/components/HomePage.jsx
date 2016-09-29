import React from 'react';

const LeageBoxRow = (props) => {

    const letter = String.fromCharCode(65 + +props.index);
    let isPlayerRow;
    const scoreBoxes = [];
    for(let i = 1; i <= props.boxCount; i++) {
        isPlayerRow = ((i-1) == props.index);
        const className = isPlayerRow ? 'score-box black' : 'score-box';
        scoreBoxes.push(<td key={i} className={className}></td>);
    }
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.tel1}</td>
            <td>{props.tel2}</td>
            <td>{props.email}</td>
            <td className="letter-box">{letter}</td>
            {scoreBoxes}
            <td className="bp-box"></td>
            <td className="total-box"></td>
        </tr>
    );
};

const LeagueBox = () => {
    return (
        <table className="league-box">
            <thead>
            <tr>
                <th className="name">Name</th>
                <th className="tel">Tel 1</th>
                <th className="tel">Tel 2</th>
                <th className="email">Email</th>
                <th></th>
                <th className="letter-box">A</th>
                <th className="letter-box">B</th>
                <th className="letter-box">C</th>
                <th className="letter-box">D</th>
                <th className="letter-box">E</th>
                <th className="letter-box">F</th>
                <th className="bp-box">BP</th>
                <th className="total-box">Total</th>
            </tr>
            </thead>
            <tbody>
                <LeageBoxRow key="0" index="0" boxCount="6" name="Richard Saunders" tel1="00000 000 000" tel2="" email="richard@sdevsolutions.com" />
                <LeageBoxRow key="1" index="1" boxCount="6" name="John Doe" tel1="00000 000 000" tel2="00000 000 000" email="xxxx@xxxxx.xxx" />
                <LeageBoxRow key="2" index="2" boxCount="6" name="Bruce Banner" tel1="00000 000 000" tel2="" email="xxxx@xxxxx.xxx" />
                <LeageBoxRow key="3" index="3" boxCount="6" name="Stephen Strange" tel1="00000 000 000" tel2="00000 000 000" email="xxxx@xxxxx.xxx" />
                <LeageBoxRow key="4" index="4" boxCount="6" name="Tony Stark" tel1="00000 000 000" tel2="" email="xxxx@xxxxx.xxx" />
                <LeageBoxRow key="5" index="5" boxCount="6" name="Bruice Wayne" tel1="00000 000 000" tel2="" email="" />
            </tbody>
        </table>
    );
};

const HomePage = () => {
    return (
        <div>
            <h1>Home</h1>
            <LeagueBox />
        </div>
    );
};

export default HomePage;
