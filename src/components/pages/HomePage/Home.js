import React from 'react'
import HomeSection from '../../HomeSection'
import {homeObjOne} from './Data'

function Home() {
    return (
        <div>
            <HomeSection {...homeObjOne}/>
        </div>
    )
}

export default Home
