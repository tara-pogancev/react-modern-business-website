import styled from "styled-components";

export const FooterContainer = styled.div`
    padding-top: 30px;
    padding-bottom: 15px;
    background: linear-gradient(#150b1f, #000);

`

export const FooterWrapper = styled.div`
    max-width: 900px;


`

export const FooterH2 = styled.h2`
    font-size: 1.3rem;
    color: white;
    font-weight: 500;
    margin-bottom: 30px;

`

export const FooterLink = styled.a`
    font-size: 0.9rem;
    text-decoration: none;
    color: white;
    display: flex;
    transition: all 0.3s;

    &:hover {
        color: #B05FFD;
    }

`