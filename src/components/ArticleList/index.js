import React, { useContext } from 'react';
import { UserDataArticleContext } from '../../Contexts/dataArticle'
import * as S from './styles'

const ArticleList = () => {
  const { articleData, setArticleData } = useContext(UserDataArticleContext)
  var articleInfo = articleData[Object.keys(articleData)[0]];
  if(articleInfo != null){
    var articleCard = []
    for (var element of articleInfo) {
      articleCard.push(
        <S.ArticleItem key={element.id}>
          <S.ArticleThumbnail src={element.featured_media.thumbnail} />
          <S.ArticleText>
            <S.ArticleTitle>{element.title}</S.ArticleTitle>
            <S.ArticleDescription>{element.headline}</S.ArticleDescription>
          </S.ArticleText>
          {/* link: {element.link}<br /> */}
        </S.ArticleItem>
      )
      console.log('featured_media', element)
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