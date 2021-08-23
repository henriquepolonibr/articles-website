import styled from "styled-components";

export const ArticleListStyle = styled.section`
  display: flex;
  flex-direction: column;
`

export const ArticleItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 200px;
  padding: 10px;
  color: #7b7469;
  font-size: 18px;
  background: #f6f6f4;
  border-radius: 4px;
  margin-bottom: 20px;
`
export const ArticleThumbnail = styled.img`
  max-height: 200px;
  max-width: 200px;
  border-radius: 4px;
`

export const ArticleText = styled.div`
  margin: 20px;
`

export const ArticleTitle = styled.h2`
  font: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`
export const ArticleDescription = styled.h3`
  font: 12px;
  font-weight: normal;
`