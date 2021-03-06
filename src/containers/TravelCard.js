import React from 'react';

const TravelCard = (props) => {
    const { url, title, summary } = props;

    return (
        <>
            <a 
            href={url} 
            target='_blank' 
            rel="noopener noreferrer"
            className='newsLink'>
                {title}
                <br />
                <span>{summary}</span>
            </a>
        </>
    )
}

export default TravelCard;