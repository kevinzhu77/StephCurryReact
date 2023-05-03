import React from "react"
import curry from "../images/Curry.jpg"

export default function Achivements () {
    return (
        <div className = "achievements">
            <h1 className = "achivements-heading"> Notable Achievements </h1>
            <div className = "row">
                <div className = "achivements-column">
                    <ul className = "achivements-list"> 
                        <li> NBA 75th Anniversary Team </li>
                        <li> 4x NBA Champion: 2015, 2017, 2018, 2022 </li>
                        <li> 2x NBA MVP:  2015, 2016 </li>
                        <li> NBA Finals MVP: 2022 </li>
                        <li> NBA Western Conference Finals MVP: 2022 </li>
                        <li> NBA All-Star Game MVP: 2022 </li>
                        <li> 2x NBA Scoring Leader: 2016, 2021 </li>
                        <li> 9x NBA All-Star: 2014 to 2019, 2021 to 2023 </li>
                    </ul>
                </div>
                <div className = "achivements-column">
                    <ul className = "achivements-list"> 
                    <li> 8x All-NBA Selection </li>
                        <ul className = "achivements-list"> 
                            <li> First Team All NBA: 2015, 2016, 2019, 2021 </li>
                            <li> Second Team All NBA: 2014, 2017, 2022 </li>
                            <li> Third Team All NBA: 2018 </li>
                        </ul>
                        <li> NBA Steals Leader: 2016 </li>
                        <li> 2x NBA Three-Point Contest Champion: 2015, 2021 </li>
                        <li> NBA Skills Challenge Champion: 2011 </li>
                        <li> FIBA World Cup Gold Medal: 2010, 2014 </li>
                    </ul>
                </div>
                <div className = "achivements-column">
                <img src = {curry} 
                alt = "curry"
                className = "curry" />
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}