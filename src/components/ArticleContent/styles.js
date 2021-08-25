import styled from 'styled-components';

export const Article = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
`

export const ArticleTitle = styled.h1`
    font-size: 20px;
    font-weight: bold;
    color: #419fb9;
    margin-top: 20px;
    @media(min-width: 768px){
        font-size: 40px;
    }
`;

export const ArticleHeadline = styled.div`
    font-size: 14px;
    margin-top: 20px;
    @media(min-width: 768px){
        margin-top: 40px;
        font-size: 22px;
        line-height: 32px;
    }
`;

export const ArticleDescription = styled(ArticleHeadline)`
`

export const ArticleImage = styled.img`
    @media(min-width: 768px){
        width: 50%;
        height: auto;
        margin-top: 40px;
    }
`