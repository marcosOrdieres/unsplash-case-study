import React from 'react';
import { TranslationsProvider } from './i18n';
import { StartScreen } from './Pages/Start/StartScreen';
import './App.css';

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
