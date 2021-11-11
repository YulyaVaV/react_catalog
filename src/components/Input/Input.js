import React from 'react';

export const Input = ( {label, photo, value, onChange } ) => {
 return (
  <label class="container">
    <input
      onChange={onChange}
      checked={value}
      type="checkbox"
      className="sidebar_check"
    />
    <img
      className="sidebar_img"
      src={photo}
      alt=''
    >
    </img>
    {label}
  </label>
 )
}
