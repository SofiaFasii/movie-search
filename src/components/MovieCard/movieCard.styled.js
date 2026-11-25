import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    button{
        background: none;
        border: none;
        cursor: pointer;
    }
`
export const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 25px;
`
export const Box = styled.div`
    display: flex;
    flex-direction: column;
`
export const Box2 = styled.div`
    margin-top: 10px;
    border: 2px solid #a8a8a8;
    border-left: none;
    border-right: none;
    width: 100%;
`