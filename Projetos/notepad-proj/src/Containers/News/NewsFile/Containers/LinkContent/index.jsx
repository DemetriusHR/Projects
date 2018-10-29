import React from 'react';

import LinkContentWrapper from './LinkContent.Style';

const LinkContent = (props) => {
  // eslint-disable-next-line
  const { link, title, subtitle, linkSmall, img, altImg, className } = props;

  return (
    <a href={link}>
      <LinkContentWrapper>
        <div className="text">
          <div className="title">{title}</div>
          <div className="subtitle">{subtitle}</div>
          <div className="link">{linkSmall}</div>
        </div>
        <div className="image-content">
          <img src={img} alt={altImg} className={className} />
        </div>
      </LinkContentWrapper>
    </a>
  );
};

export default LinkContent;
