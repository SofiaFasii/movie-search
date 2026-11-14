import styled from "styled-components"

export const Wrapper = styled.div`
    display: flex;
    padding: 20px;
    gap: 15px;
    font-weight: 500;
    font-size: 18px;
    box-shadow: 0px -11px 6px 15px rgba(0,0,0,0.25);
    a{
        color: #000;
        text-decoration: none;
    }
    a:hover{
        color: red;
        text-decoration: underline;
    }
    a.active{
        color: red;
    }
`