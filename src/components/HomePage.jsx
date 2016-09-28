import React from 'react';

const HomePage = () => {
    return (
        <div>
            <h1>Home</h1>
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
                    <tr>
                        <td>Richard Saunders</td>
                        <td>00000 000 000</td>
                        <td></td>
                        <td>richard@sdevsolutions.com</td>
                        <td className="letter-box">A</td>
                        <td className="score-box black"></td>
                        <td className="score-box"></td>
                        <td className="score-box"></td>
                        <td className="score-box"></td>
                        <td className="score-box"></td>
                        <td className="score-box"></td>
                        <td className="bp-box"></td>
                        <td className="total-box"></td>
                    </tr>
                    <tr>
                        <td>John Doe</td>
                        <td>00000 000 000</td>
                        <td>00000 000 000</td>
                        <td>xxxx@xxxxx.xxx</td>
                        <td className="letter-box">B</td>
                        <td></td>
                        <td className="score-box black"></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="bp-box"></td>
                        <td className="total-box"></td>
                    </tr>
                    <tr>
                        <td>Bruce Banner</td>
                        <td>00000 000 000</td>
                        <td></td>
                        <td>xxxx@xxxxx.xxx</td>
                        <td className="letter-box">C</td>
                        <td></td>
                        <td></td>
                        <td className="score-box black"></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="bp-box"></td>
                        <td className="total-box"></td>
                    </tr>
                    <tr>
                        <td>Stephen Strange</td>
                        <td>00000 000 000</td>
                        <td>00000 000 000</td>
                        <td>xxxx@xxxxx.xxx</td>
                        <td className="letter-box">D</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="score-box black"></td>
                        <td></td>
                        <td></td>
                        <td className="bp-box"></td>
                        <td className="total-box"></td>
                    </tr>
                    <tr>
                        <td>Tony Stark</td>
                        <td>00000 000 000</td>
                        <td></td>
                        <td>xxxx@xxxxx.xxx</td>
                        <td className="letter-box">E</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="score-box black"></td>
                        <td></td>
                        <td className="bp-box"></td>
                        <td className="total-box"></td>
                    </tr>
                    <tr>
                        <td>Bruce Wayne</td>
                        <td>00000 000 000</td>
                        <td></td>
                        <td>xxxx@xxxxx.xxx</td>
                        <td className="letter-box">F</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td className="score-box black"></td>
                        <td className="bp-box"></td>
                        <td className="total-box"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default HomePage;
