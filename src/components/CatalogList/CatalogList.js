import React from 'react';

import { CatalogCard } from '../CatalogCard/CatalogCard';
import './CatalogList.scss';

export const CatalogList = (props) => {
  const { elements, renderPhoto } = props;

  return (
    <div className="elements">
      {elements.map(element => (
        <CatalogCard {...element} key={element.id}  renderPhoto={renderPhoto}/>
      ))}
    </div>
  );
};
