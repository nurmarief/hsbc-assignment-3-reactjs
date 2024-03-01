import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const videosAPI = createApi({
  reducerPath: 'videosAPI',
  baseQuery: fetchBaseQuery({baseUrl: 'https://youtube.googleapis.com/youtube/v3'}),
  tagTypes: ['Feed','SearchResults', 'CurrentVideo', 'CurrentVideoComments'],
  endpoints: (builder) => ({
    getVideosByCategoryId: builder.query({
      query: (params: any) => ({
        url: '/videos',
        params: {
          part: 'snippet,contentDetails,statistics',
          chart: 'mostPopular',
          maxResults: params.maxResult,
          regionCode: 'US',
          videoCategoryId: params.videoCategoryId,
          key: import.meta.env.VITE_YT_API_KEY,
        }
      }),
      providesTags: ['Feed'],
    }),
    getVideosByKeywords: builder.query({
      query: (params: any) => ({
        url: '/search',
        params: {
          part: 'snippet',
          chart: 'mostPopular',
          maxResults: params.maxResult,
          regionCode: 'US',
          q: params.q,
          key: import.meta.env.VITE_YT_API_KEY,
        }
      }),
      providesTags: ['SearchResults'],
    }),
    getVideoById: builder.query({
      query: (params: any) => ({
        url: '/videos',
        params: {
          part: 'snippet,contentDetails,statistics',
          id: params.id,
          key: import.meta.env.VITE_YT_API_KEY,
        },
        providesTags: ['CurrentVideo'],
      })
    }),
    getVideoComments: builder.query({
      query: (params: any) => ({
        url: '/commentThreads',
        params: {
          part: 'id,replies,snippet',
          videoId: params.id,
          key: import.meta.env.VITE_YT_API_KEY,
        },
        providesTags: ['CurrentVideoComments'],
      }),
      transformResponse: (response: any) => response.items.map((comment: any) => ({
        accountName: comment.snippet.topLevelComment.snippet.authorDisplayName,
        accountAvatar: comment.snippet.topLevelComment.snippet.authorProfileImageUrl,
        publishedAt: comment.snippet.topLevelComment.snippet.publishedAt,
        likeCount: comment.snippet.topLevelComment.snippet.likeCount,
        displayText: comment.snippet.topLevelComment.snippet.textDisplay,
      }))
    }),
  }),
})

export const {
  useGetVideosByCategoryIdQuery, 
  useGetVideoByIdQuery, 
  useGetVideoCommentsQuery,
  useGetVideosByKeywordsQuery,
} = videosAPI