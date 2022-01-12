"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/lib/apolloClient.ts":
/*!*********************************!*\
  !*** ./src/lib/apolloClient.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"APOLLO_STATE_PROP_NAME\": () => (/* binding */ APOLLO_STATE_PROP_NAME),\n/* harmony export */   \"initializeApollo\": () => (/* binding */ initializeApollo),\n/* harmony export */   \"addApolloState\": () => (/* binding */ addApolloState),\n/* harmony export */   \"useApollo\": () => (/* binding */ useApollo)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! deepmerge */ \"deepmerge\");\n/* harmony import */ var deepmerge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(deepmerge__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isEqual */ \"lodash/isEqual\");\n/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ \"isomorphic-unfetch\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client/link/error */ \"@apollo/client/link/error\");\n/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\n\n// import { concatPagination } from \"@apollo/client/utilities\";\n\n\n\n\n\nconst APOLLO_STATE_PROP_NAME = \"__APOLLO_STATE__\";\nlet apolloClient;\nconst errorLink = (0,_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_5__.onError)((errors)=>{\n    var ref;\n    if (errors.graphQLErrors && ((ref = errors.graphQLErrors[0].extensions) === null || ref === void 0 ? void 0 : ref.code) === \"AUTHENTICATED\" && errors.response) {\n        errors.response.errors = undefined;\n        next_router__WEBPACK_IMPORTED_MODULE_6___default().replace(\"/login\");\n    }\n});\nfunction createApolloClient(headers = null) {\n    const enhancedFetch = (url, init)=>{\n        return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()(url, {\n            ...init,\n            headers: {\n                ...init.headers,\n                \"Access-Control-Allow-Origin\": \"*\",\n                // here we pass the cookie along for each request\n                Cookie: (headers === null || headers === void 0 ? void 0 : headers.cookie) ?? \"\"\n            }\n        });\n    };\n    const httpLink = new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.HttpLink({\n        uri:  false ? 0 : \"http://localhost:4000/graphql\",\n        credentials: \"includes\",\n        fetch: enhancedFetch\n    });\n    return new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({\n        ssrMode: \"undefined\" === \"undefined\",\n        link: (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.from)([\n            errorLink,\n            httpLink\n        ]),\n        cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache({\n            typePolicies: {\n                Query: {\n                    fields: {\n                        posts: {\n                            keyArgs: false,\n                            merge (existing, incoming) {\n                                // console.log(\"EXISTING\", existing);\n                                // console.log(\"INCOMING\", incoming);\n                                let paginatedPosts = [];\n                                if (existing && existing.paginatedPosts) {\n                                    paginatedPosts = paginatedPosts.concat(existing.paginatedPosts);\n                                }\n                                if (incoming && existing.paginatedPosts) {\n                                    paginatedPosts = paginatedPosts.concat(incoming.paginatedPosts);\n                                }\n                                return {\n                                    ...incoming,\n                                    paginatedPosts\n                                };\n                            }\n                        }\n                    }\n                }\n            }\n        })\n    });\n}\nfunction initializeApollo({ headers , initialState  } = {\n    headers: null,\n    initialState: null\n}) {\n    const _apolloClient = apolloClient ?? createApolloClient(headers);\n    // If your page has Next.js data fetching methods that use Apollo Client, the initial state\n    // gets hydrated here\n    if (initialState) {\n        // Get existing cache, loaded during client side data fetching\n        const existingCache = _apolloClient.extract();\n        // Merge the existing cache into data passed from getStaticProps/getServerSideProps\n        const data = deepmerge__WEBPACK_IMPORTED_MODULE_2___default()(initialState, existingCache, {\n            // combine arrays using object equality (like in sets)\n            arrayMerge: (destinationArray, sourceArray)=>[\n                    ...sourceArray,\n                    ...destinationArray.filter((d)=>sourceArray.every((s)=>!lodash_isEqual__WEBPACK_IMPORTED_MODULE_3___default()(d, s)\n                        )\n                    ), \n                ]\n        });\n        // Restore the cache with the merged data\n        _apolloClient.cache.restore(data);\n    }\n    // For SSG and SSR always create a new Apollo Client\n    if (true) return _apolloClient;\n    // Create the Apollo Client once in the client\n    if (!apolloClient) apolloClient = _apolloClient;\n    return _apolloClient;\n}\nfunction addApolloState(client, pageProps) {\n    if (pageProps === null || pageProps === void 0 ? void 0 : pageProps.props) {\n        pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();\n    }\n    return pageProps;\n}\nfunction useApollo(pageProps) {\n    const state = pageProps[APOLLO_STATE_PROP_NAME];\n    const store = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>initializeApollo({\n            initialState: state\n        })\n    , [\n        state\n    ]);\n    return store;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3RCLENBQUM7QUFFTSxTQUFTWSxjQUFjLENBQzVCQyxNQUEyQyxFQUMzQ0MsU0FBdUMsRUFDdkMsQ0FBQztJQUNELEVBQUUsRUFBRUEsU0FBUyxhQUFUQSxTQUFTLEtBQVRBLElBQUksQ0FBSkEsQ0FBZ0IsR0FBaEJBLElBQUksQ0FBSkEsQ0FBZ0IsR0FBaEJBLFNBQVMsQ0FBRUMsS0FBSyxFQUFFLENBQUM7UUFDckJELFNBQVMsQ0FBQ0MsS0FBSyxDQUFDakQsc0JBQXNCLElBQUkrQyxNQUFNLENBQUN6QixLQUFLLENBQUNjLE9BQU87SUFDaEUsQ0FBQztJQUVELE1BQU0sQ0FBQ1ksU0FBUztBQUNsQixDQUFDO0FBRU0sU0FBU0UsU0FBUyxDQUFDRixTQUE0QixFQUFFLENBQUM7SUFDdkQsS0FBSyxDQUFDRyxLQUFLLEdBQUdILFNBQVMsQ0FBQ2hELHNCQUFzQjtJQUM5QyxLQUFLLENBQUNvRCxLQUFLLEdBQUc5RCw4Q0FBTyxLQUNiMEMsZ0JBQWdCLENBQUMsQ0FBQztZQUFDQyxZQUFZLEVBQUVrQixLQUFLO1FBQUMsQ0FBQztNQUM5QyxDQUFDQTtRQUFBQSxLQUFLO0lBQUEsQ0FBQztJQUVULE1BQU0sQ0FBQ0MsS0FBSztBQUNkLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvbGliL2Fwb2xsb0NsaWVudC50cz9iMzg5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBBcG9sbG9DbGllbnQsXHJcbiAgZnJvbSxcclxuICBIdHRwTGluayxcclxuICBJbk1lbW9yeUNhY2hlLFxyXG4gIE5vcm1hbGl6ZWRDYWNoZU9iamVjdCxcclxufSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuLy8gaW1wb3J0IHsgY29uY2F0UGFnaW5hdGlvbiB9IGZyb20gXCJAYXBvbGxvL2NsaWVudC91dGlsaXRpZXNcIjtcclxuaW1wb3J0IG1lcmdlIGZyb20gXCJkZWVwbWVyZ2VcIjtcclxuaW1wb3J0IGlzRXF1YWwgZnJvbSBcImxvZGFzaC9pc0VxdWFsXCI7XHJcbmltcG9ydCB7IFBvc3QgfSBmcm9tIFwiLi4vZ2VuZXJhdGVkL2dyYXBocWxcIjtcclxuaW1wb3J0IHsgSW5jb21pbmdIdHRwSGVhZGVycyB9IGZyb20gXCJodHRwXCI7XHJcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XHJcblxyXG5pbXBvcnQgeyBvbkVycm9yIH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50L2xpbmsvZXJyb3JcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBUE9MTE9fU1RBVEVfUFJPUF9OQU1FID0gXCJfX0FQT0xMT19TVEFURV9fXCI7XHJcblxyXG5sZXQgYXBvbGxvQ2xpZW50OiBBcG9sbG9DbGllbnQ8Tm9ybWFsaXplZENhY2hlT2JqZWN0PjtcclxuXHJcbmludGVyZmFjZSBJQXBvbGxvU3RhdGVQcm9wcyB7XHJcbiAgW0FQT0xMT19TVEFURV9QUk9QX05BTUVdPzogTm9ybWFsaXplZENhY2hlT2JqZWN0O1xyXG59XHJcblxyXG5jb25zdCBlcnJvckxpbmsgPSBvbkVycm9yKChlcnJvcnMpID0+IHtcclxuICBpZiAoXHJcbiAgICBlcnJvcnMuZ3JhcGhRTEVycm9ycyAmJlxyXG4gICAgZXJyb3JzLmdyYXBoUUxFcnJvcnNbMF0uZXh0ZW5zaW9ucz8uY29kZSA9PT0gXCJBVVRIRU5USUNBVEVEXCIgJiZcclxuICAgIGVycm9ycy5yZXNwb25zZVxyXG4gICkge1xyXG4gICAgZXJyb3JzLnJlc3BvbnNlLmVycm9ycyA9IHVuZGVmaW5lZDtcclxuICAgIFJvdXRlci5yZXBsYWNlKFwiL2xvZ2luXCIpO1xyXG4gIH1cclxufSk7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVBcG9sbG9DbGllbnQoaGVhZGVyczogSW5jb21pbmdIdHRwSGVhZGVycyB8IG51bGwgPSBudWxsKSB7XHJcbiAgY29uc3QgZW5oYW5jZWRGZXRjaCA9ICh1cmw6IFJlcXVlc3RJbmZvLCBpbml0OiBSZXF1ZXN0SW5pdCkgPT4ge1xyXG4gICAgcmV0dXJuIGZldGNoKHVybCwge1xyXG4gICAgICAuLi5pbml0LFxyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgLi4uaW5pdC5oZWFkZXJzLFxyXG4gICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luXCI6IFwiKlwiLFxyXG4gICAgICAgIC8vIGhlcmUgd2UgcGFzcyB0aGUgY29va2llIGFsb25nIGZvciBlYWNoIHJlcXVlc3RcclxuICAgICAgICBDb29raWU6IGhlYWRlcnM/LmNvb2tpZSA/PyBcIlwiLFxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgfTtcclxuICBjb25zdCBodHRwTGluayA9IG5ldyBIdHRwTGluayh7XHJcbiAgICB1cmk6XHJcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIlxyXG4gICAgICAgID8gXCJodHRwczovL3NsZWVweS1jYXN0bGUtODEwMTkuaGVyb2t1YXBwLmNvbS9ncmFwaHFsXCIgXHJcbiAgICAgICAgOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9ncmFwaHFsXCIsIC8vIFNlcnZlciBVUkwgKG11c3QgYmUgYWJzb2x1dGUpXHJcbiAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlc1wiLCAvLyBBZGRpdGlvbmFsIGZldGNoKCkgb3B0aW9ucyBsaWtlIGBjcmVkZW50aWFsc2Agb3IgYGhlYWRlcnNgXHJcbiAgICBmZXRjaDogZW5oYW5jZWRGZXRjaCxcclxuICB9KTtcclxuICByZXR1cm4gbmV3IEFwb2xsb0NsaWVudCh7XHJcbiAgICBzc3JNb2RlOiB0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiLFxyXG4gICAgbGluazogZnJvbShbZXJyb3JMaW5rLCBodHRwTGlua10pLFxyXG4gICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKHtcclxuICAgICAgdHlwZVBvbGljaWVzOiB7XHJcbiAgICAgICAgUXVlcnk6IHtcclxuICAgICAgICAgIGZpZWxkczoge1xyXG4gICAgICAgICAgICBwb3N0czoge1xyXG4gICAgICAgICAgICAgIGtleUFyZ3M6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIG1lcmdlKGV4aXN0aW5nLCBpbmNvbWluZykge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJFWElTVElOR1wiLCBleGlzdGluZyk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIklOQ09NSU5HXCIsIGluY29taW5nKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcGFnaW5hdGVkUG9zdHM6IFBvc3RbXSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChleGlzdGluZyAmJiBleGlzdGluZy5wYWdpbmF0ZWRQb3N0cykge1xyXG4gICAgICAgICAgICAgICAgICBwYWdpbmF0ZWRQb3N0cyA9IHBhZ2luYXRlZFBvc3RzLmNvbmNhdChcclxuICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5wYWdpbmF0ZWRQb3N0c1xyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpbmNvbWluZyAmJiBleGlzdGluZy5wYWdpbmF0ZWRQb3N0cykge1xyXG4gICAgICAgICAgICAgICAgICBwYWdpbmF0ZWRQb3N0cyA9IHBhZ2luYXRlZFBvc3RzLmNvbmNhdChcclxuICAgICAgICAgICAgICAgICAgICBpbmNvbWluZy5wYWdpbmF0ZWRQb3N0c1xyXG4gICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uaW5jb21pbmcsIHBhZ2luYXRlZFBvc3RzIH07XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZUFwb2xsbyhcclxuICB7XHJcbiAgICBoZWFkZXJzLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gIH06IHtcclxuICAgIGhlYWRlcnM/OiBJbmNvbWluZ0h0dHBIZWFkZXJzIHwgbnVsbDtcclxuICAgIGluaXRpYWxTdGF0ZT86IE5vcm1hbGl6ZWRDYWNoZU9iamVjdCB8IG51bGw7XHJcbiAgfSA9IHsgaGVhZGVyczogbnVsbCwgaW5pdGlhbFN0YXRlOiBudWxsIH1cclxuKSB7XHJcbiAgY29uc3QgX2Fwb2xsb0NsaWVudCA9IGFwb2xsb0NsaWVudCA/PyBjcmVhdGVBcG9sbG9DbGllbnQoaGVhZGVycyk7XHJcblxyXG4gIC8vIElmIHlvdXIgcGFnZSBoYXMgTmV4dC5qcyBkYXRhIGZldGNoaW5nIG1ldGhvZHMgdGhhdCB1c2UgQXBvbGxvIENsaWVudCwgdGhlIGluaXRpYWwgc3RhdGVcclxuICAvLyBnZXRzIGh5ZHJhdGVkIGhlcmVcclxuICBpZiAoaW5pdGlhbFN0YXRlKSB7XHJcbiAgICAvLyBHZXQgZXhpc3RpbmcgY2FjaGUsIGxvYWRlZCBkdXJpbmcgY2xpZW50IHNpZGUgZGF0YSBmZXRjaGluZ1xyXG4gICAgY29uc3QgZXhpc3RpbmdDYWNoZSA9IF9hcG9sbG9DbGllbnQuZXh0cmFjdCgpO1xyXG5cclxuICAgIC8vIE1lcmdlIHRoZSBleGlzdGluZyBjYWNoZSBpbnRvIGRhdGEgcGFzc2VkIGZyb20gZ2V0U3RhdGljUHJvcHMvZ2V0U2VydmVyU2lkZVByb3BzXHJcbiAgICBjb25zdCBkYXRhID0gbWVyZ2UoaW5pdGlhbFN0YXRlLCBleGlzdGluZ0NhY2hlLCB7XHJcbiAgICAgIC8vIGNvbWJpbmUgYXJyYXlzIHVzaW5nIG9iamVjdCBlcXVhbGl0eSAobGlrZSBpbiBzZXRzKVxyXG4gICAgICBhcnJheU1lcmdlOiAoZGVzdGluYXRpb25BcnJheSwgc291cmNlQXJyYXkpID0+IFtcclxuICAgICAgICAuLi5zb3VyY2VBcnJheSxcclxuICAgICAgICAuLi5kZXN0aW5hdGlvbkFycmF5LmZpbHRlcigoZCkgPT5cclxuICAgICAgICAgIHNvdXJjZUFycmF5LmV2ZXJ5KChzKSA9PiAhaXNFcXVhbChkLCBzKSlcclxuICAgICAgICApLFxyXG4gICAgICBdLFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gUmVzdG9yZSB0aGUgY2FjaGUgd2l0aCB0aGUgbWVyZ2VkIGRhdGFcclxuICAgIF9hcG9sbG9DbGllbnQuY2FjaGUucmVzdG9yZShkYXRhKTtcclxuICB9XHJcbiAgLy8gRm9yIFNTRyBhbmQgU1NSIGFsd2F5cyBjcmVhdGUgYSBuZXcgQXBvbGxvIENsaWVudFxyXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gX2Fwb2xsb0NsaWVudDtcclxuICAvLyBDcmVhdGUgdGhlIEFwb2xsbyBDbGllbnQgb25jZSBpbiB0aGUgY2xpZW50XHJcbiAgaWYgKCFhcG9sbG9DbGllbnQpIGFwb2xsb0NsaWVudCA9IF9hcG9sbG9DbGllbnQ7XHJcblxyXG4gIHJldHVybiBfYXBvbGxvQ2xpZW50O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWRkQXBvbGxvU3RhdGUoXHJcbiAgY2xpZW50OiBBcG9sbG9DbGllbnQ8Tm9ybWFsaXplZENhY2hlT2JqZWN0PixcclxuICBwYWdlUHJvcHM6IHsgcHJvcHM6IElBcG9sbG9TdGF0ZVByb3BzIH1cclxuKSB7XHJcbiAgaWYgKHBhZ2VQcm9wcz8ucHJvcHMpIHtcclxuICAgIHBhZ2VQcm9wcy5wcm9wc1tBUE9MTE9fU1RBVEVfUFJPUF9OQU1FXSA9IGNsaWVudC5jYWNoZS5leHRyYWN0KCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcGFnZVByb3BzO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlQXBvbGxvKHBhZ2VQcm9wczogSUFwb2xsb1N0YXRlUHJvcHMpIHtcclxuICBjb25zdCBzdGF0ZSA9IHBhZ2VQcm9wc1tBUE9MTE9fU1RBVEVfUFJPUF9OQU1FXTtcclxuICBjb25zdCBzdG9yZSA9IHVzZU1lbW8oXHJcbiAgICAoKSA9PiBpbml0aWFsaXplQXBvbGxvKHsgaW5pdGlhbFN0YXRlOiBzdGF0ZSB9KSxcclxuICAgIFtzdGF0ZV1cclxuICApO1xyXG4gIHJldHVybiBzdG9yZTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlTWVtbyIsIkFwb2xsb0NsaWVudCIsImZyb20iLCJIdHRwTGluayIsIkluTWVtb3J5Q2FjaGUiLCJtZXJnZSIsImlzRXF1YWwiLCJmZXRjaCIsIm9uRXJyb3IiLCJSb3V0ZXIiLCJBUE9MTE9fU1RBVEVfUFJPUF9OQU1FIiwiYXBvbGxvQ2xpZW50IiwiZXJyb3JMaW5rIiwiZXJyb3JzIiwiZ3JhcGhRTEVycm9ycyIsImV4dGVuc2lvbnMiLCJjb2RlIiwicmVzcG9uc2UiLCJ1bmRlZmluZWQiLCJyZXBsYWNlIiwiY3JlYXRlQXBvbGxvQ2xpZW50IiwiaGVhZGVycyIsImVuaGFuY2VkRmV0Y2giLCJ1cmwiLCJpbml0IiwiQ29va2llIiwiY29va2llIiwiaHR0cExpbmsiLCJ1cmkiLCJjcmVkZW50aWFscyIsInNzck1vZGUiLCJsaW5rIiwiY2FjaGUiLCJ0eXBlUG9saWNpZXMiLCJRdWVyeSIsImZpZWxkcyIsInBvc3RzIiwia2V5QXJncyIsImV4aXN0aW5nIiwiaW5jb21pbmciLCJwYWdpbmF0ZWRQb3N0cyIsImNvbmNhdCIsImluaXRpYWxpemVBcG9sbG8iLCJpbml0aWFsU3RhdGUiLCJfYXBvbGxvQ2xpZW50IiwiZXhpc3RpbmdDYWNoZSIsImV4dHJhY3QiLCJkYXRhIiwiYXJyYXlNZXJnZSIsImRlc3RpbmF0aW9uQXJyYXkiLCJzb3VyY2VBcnJheSIsImZpbHRlciIsImQiLCJldmVyeSIsInMiLCJyZXN0b3JlIiwiYWRkQXBvbGxvU3RhdGUiLCJjbGllbnQiLCJwYWdlUHJvcHMiLCJwcm9wcyIsInVzZUFwb2xsbyIsInN0YXRlIiwic3RvcmUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/apolloClient.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme */ \"./src/theme.tsx\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_apolloClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/apolloClient */ \"./src/lib/apolloClient.ts\");\n\n\n\n\n\n// const apolloClient = new ApolloClient({\n//   uri: \"http://localhost:4000/graphql\",\n//   cache: new InMemoryCache(),\n//   credentials: \"includes\",\n// });\nfunction MyApp({ Component , pageProps  }) {\n    const apolloClient = (0,_lib_apolloClient__WEBPACK_IMPORTED_MODULE_4__.useApollo)(pageProps);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_apollo_client__WEBPACK_IMPORTED_MODULE_3__.ApolloProvider, {\n        client: apolloClient,\n        __source: {\n            fileName: \"D:\\\\full-stack\\\\client\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 18,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {\n            resetCSS: true,\n            theme: _theme__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n            __source: {\n                fileName: \"D:\\\\full-stack\\\\client\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            },\n            __self: this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n                ...pageProps,\n                __source: {\n                    fileName: \"D:\\\\full-stack\\\\client\\\\src\\\\pages\\\\_app.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                },\n                __self: this\n            })\n        })\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUVyQjtBQUVtQjtBQUNBO0FBRS9DLEVBQTBDO0FBQzFDLEVBQTBDO0FBQzFDLEVBQWdDO0FBQ2hDLEVBQTZCO0FBQzdCLEVBQU07U0FFR0ksS0FBSyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQVcsQ0FBQyxFQUFFLENBQUM7SUFDbEQsS0FBSyxDQUFDQyxZQUFZLEdBQUdKLDREQUFTLENBQUNHLFNBQVM7SUFFeEMsTUFBTSxzRUFDSEosMERBQWM7UUFBQ00sTUFBTSxFQUFFRCxZQUFZOzs7Ozs7O3VGQUNqQ1AsNERBQWM7WUFBQ1MsUUFBUTtZQUFDUixLQUFLLEVBQUVBLDhDQUFLOzs7Ozs7OzJGQUNsQ0ksU0FBUzttQkFBS0MsU0FBUzs7Ozs7Ozs7OztBQUloQyxDQUFDO0FBRUQsaUVBQWVGLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYWtyYVByb3ZpZGVyIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuXHJcbmltcG9ydCB0aGVtZSBmcm9tIFwiLi4vdGhlbWVcIjtcclxuaW1wb3J0IHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcclxuaW1wb3J0IHsgQXBvbGxvUHJvdmlkZXIgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlQXBvbGxvIH0gZnJvbSBcIi4uL2xpYi9hcG9sbG9DbGllbnRcIjtcclxuXHJcbi8vIGNvbnN0IGFwb2xsb0NsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xyXG4vLyAgIHVyaTogXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvZ3JhcGhxbFwiLFxyXG4vLyAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxyXG4vLyAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVzXCIsXHJcbi8vIH0pO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBBcHBQcm9wcykge1xyXG4gIGNvbnN0IGFwb2xsb0NsaWVudCA9IHVzZUFwb2xsbyhwYWdlUHJvcHMpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17YXBvbGxvQ2xpZW50fT5cclxuICAgICAgPENoYWtyYVByb3ZpZGVyIHJlc2V0Q1NTIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L0NoYWtyYVByb3ZpZGVyPlxyXG4gICAgPC9BcG9sbG9Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIl0sIm5hbWVzIjpbIkNoYWtyYVByb3ZpZGVyIiwidGhlbWUiLCJBcG9sbG9Qcm92aWRlciIsInVzZUFwb2xsbyIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiYXBvbGxvQ2xpZW50IiwiY2xpZW50IiwicmVzZXRDU1MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/theme.tsx":
