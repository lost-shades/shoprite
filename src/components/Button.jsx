import React from 'react';


export const Button = ({ customStyle, value }) => {
  return (
    <>
      <button
        className={`${customStyle}`}
        type='button'
      >
        {value}
      </button>
    </>
  );
};
