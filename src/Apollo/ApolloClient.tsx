import {
	ApolloClient,
	InMemoryCache,
} from '@apollo/client';


export const apolloClient = new ApolloClient({
	//link: ApolloLink.from(),
	cache: new InMemoryCache(),
	defaultOptions: {
		watchQuery: {
			fetchPolicy: 'no-cache',
			errorPolicy: 'ignore',
		},
		query: {
			fetchPolicy: 'network-only',
			errorPolicy: 'all',
		},
		mutate: {
			errorPolicy: 'all',
		},
	},
});
