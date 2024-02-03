import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api";

export const bookBuddyApi = createApi({
  reducerPath: "bookBuddyApi",

  baseQuery: fetchBaseQuery({ baseUrl }),

  endpoints: (builder) => ({
    fetchBooks: builder.query({
      query: () => `/books`,
    }),
    fetchBook: builder.query({
      query: (bookId) => `/books/${bookId}`,
    }),
    patchBook: builder.mutation({
      query: ({bookId,availablity,token}) => ({
        url: `/books/${bookId}`,
        method: "PATCH",
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: {
            available:availablity,
          },
      }),
    }),
    fetchUserMe: builder.query({
        query: (token) => ({
        url:`/users/me`,
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}` },}),
      }),
      postRegister: builder.mutation({
        query: (body) => ({
          url: `/users/register`,
          method: "POST",
          body //object
        }),
      }),
      postLogin: builder.mutation({
        query: (body) => ({
          url: `/users/login`,
          method: "POST",
          body //object
        }),
      invalidatesTags: ["Player"],
  }),
}),
});

export const {
  useFetchBooksQuery,
  useFetchBookQuery,
  usePatchBookMutation,
  useFetchUserMeQuery,
  usePostLoginMutation,
  usePostRegisterMutation
} = bookBuddyApi;