import React from 'react'
import {HomeSection,HomeDetails,HomeIntro,HomeGreet,HomeGreet2,HomeGreet3,HomeGreetH4,HomeGreetP,HomeImage} from './HomeElements'
import me from '../../images/portfolio-art.png';

function Home() {
    return (
        <div>
            <HomeSection>
                <HomeDetails>
                    <HomeIntro>
                        <HomeGreet>HELLO,</HomeGreet>
                        <HomeGreet2>I am</HomeGreet2>
                        <HomeGreet3>
                            <HomeGreetH4>Ayebare Cynthia.</HomeGreetH4>
                            <HomeGreetP>a front-end developer</HomeGreetP>
                        </HomeGreet3>
                    </HomeIntro>
                    <HomeImage src = {me} />
                </HomeDetails>
            </HomeSection>
        </div>
    )
}

export default Home
