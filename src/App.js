/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react';
import './App.scss';

import catalogFromServer from './api/elements.json';
import { CatalogList } from './components/CatalogList/CatalogList';

import template from './img/template.png'
import image from './img/image.png'
import video from './img/video.png'
import pdf from './img/pdf.png'
import gif from './img/gif.png'
import article from './img/article.png'
import { Input } from './components/Input/Input';

const list = catalogFromServer.sort((a, b) => a['used-total-count']+b['used-total-count']);

export const App = () => {
  const [data, setData] = useState(list);
  const [isTemplateActive, setIsTemplateActive] = useState(false);
  const [isImageActive, setIsImageActive] = useState(false);
  const [isVideoActive, setIsVideoActive] = useState(false);
  const [isPdfActive, setIsPdfActive] = useState(false);
  const [isGifActive, setIsGifActive] = useState(false);
  const [isArticleActive, setIsArticleActive] = useState(false);

  const handleTemplate = () => {
    setIsTemplateActive(prev => !prev)
  }

  const handleImage = () => {
    setIsImageActive(prev => !prev)
  }

  const handleVideo = () => {
    setIsVideoActive(prev => !prev)
  }

  const handlePdf = () => {
    setIsPdfActive(prev => !prev)
  }

  const handleGif = () => {
    setIsGifActive(prev => !prev)
  }

  const handleArticle = () => {
    setIsArticleActive(prev => !prev)
  }

  useEffect(() => {
    const newArray = catalogFromServer.filter(item => {
      const isTemplate = item.type === 0 && isTemplateActive;
      const isImage = item.type === 1 && isImageActive;
      const isVideo = item.type === 2 && isVideoActive;
      const isPdf = item.type === 3 && isPdfActive;
      const isGif = item.type === 4 && isGifActive;
      const isArticle = item.type === 5 && isArticleActive;

      if (isTemplate || isImage || isVideo || isPdf || isGif || isArticle) {
        return item;
      }
      return;
      
    }).slice(0, 50);

    setData(newArray)

    if(!isTemplateActive && !isImageActive && !isVideoActive&& !isPdfActive && !isGifActive && !isArticleActive) {
      setData(list)
    }
  }, [isTemplateActive, isImageActive, isVideoActive, isPdfActive, isGifActive, isArticleActive])

  const renderPhoto = (type) => {
    if (type === 0) {
      return template;
    } else if (type === 1) {
      return image;
    } else if (type === 2) {
      return video;
    } else if (type === 3) {
      return pdf;
    } else if (type === 4) {
      return gif;
    } else {
      return article;
    }
  }

  return (
    <div className="page">
    <div className="sidebar">
      <b className="sidebar_text">Asset type</b>
      <div className="sidebar_box">

        <Input
          onChange={handleTemplate}
          value={isTemplateActive}
          label={'Template'}
          photo={template}
        />

        <Input
          onChange={handleImage}
          value={isImageActive}
          label={'Image'}
          photo={image}
        />

        <Input
          onChange={handleVideo}
          value={isVideoActive}
          label={'Video'}
          photo={video}
        />

        <Input
          onChange={handlePdf}
          value={isPdfActive}
          label={'PDF'}
          photo={pdf}
        />

        <Input
          onChange={handleGif}
          value={isGifActive}
          label={'GIF'}
          photo={gif}
        />

        <Input
          onChange={handleArticle}
          value={isArticleActive}
          label={'Article'}
          photo={article}
        />
      </div>
    </div>

    <div className="page_content">
      <CatalogList elements={data} renderPhoto={renderPhoto}/>
    </div>
  </div>
  )
};

export default App;