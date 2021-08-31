import styled from 'styled-components';
import React from 'react';

export interface ImageCarouselProps {
  data?: { id: number; url: string }[] | [];
  //this will change also that  can be [], as first value for redux
}

const defaultButtonProps: Partial<ImageCarouselProps> = {
  data: [{ id: 1, url: '' }],
};

const ImageCarouselStyled = styled.div<ImageCarouselProps>`
  display: flex;
  width: 90%;
  height: 50%;
  align-items: center;
  overflow: scroll;
  white-space: nowrap;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  position: relative;
  display: inline-block;
  overflow: hidden;
`;

export const ImageCarousel: React.FC<ImageCarouselProps> = (props) => (
  <ImageCarouselStyled {...props}>
    {props?.data?.map((image, index) => (
      <React.Fragment key={image.id}>
        <div
          style={{ width: 50, height: 50, paddingLeft: index !== 0 ? 20 : 0 }}
        >
          <Image src={image.url} />
        </div>
      </React.Fragment>
    ))}
  </ImageCarouselStyled>
);

ImageCarouselStyled.defaultProps = defaultButtonProps;

export default ImageCarouselStyled;
