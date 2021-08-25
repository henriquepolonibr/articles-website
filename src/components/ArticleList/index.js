import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  
import { UserDataArticleContext } from '../../Contexts/dataArticle'
import * as S from './styles'

const ArticleList = () => {
  const { articleData, setArticleData } = useContext(UserDataArticleContext)
  const [ numberOfArticles, setNumberOfArticles] = useState('0')
  useEffect(() => {
    setNumberOfArticles(articleData.size)
  }, [articleData])
  var articleInfo = articleData[Object.keys(articleData)[0]];
  if(articleInfo != null){
    var articleCard = []
    for (var element of articleInfo) {
      articleCard.push(
        <Router key={element.id}> 
          <Link to={`/article/${element.id}`}>
            <S.ArticleItem>
              <S.AlignImage>
                <S.ArticleThumbnail src={element.featured_media.thumbnail ? element.featured_media.thumbnail : 'https://beta.mejorconsalud.com/wp-content/uploads/2019/11/padre-mirando-hijo-150x150.jpg'} alt={element.title} title={element.title} />
              </S.AlignImage>
              <S.ArticleText>
                <S.ArticleTitle>{element.title}</S.ArticleTitle>
                <S.ArticleDescription>{element.headline}</S.ArticleDescription>
                {/* <S.ArticleDate>Article | {element.modified}</S.ArticleDate> */}
              </S.ArticleText>
              {/* link: {element.link}<br /> */}
            </S.ArticleItem>
          </Link>
        </Router> 
      )
    }
  }
  return(
    <S.ArticleListStyle>
      <S.NumberOfArticles>Número de artigos: {numberOfArticles}</S.NumberOfArticles>
      <div>
        {articleCard}
      </div>
    </S.ArticleListStyle> 
  )
}

export default ArticleList