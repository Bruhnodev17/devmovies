import styled from "styled-components"

export const Container = styled.div `
    z-index: 99;
    position: fixed;
    top: 0;
    display: flex;
    padding: 10px 50px;
    justify-content: space-between;
    align-items: center;

    img{
        width: 25%;
    }

`

export const Menu = styled.ul `

    display: flex;
    list-style: none;
    gap: 50px;
    color: #FFF;
    cursor: pointer;
    font-weight: 600;
    font-size: 22px;

    a{
        color: #FFF;
    }

`

export const Li = styled.li `


`

