import React from 'react';
import { Link } from 'react-router-dom'


const ArticleCard = ({article}) => (
    <div className='article-card'>
        <Link to={`${article.id}`}>
            <div className='card-image'>
            </div>
            <div className='card-content text-center pt-3'>
                <h5 className='title'> {article.title} </h5>
                <p className='text-center excerpt'>{article.summary}</p>
            </div>
        </Link>
    </div>

)

export default ArticleCard