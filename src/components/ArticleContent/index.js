import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import * as S from './styles';

const ArticleContent = () => {
  const { idNumber } = useParams();
  const [articleData, setArticleData] = useState({
    "id": "",
    "slug": "",
    "link": ""
});
  console.log('articleData', articleData)
  console.log('valores', articleData.id)

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
      <h1>{ idNumber } </h1>
      <h1>{ articleData.slug } </h1>
    </div>
  );
};

export default ArticleContent;
