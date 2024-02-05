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

`

export const Li = styled.li `
    font-weight: 600;
    cursor: pointer;
    font-size: 28px;
    position: relative;

    a{
        color: #FFF;
    }

    &::after{
        content: "";
        height: 3px;
        width: ${(props => props.isActive ? "100%" : 0)};
        background-color: #189b20;
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        transition: width 0.5s ease-in-out;
    }

    &:hover::after{
        width: 100%;
    }

`

