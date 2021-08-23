import React, { useContext } from 'react';
import { UserDataArticleContext } from '../../Contexts/dataArticle'
import * as S from './styles'

const ArticleList = () => {
  const { articleData, setArticleData } = useContext(UserDataArticleContext)
  var articleInfo = articleData[Object.keys(articleData)[0]];
  if(articleInfo != null){
    var articleCard = []
    for (var element of articleInfo) {
      articleCard.push(<S.ArticleItem key={element.id}>{element.slug}</S.ArticleItem>)
    }
  }
  return(
    
    <S.ArticleListStyle>
      <div>
        {articleCard}
      </div>
    </S.ArticleListStyle>
  )
}

export default ArticleList