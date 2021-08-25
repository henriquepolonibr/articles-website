import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './styles';

const ArticleContent = () => {
  const { idNumber } = useParams();
  const [articleData, setArticleData] = useState({
    "title": "",
    "headline": "",
    "featured_media": "",
    "text": "",
    "slug": "",
});
  useEffect(() => {
    function apiCall(){
      var url = ("https://api.beta.mejorconsalud.com/wp-json/mc/v1/posts/" + idNumber);
      fetch(url)
      .then(response => response.json()) 
      .then(data => { 
        setArticleData(data)
      })
    }
    apiCall()
  }, [])
 
  return (
    <div>
      <S.Article>Article | {articleData.slug}</S.Article>
      <S.ArticleTitle>{articleData.title}</S.ArticleTitle>
      <S.ArticleHeadline>{articleData.headline}</S.ArticleHeadline>
      <S.ArticleImage src={articleData.featured_media.large}></S.ArticleImage>
      <S.ArticleDescription>{articleData.excerpt}</S.ArticleDescription>
    </div>
  );
};

export default ArticleContent;
