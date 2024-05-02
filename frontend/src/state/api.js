import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/Api" }),
  reducerPath: "adminApi",
  tagTypes: [
    // "Categorie",
    // "Client",
    "Entreprise",
    // "Invoice",
    "Pack",
    // "Product",
    // "Setting",
    "Subscription",
    "Service",
    "Message",
  ],
  endpoints: (build) => ({
    getEntreprise: build.query({
      query: (id) => `Entreprise/${id}`,
      providesTags: ["Entreprise"],
    }),
    getAllEntreprises: build.query({
      query: () => `Entreprise`,
      providesTags: ["Entreprise"],
    }),
    getPacks: build.query({
      query: () => "Pack",
      providesTags: ["Pack"],
    }),
    getAllServices: build.query({
      query: () => `Service`,
      providesTags: ["Service"],
    }),
    getDashboard: build.query({
      query: () => `Entreprise/dashboard`,
      providesTags: ["Entreprise"],
    }),
    getEntrepriseState: build.query({
      query: () => `Entreprise/EnterpriseStat`,
      providesTags: ["Entreprise"],
    }),
    getSubscriptions: build.query({
      query: () => `Subscription`,
      providesTags: ["Subscription"],
    }),
    getMessages: build.query({
      query: () => `Message`,
      providesTags: ["Message"],
    }),
  }),
});

export const {
  useGetEntrepriseQuery,
  useGetAllEntreprisesQuery,
  useGetPacksQuery,
  useGetAllServicesQuery,
  useGetEntrepriseStateQuery,
  useGetDashboardQuery,
  useGetSubscriptionsQuery,
  useGetMessagesQuery,
  
} = api;
