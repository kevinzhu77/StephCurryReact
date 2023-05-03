import React from "react"
import warriorsLogo from "../images/goldenStateWarriors.jpg"

export default function Header() {
    return (
        <header className = "header">
            <img src = {warriorsLogo} 
                alt = "WarriorsLogo"
                className = "header-logo" />
            <h1 className = "header-heading"> Stephen Curry </h1>
            <a
                className = "header-stats-link"
                href = "https://www.statmuse.com/nba/player/stephen-curry-787"
            >
                <button> 2023 Statistics </button>
            </a>

            <a
                className = "header-stats-link"
                href = "https://www.basketball-reference.com/players/c/curryst01/gamelog-playoffs/"
            >
                <button> Playoff Game Log </button>
            </a>

            <a
                className = "header-github-link"
                href = "https://github.com/kevinzhu77"
            >
                <button> Github </button>
            </a>
        </header>
    )
}
