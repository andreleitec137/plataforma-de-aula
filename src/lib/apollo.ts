import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client  = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oyy26b1b4501xxabhd220s/master',
    cache: new InMemoryCache()
})