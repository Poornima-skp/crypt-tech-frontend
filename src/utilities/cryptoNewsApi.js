import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsApiHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'd6b7253bf4msh4ebc624d6a86445p110ee7jsnfecee8a02617',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({
    url,
    headers: cryptoNewsApiHeaders
});

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            // query: (newsCategory, count) => createRequest(`/news/search?q=${newsCategory}&safeSearch=0ff&textFormat=Raw&freshness=Day&count=${count}`)
            query: (newsCategory, count) => createRequest(`/news/?${newsCategory}&limit=${count}`)
        })
    })
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi;