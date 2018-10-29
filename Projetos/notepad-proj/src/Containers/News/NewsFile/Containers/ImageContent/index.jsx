import React from 'react';

import ImageContentWrapper from './ImageContent.Style';
import ParagrafoWrapper from '../Paragrafo/Paragrafo.Style';
import ImageModalWrapper from './ImageModal.Style';

class ImageContent extends React.Component {
  state = {
    clicked: false
  };

  onClicked = () => {
    const { clicked } = this.state;
    this.setState({
      clicked: !clicked
    });
  };

  render() {
    const { img, alt, description } = this.props;
    let { width, height } = this.props;
    const { clicked } = this.state;

    width = width === undefined ? '65' : width;
    height = height === undefined ? '75' : height;

    return (
      <ParagrafoWrapper>
        <ImageContentWrapper>
          {/* eslint-disable-next-line */}
          <img
            src={img}
            alt={alt}
            id="myImg"
            onClick={() => this.onClicked()}
          />
          <ImageModalWrapper
            style={{ display: `${clicked ? 'block' : ''}` }}
            onClick={this.onClicked}
          >
            <span className="close" onClick={this.onClicked}>
              &times;
            </span>
            {/* eslint-disable-line */}
            {/* eslint-disable-next-line */}
            <img
              style={{ width: `${width}%`, height: `${height}%` }}
              className="image-content"
              src={img}
              alt={alt}
              onClick={() => this.onClicked()}
            />
            {description === undefined || description === '' ? (
              ''
            ) : (
              <div className="description-content">{description}</div>
            )}
          </ImageModalWrapper>

          <div className="description-image">{description}</div>
        </ImageContentWrapper>
      </ParagrafoWrapper>
    );
  }
}
export default ImageContent;
