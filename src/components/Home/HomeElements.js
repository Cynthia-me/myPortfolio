import styled from 'styled-components'

export const HomeSection = styled.div`
    width: 100%;
    max-width: 100%;
    @media screen and (max-width:600px){
        padding: 0.3rem;
    }
`
export const HomeDetails = styled.div`
    display:flex;
    justify-content: space-around;
    align-items: center;
    @media screen and (max-width:600px){
        display: flex;
        /* flex-direction:column; */
    }
`
export const HomeIntro = styled.div`
   @media screen and (max-width:600px){
    line-height:3rem;
    margin: 2rem auto;
   }
`


export const HomeGreet= styled.h1`
    font-size: 5rem;
    @media screen and (max-width:600px){
        font-size: 3rem;
    }
`


export const HomeGreet2= styled.p`
    font-size: 3rem;
    @media screen and (max-width:600px){
        font-size: 2rem; 
    }
`

  


export const HomeGreet3= styled.div`
  /* margin-left: 3rem; */
  line-height: 4rem;
  @media screen and (max-width:600px){
      line-height:2.6rem;
    }
`


export const HomeGreetH4 = styled.h4`
   font-size: 2rem;
   @media screen and (max-width:600px){
      font-size:1.8rem;
    }
`


export const HomeGreetP = styled.p`
   color: #feab9a;
   font-size: 1.8rem;
   @media screen and (max-width:600px){
      font-size:1.5rem;
    }
`

export const HomeImage = styled.img`
   
   @media screen and (max-width: 600px){
       width: 45%;
   }
`