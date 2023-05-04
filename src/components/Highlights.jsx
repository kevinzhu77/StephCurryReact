import React from "react"
import Plays from "./Plays"

export default function Highlights() {
    return (
        <div className = "highlights">
            <h1 className = "highlights-heading"> NBA Playoff Highlights </h1>
            <div className = "row">
                <div className = "highlights-column">
                    <Plays
                        link = "https://www.youtube.com/embed/Fa_lw05TppE?controls=0"
                        round = "NBA Finals"
			            game = "Game 5"
			            opponent = "Cleveland Cavaliers"
			            year = "2015"
                    />
                </div>
                <div className = "highlights-column">
                    <Plays
			            link = "https://www.youtube.com/embed/OF2eam-uz4o?controls=0"
			            round = "NBA First Round"
			            game = "Game 4"
			            opponent = "Cleveland Cavaliers"
			            year = "2016"
                    />
                </div>
                <div className = "highlights-column">
                    <Plays
			            link = "https://www.youtube.com/embed/4BcpgMtknnE?controls=0"
			            round = "NBA Finals"
			            game = "Game 5"
			            opponent = "Cleveland Cavaliers"
			            year = "2017"
		            />
                </div>
            </div>
            <br />
            <br />
            <br />
            <div className = "row">
                <div className = "highlights-column">
                    <Plays
                        link = "https://www.youtube.com/embed/DeUSwzw847M?controls=0"
                        round = "NBA Finals"
			            game = "Game 3"
			            opponent = "Toronto Raptors"
			            year = "2019"
                    />
                </div>
                <div className = "highlights-column">
                    <Plays
			            link = "https://www.youtube.com/embed/xlGCQ1uq5XE?controls=0"
			            round = "NBA Finals"
			            game = "Game 4"
			            opponent = "Boston Celtics"
			            year = "2022"
		            />
                </div>
                <div className = "highlights-column">
                    <Plays
			            link = "https://www.youtube.com/embed/5xMNioXrczs?controls=0"
			            round = "NBA First Round"
			            game = "Game 7"
			            opponent = "Sacramento Kings"
			            year = "2023"
                    />
                </div>
            </div>
        </div>
    )
}