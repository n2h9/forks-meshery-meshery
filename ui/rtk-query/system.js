import { api } from './index';

const TAGS = {
  SYSTEM: 'system',
};

const systemApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getDatabaseSummary: builder.query({
      query: (queryArg) => {
        // Generated by Copilot
        console.log('amit Database Summary Query Args:', queryArg);

        return {
          url: `system/database`,
          params: {
            page: queryArg.page,
            pagesize: queryArg.pagesize,
            search: queryArg.search,
            order: queryArg.order,
          },
          method: 'GET',
        };
      },
      providesTags: () => [{ type: TAGS.SYSTEM }],
    }),
  }),
});
export const { useGetDatabaseSummaryQuery } = systemApi;
