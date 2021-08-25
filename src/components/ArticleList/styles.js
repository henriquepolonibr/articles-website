import styled from "styled-components";

export const ArticleListStyle = styled.section`
  display: block;
  margin-top: 20px;
  @media(min-width: 768px){
    margin-top: 0px;
    display: flex;
    flex-direction: column;
  }
`

export const ArticleItem = styled.div`
  display: block;
  width: 100%;
  height: auto;
  padding: 10px;
  color: #7b7469;
  font-size: 18px;
  background: #f6f6f4;
  border-radius: 4px;
  margin-bottom: 20px;
  @media(min-width: 768px){
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    height: 200px;
  }
`
export const AlignImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ArticleThumbnail = styled.img`
  max-height: 200px;
  max-width: 200px;
  border-radius: 4px;
`

export const ArticleText = styled.div`
  margin: 20px;
`

export const ArticleTitle = styled.div`
  font: 14px;
  font-weight: bold;
  margin-bottom: 10px;

  @media(min-width: 768px){
    font: 18px;
  }
`
export const ArticleDescription = styled.div`
  font: 10px;
  font-weight: normal;
  @media(min-width: 768px){
    font: 12px;
  }
`

export const ArticleDate = styled.div`
  font-size: 10px;
  font-weight: bold;
  position: relative;
  right: 0px;
`

export const NumberOfArticles = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin: 30px 0px;
  font-size: 14px;
  font-weight: 500;
  @media(min-width: 768px){
    justify-content: flex-end;
    font-weight: 600;
    margin: 20px 0px;
  }
`