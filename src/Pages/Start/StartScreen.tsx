import React, { HTMLAttributes, useEffect, useState } from 'react';
import { useStartTranslations } from './StartScreen.translations';
import styled, { css } from 'styled-components';
import { Divider } from '../../Components/Divider';
import { Text } from '../../Components/Text';
import { Button } from '../../Components/Button';
import { ImageCarousel } from '../../Components/ImageCarousel';

import { MdDone, MdClear, MdAdd } from 'react-icons/md';

import { useFetch } from '../../hooks/useFetch';

const MainLayout = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #004cfc;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  height: 80vh;
  background-color: white;
  border-width: 1px;
  border-radius: 10px;
`;

export interface ElementProps extends HTMLAttributes<HTMLButtonElement> {
	flex?: number;
	flexDirection?: string;
	color?: string;
	justifyContent?: string;
}

const Element = styled.div<ElementProps>`
  display: flex;
  flex: ${(props) => props.flex};
  flex-direction: ${(props) => props.flexDirection};
  background-color: ${(props) => props.color};
  align-items: center;
  justify-content: ${(props) => props.justifyContent || 'center'}; ;
`;

const Photo = styled.div`
  display: flex;
  width: 80%;
  height: 80%;
  background-color: #d9d9d9;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
  display: inline-block;
  overflow: hidden;
  margin: 0;
`;

const rejected: any[] | [] = [];
const approved: any[] | [] = [];

export const StartScreen = () => {
	const translations = useStartTranslations();

	const [{ response, isLoading, error }, setFetch, refetch] = useFetch();

	const imageIsRejected = rejected?.some((value) => response?.id === value.id);

	return (
		<MainLayout>
			<Container>
				<Element
					flex={1}
					justifyContent='flex-start'
					style={{ paddingLeft: '10%' }}
				>
					<Text color='#004CFC' fontSize={18} text-align='left'>
						{translations.mainTitle.toUpperCase()}
					</Text>
				</Element>

				<Divider width={'100%'} />

				<Element
					flex={2}
					flexDirection='column'
					style={{ alignItems: 'flex-start', paddingLeft: '10%' }}
				>
					<Text color='#004CFC' fontSize={18}>
						{`${translations.approvedImages.toUpperCase()} (${approved ? approved.length : '0'
							})`}
					</Text>

					<ImageCarousel data={approved} />
				</Element>

				<Divider />

				<Element flex={5}>
					<Photo
						onClick={() => {
							setFetch(
								`https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_TOKEN}`
							);
						}}
					>
						{isLoading ? null : response?.urls && !imageIsRejected ? (
							<Image src={response?.urls?.thumb} />
						) : (
							<MdAdd style={{ color: '#808080', fontSize: 100 }} />
						)}
					</Photo>
				</Element>

				<Divider />

				<Element flex={2}>
					{response?.urls && !imageIsRejected ? (
						<>
							<Button
								onClick={() =>
									setFetch(
										`https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_TOKEN}`
									)
								}
								background='grey'
							>
								<MdClear style={{ color: 'white', fontSize: 30 }} />
							</Button>

							<Button onClick={() => console.log('click done')} background='#004CFC'>
								<MdDone style={{ color: 'white', fontSize: 30 }} />
							</Button>
						</>
					) : (
						<Text color='grey' fontSize={12}>
							{translations.clickPlus}
						</Text>
					)}
				</Element>
			</Container>
		</MainLayout>
	);
};
