import styled from "styled-components";

export const Hero = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #fff;
    padding-top: 277px;
    

    h1 {
        font-family: Merriweather;
        font-size: 64px;
        font-weight: 700;
        line-height: 80px;
        letter-spacing: 0em;
        text-align: center;
    }

    p {
        font-family: Lato;
        font-size: 24px;
        font-weight: 400;
        line-height: 32px;
        letter-spacing: -0.02em;
        text-align: center;
        max-width: 822px;
        margin: 0 auto;
    }

    .get__started-btn {
        background: inherit;
        margin-top: 30px;
        width:160px;
        height:54px;
        padding: 10px, 24px, 10px, 24px;
        border-radius: 8px;
        color: #fff;
        font-family: Merriweather;
        font-size: 20px;
        font-weight: 700;
        line-height: 34px;
        letter-spacing: 0px;

    }
`;

export const OpenDeals = styled.div`
    width: 100%;    
    height: 100vh;
    div {
        display: flex;
        flex-wrap: wrap;
    }   

    h1 {
        margin-top: 50px;
        color: rgba(178, 159, 126, 1);
        font-family: Merriweather;
        font-size: 28px;
        font-weight: 700;
        line-height: 34px;
        letter-spacing: 0px;
    }
`;