/*!***********************!*\
  !*** ./src/theme.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/theme-tools */ \"@chakra-ui/theme-tools\");\n/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst fonts = {\n    mono: `'Menlo', monospace`\n};\nconst breakpoints = (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.createBreakpoints)({\n    sm: \"40em\",\n    md: \"52em\",\n    lg: \"64em\",\n    xl: \"80em\"\n});\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({\n    colors: {\n        black: \"#16161D\"\n    },\n    fonts,\n    breakpoints\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdGhlbWUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQThDO0FBQ1k7QUFFMUQsS0FBSyxDQUFDRSxLQUFLLEdBQUcsQ0FBQztJQUFDQyxJQUFJLEdBQUcsa0JBQWtCO0FBQUUsQ0FBQztBQUU1QyxLQUFLLENBQUNDLFdBQVcsR0FBR0gseUVBQWlCLENBQUMsQ0FBQztJQUNyQ0ksRUFBRSxFQUFFLENBQU07SUFDVkMsRUFBRSxFQUFFLENBQU07SUFDVkMsRUFBRSxFQUFFLENBQU07SUFDVkMsRUFBRSxFQUFFLENBQU07QUFDWixDQUFDO0FBRUQsS0FBSyxDQUFDQyxLQUFLLEdBQUdULDZEQUFXLENBQUMsQ0FBQztJQUN6QlUsTUFBTSxFQUFFLENBQUM7UUFDUEMsS0FBSyxFQUFFLENBQVM7SUFDbEIsQ0FBQztJQUNEVCxLQUFLO0lBQ0xFLFdBQVc7QUFDYixDQUFDO0FBRUQsaUVBQWVLLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NsaWVudC8uL3NyYy90aGVtZS50c3g/N2M5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBleHRlbmRUaGVtZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IGNyZWF0ZUJyZWFrcG9pbnRzIH0gZnJvbSBcIkBjaGFrcmEtdWkvdGhlbWUtdG9vbHNcIjtcclxuXHJcbmNvbnN0IGZvbnRzID0geyBtb25vOiBgJ01lbmxvJywgbW9ub3NwYWNlYCB9O1xyXG5cclxuY29uc3QgYnJlYWtwb2ludHMgPSBjcmVhdGVCcmVha3BvaW50cyh7XHJcbiAgc206IFwiNDBlbVwiLFxyXG4gIG1kOiBcIjUyZW1cIixcclxuICBsZzogXCI2NGVtXCIsXHJcbiAgeGw6IFwiODBlbVwiLFxyXG59KTtcclxuXHJcbmNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoe1xyXG4gIGNvbG9yczoge1xyXG4gICAgYmxhY2s6IFwiIzE2MTYxRFwiLFxyXG4gIH0sXHJcbiAgZm9udHMsXHJcbiAgYnJlYWtwb2ludHMsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XHJcbiJdLCJuYW1lcyI6WyJleHRlbmRUaGVtZSIsImNyZWF0ZUJyZWFrcG9pbnRzIiwiZm9udHMiLCJtb25vIiwiYnJlYWtwb2ludHMiLCJzbSIsIm1kIiwibGciLCJ4bCIsInRoZW1lIiwiY29sb3JzIiwiYmxhY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/theme.tsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "@apollo/client/link/error":
/*!********************************************!*\
  !*** external "@apollo/client/link/error" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@apollo/client/link/error");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "@chakra-ui/theme-tools":
/*!*****************************************!*\
  !*** external "@chakra-ui/theme-tools" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/theme-tools");

/***/ }),

/***/ "deepmerge":
/*!****************************!*\
  !*** external "deepmerge" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("deepmerge");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "lodash/isEqual":
/*!*********************************!*\
  !*** external "lodash/isEqual" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("lodash/isEqual");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();