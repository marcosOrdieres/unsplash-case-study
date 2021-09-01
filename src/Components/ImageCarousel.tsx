import styled from 'styled-components';
import React from 'react';
import { useSelector } from 'react-redux';

import { GlobalState } from '../reducers/imageReducer';

const ImageCarouselStyled = styled.div`
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

const ImageContainer = styled.div`
  width: 50px;
  height: 50px;
`;

export const ImageCarousel: React.FC = (props) => {

  const imagesApproved = useSelector((state: GlobalState) => state.isImage.approved);

  return (
    <ImageCarouselStyled {...props}>
      {imagesApproved?.map((image, index) => (
        <React.Fragment key={image.id}>
          <ImageContainer style={{ paddingLeft: index !== 0 ? 20 : 0 }}>
            <Image src={image.url} />
          </ImageContainer>
        </React.Fragment>
      ))}
    </ImageCarouselStyled>
  )
};

export default ImageCarouselStyled;
