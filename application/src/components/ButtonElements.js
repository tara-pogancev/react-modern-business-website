import styled from "styled-components"
import {Link as LinkS} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom'

export const Button = styled(LinkS)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#B05FFD' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    font-weight: 600;

    &:hover {
        background: ${({primary}) => (primary ? '#fff' : '#B05FFD')};
        color: ${({dark}) => (dark ? '#010606' : '#fff')};
    }

`

export const ButtonR = styled(LinkR)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#B05FFD' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    font-weight: 600;

    &:hover {
        background: ${({primary}) => (primary ? '#fff' : '#B05FFD')};
        color: ${({dark}) => (dark ? '#010606' : '#fff')};
    }

`

export const ButtonBasic = styled(LinkS)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#B05FFD' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    font-weight: 600;

    &:hover {
        background: ${({primary}) => (primary ? '#fff' : '#B05FFD')};
        color: ${({dark}) => (dark ? '#010606' : '#fff')};
    }

`

export const ButtonBasicInv = styled(LinkS)`
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#B05FFD' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    font-weight: 600;

    &:hover {
        background: #000;
        color: #fff;
    }

`