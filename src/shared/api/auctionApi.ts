import { createApi } from '@reduxjs/toolkit/query/react';
import { ICheckAuction, IResultGroupAuction } from '../interfaces/auction.interface';
import { baseQuery } from '.';

export const auctionApi = createApi({
  reducerPath: 'auction',
  baseQuery: baseQuery,

  tagTypes: ['AuctionData'],

  endpoints: (build) => ({
    checkAuction: build.mutation<number, ICheckAuction>({
      query: (data) => ({
        url: `/auctions/check/`,
        method: 'POST',
        body: data,
      }),
    }),
    getResult: build.query<IResultGroupAuction, number>({
      query: (id) => ({
        url: `/groups/${id}/results/`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useCheckAuctionMutation, useGetResultQuery } = auctionApi;
