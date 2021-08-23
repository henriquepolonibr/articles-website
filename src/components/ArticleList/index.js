import React, { useContext } from 'react';
import { UserDataArticleContext } from '../../Contexts/dataArticle'
import * as S from './styles'

const ArticleList = () => {
  const { articleData, setArticleData } = useContext(UserDataArticleContext)
  var articleInfo = articleData[Object.keys(articleData)[0]];
  console.log(articleInfo)
  return(
    <S.ArticleListStyle>
      {articleData > 0 ? 
      (
        <>
          {articleInfo.map((article) => {
            <S.ArticleItem key={article.id}>{article.id}</S.ArticleItem>
            })
          } 
        </> 
      ) : 
      (
        <>
        </>
      )}
    </S.ArticleListStyle>
  )
}

export default ArticleList