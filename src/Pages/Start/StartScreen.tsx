import React, { HTMLAttributes, useEffect, useState } from 'react';
import { useStartTranslations } from './StartScreen.translations';
import styled, { css } from 'styled-components';
import { Divider } from '../../Components/Divider';
import { Text } from '../../Components/Text';
import { Button } from '../../Components/Button';

import { MdDone, MdClear, MdAdd } from "react-icons/md";

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
}

const Element = styled.div<ElementProps>`
  display: flex;
  flex: ${(props) => props.flex};
  flex-direction: ${(props) => props.flexDirection};
  background-color: ${(props) => props.color};
  align-items: center;
  justify-content: center;
`;

const Photo = styled.div`
display: flex;
  width: 80%;
  height: 80%;
  background-color: #d9d9d9;
  align-items: center;
  justify-content: center;
`;

const Carousel = styled.div`
  width: 80%;
  height: 50%;
  background-color: yellow;
`;

export const StartScreen = () => {
	const translations = useStartTranslations();

	const [{ response, isLoading, error }, setFetch, refetch] = useFetch();

	console.log('the responses and errors', response, isLoading, error)

	return (
		<MainLayout>
			<Container>
				<Element flex={1}>
					<Text color='#004CFC' fontSize={18} text-align='left'>
						{translations.mainTitle.toUpperCase()}
					</Text>
				</Element>

				<Divider width={'100%'} />

				<Element flex={2} flexDirection='column'>
					<Text color='#004CFC' fontSize={18}>
						{translations.approvedImages.toUpperCase()}
					</Text>

					<Carousel />
				</Element>
				<Divider />

				<Element flex={5}>
					<Photo
						onClick={() => {
							setFetch(`https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_TOKEN}`)
						}}
					>
						{isLoading ?
							null
							:
							<MdAdd style={{ color: '#808080', fontSize: 100 }} />
						}

					</Photo>

				</Element>

				<Divider />

				<Element flex={2}>
					{response?.urls ? (
						<>
							<Button background='grey'>
								<MdClear style={{ color: 'white', fontSize: 30 }} />
							</Button>

							<Button background='#004CFC'>
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
