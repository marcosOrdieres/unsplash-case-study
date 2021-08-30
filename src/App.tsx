import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './Apollo/ApolloClient';
import { TranslationsProvider } from './i18n';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import { StartScreen } from './Pages/Start/StartScreen';

function App() {
	return (
		<TranslationsProvider>
			{/* <ApolloProvider client={apolloClient}> */}
			<StartScreen />
			{/* </ApolloProvider> */}
		</TranslationsProvider>
	);
}

export default App;
