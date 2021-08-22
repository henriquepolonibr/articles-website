import styled from 'styled-components';

export const SearchBox = styled.div`
    margin: 13px 10px;
    border-bottom: 1px solid #BDBDBD;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width: 768px){
        margin: 81px 210px 57px;
    }

    svg{
        position: absolute;
        left: 12px;
        font-size: 18px;
        font-weight: 300;
    }
`;

export const SearchText = styled.textarea`
    color: #A8A8A8; 
    font-family: Open Sans;
    font-style: normal;
    font-weight: 300;
    text-align: center;
    font-size: 20px;
    line-height: 24px;
    width: 100%;
    background-color: #FFFFFF;
    border: none;
    overflow: auto;
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    resize: none !important; 

    &:focus::placeholder {
        color: transparent;
    }

    @media (min-width: 768px){
        font-size: 24px;
        line-height: 18px;
    }
`;
