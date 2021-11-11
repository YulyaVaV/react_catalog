import React, { useState } from 'react';
import './CatalogCard.scss';

import noUserPhoto from '../../img/no-user-image-icon-3.jpg'
import bookmark from '../../img/bookmark.png'
import bookmark2 from '../../img/bookmark-saved.png'

export const CatalogCard = ({ title, image, description, renderPhoto, type, tags, count, originalFileSrc }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [isCount, setIsCount] = useState(count);
  const [isHover, setIsHover] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const toggleState = () => {
    setIsOpened(prev => !prev);
  }

  const addOne = () => {
    setIsCount(prev => prev + 1);
  };

  const isPhotoHover = () => {
    if (isHover) {
      return (
        <div
          className="hover"
          onMouseLeave={() => setIsHover(false)}
        >
        <div 
          className="hover_background">
          <img
            src={image || noUserPhoto} 
            alt=""
            className="card_image-person"
          />
        </div>
        <div
          className="hover_flag"
          id='flag'
        >
          <img
            onClick={() => setIsSaved(prev => !prev)}
            className='hover_flag-transparent'
            src={isSaved ? bookmark2 : bookmark}
            alt=''
          />
        </div>
        <div className="hover_content">
          <div className="hover_count">
            <div className="hover_count-count">{isCount}</div>
            <div className="hover_count-text">Used (total)</div>
          </div>
          <a
            href={type === 3 && originalFileSrc}
            target="_blank"
            rel="noreferrer"
          >
          <button
            className="hover_count-button"
            type="button"
            onClick={addOne}
          > 
            {type === 3 ? 'DOWNLOAD' : 'USE'}
          </button>
          </a>
         </div>
      </div>
      )
    }

    return (
      <div
        className='card_wrap'
        onMouseOver={() => {
        setIsHover(true)
        setIsOpened(false)
      }}
      >
        <img
          src={image || noUserPhoto} 
          alt=""
          className="card_image-person"
        />
      </div>
    )}
  
  return (
    <div className="card">
      <div className="card_content">
        {isPhotoHover()}
        <div className="card_title">
          <div className="card_title-render">
            <img
              className='card_title-type'
              src={renderPhoto(type)}
              alt=''
            />
            <div>
              <div className="card_text">{title}</div>
              <div className='tags'>
                {(isOpened && tags.length > 1) && (
                  <div className='tags_render'>
                    <ul>
                      {tags.map((tag) => (
                      <li className='tags_one' key={tag}>
                        {tag}
                      </li>
                      ))}
                    </ul>
                  </div>
                )}
                  {
                    tags && (
                    <div
                      onClick={toggleState}
                      className='tags_content'
                    >
                      <p>{tags[0]}</p>
                      <p>{tags.length - 1 !== 0 ? ('+' + tags.length) : ''}</p>
                    </div>
                  )}
              </div>
            </div>
          </div>
            <p className="card_description">{description || 'No description yet'}</p>
        </div>
      </div>
    </div>
  );
};
