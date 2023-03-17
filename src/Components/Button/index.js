import React, { memo } from 'react';

const Button = ({
  children,
  onClick,
  className,
  'data-testid': dataTestId,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      data-testid={dataTestId}
      className={`px-8 py-2 rounded-md cursor-pointer w-full shadow-defaultHidden hover:shadow-default hover:text-fontHover transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default memo(Button);
