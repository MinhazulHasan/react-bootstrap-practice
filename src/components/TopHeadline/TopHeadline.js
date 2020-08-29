import React, { useEffect, useState } from 'react';
import News from '../News/News';

const TopHeadline = () => {

    const [articles, setArticles] = useState([]);

    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=72cb4920613549b19887577fea47e5fb';
    useEffect( () => {
        fetch(url)
            .then(res => res.json())
            .then(data => setArticles(data.articles))
            .catch(error => console.log(error))
    } ,[])

    return (
        <div>
            <h1>Top Headlines : {articles.length}</h1>
            {
                articles.map(article => <News article={article}></News>)
            }
        </div>
    );
};

export default TopHeadline;