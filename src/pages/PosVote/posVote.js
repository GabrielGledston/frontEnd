import React from "react";

import { Link, link } from 'react-router-dom'

import Header from "../../components/header";

function PosVote() {
    return(
        <div>
            <Header />
            <h1>Page pos-vote</h1>
            <Link to="/">
            <button>Add new vote</button>
            </Link>
        </div>
    )
}


export default PosVote