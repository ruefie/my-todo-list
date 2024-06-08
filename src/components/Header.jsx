import React from 'react';

const Header = () => {
  const currentDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  return (
    <div className="imgheader">
      <div className="header">
        <h1>Hello, today is {formattedDate}</h1>
      </div>
    </div>
  );
};

export default Header;
