import React, { useEffect } from 'react';
import { useStartTranslations } from './StartScreen.translations';
import styled from 'styled-components';
import { MdDone, MdClear, MdAdd } from 'react-icons/md';
import { Skeleton } from '@material-ui/lab';

import { useDispatch, useSelector } from 'react-redux';
import { GlobalState, Payload } from '../../reducers/imageReducer';
import { useFetch } from '../../hooks/useFetch';

import MainLayout from '../../Components/MainLayout';
import Container from '../../Components/Container';
import Section from '../../Components/Section';
import Divider from '../../Components/Divider';
import MainImageContainer from '../../Components/MainImageContainer';
import Button from '../../Components/Button';
import Text from '../../Components/Text';
import { ImageCarousel } from '../../Components/ImageCarousel';

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StartScreen = () => {
  const translations = useStartTranslations();

  const approved = useSelector((state: GlobalState) => state.isImage.approved);
  const rejected = useSelector((state: GlobalState) => state.isImage.rejected);

  const { response, isLoading, error, setFetch, resetFetchData } =
    useFetch();

  const dispatch = useDispatch();

  const imageIsRejected = rejected?.some(
    (value: Payload) => response?.id === value.id
  );

  useEffect(() => {
    if (imageIsRejected) {
      resetFetchData();
    }
  })

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        resetFetchData();
      }, 2000);
    }
  })

  return (
    <MainLayout>
      <Container>
        <Section flex={1} justifyContent='flex-start' paddingLeft='10%'>
          <Text color='#004CFC' fontSize={18} text-align='left'>
            {translations.mainTitle.toUpperCase()}
          </Text>
        </Section>

        <Divider width={'100%'} />

        <Section
          flex={2}
          flexDirection='column'
          paddingLeft='10%'
          alignItems='flex-start'
        >
          <Text color='#004CFC' fontSize={18}>
            {`${translations.approvedImages.toUpperCase()} (${approved ? approved.length : '0'
              })`}
          </Text>

          <ImageCarousel />
        </Section>

        <Divider />

        <Section flex={5}>
          <MainImageContainer
            backgroundColor={!isLoading ? '#d9d9d9' : 'null'}
            onClick={() => {
              setFetch(
                `${process.env.REACT_APP_UNSPLASH_URL}/photos/random/?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_TOKEN}`
              );
            }}
          >
            {isLoading ? (
              <Skeleton variant='rect' width={250} height={250} />
            ) : response?.urls && !imageIsRejected ? (
              <Image src={response?.urls?.thumb} />
            ) : (
              <MdAdd style={{ color: '#808080', fontSize: 100 }} />
            )}

            {error && (
              <Text color='red' fontSize={18}>
                {error?.toString()}
              </Text>
            )}
          </MainImageContainer>
        </Section>

        <Divider />

        <Section flex={2}>
          {response?.urls && !imageIsRejected ? (
            <>
              <Button
                onClick={async () => {
                  dispatch({
                    type: 'REJECT_IMAGE',
                    rejected: { id: response?.id, url: response?.urls?.thumb },
                  });

                  await resetFetchData();

                  setFetch(
                    `${process.env.REACT_APP_UNSPLASH_URL}/photos/random/?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_TOKEN}`
                  );
                }}
                background='grey'
              >
                <MdClear style={{ color: 'white', fontSize: 30 }} />
              </Button>

              <Button
                onClick={async () => {
                  dispatch({
                    type: 'APPROVE_IMAGE',
                    approved: { id: response?.id, url: response?.urls?.thumb },
                  });

                  resetFetchData();
                }}
                background='#004CFC'
              >
                <MdDone style={{ color: 'white', fontSize: 30 }} />
              </Button>
            </>
          ) : (
            <Text color='grey' fontSize={12}>
              {translations.clickPlus}
            </Text>
          )}
        </Section>

      </Container>
    </MainLayout>
  );
};
