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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth/next":
/*!*********************************!*\
  !*** external "next-auth/next" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("next-auth/next");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2F%5B...nextauth%5D&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2Fapi%2Fauth%2F%5B...nextauth%5D.js&middlewareConfigBase64=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2F%5B...nextauth%5D&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2Fapi%2Fauth%2F%5B...nextauth%5D.js&middlewareConfigBase64=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _src_pages_api_auth_nextauth_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/pages/api/auth/[...nextauth].js */ \"(api)/./src/pages/api/auth/[...nextauth].js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_pages_api_auth_nextauth_js__WEBPACK_IMPORTED_MODULE_3__]);\n_src_pages_api_auth_nextauth_js__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_api_auth_nextauth_js__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_api_auth_nextauth_js__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/auth/[...nextauth]\",\n        pathname: \"/api/auth/[...nextauth]\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _src_pages_api_auth_nextauth_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnNyYyUyRnBhZ2VzJTJGYXBpJTJGYXV0aCUyRiU1Qi4uLm5leHRhdXRoJTVELmpzJm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNMO0FBQzFEO0FBQ2tFO0FBQ2xFO0FBQ0EsaUVBQWUsd0VBQUssQ0FBQyw0REFBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyxlQUFlLHdFQUFLLENBQUMsNERBQVE7QUFDcEM7QUFDTyx3QkFBd0IsZ0hBQW1CO0FBQ2xEO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDOztBQUVELHFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tc21hcnRfdmVyMy8/MDAwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlc0FQSVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvcGFnZXMtYXBpL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IGhvaXN0IH0gZnJvbSBcIm5leHQvZGlzdC9idWlsZC90ZW1wbGF0ZXMvaGVscGVyc1wiO1xuLy8gSW1wb3J0IHRoZSB1c2VybGFuZCBjb2RlLlxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi4vc3JjL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanNcIjtcbi8vIFJlLWV4cG9ydCB0aGUgaGFuZGxlciAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgXCJkZWZhdWx0XCIpO1xuLy8gUmUtZXhwb3J0IGNvbmZpZy5cbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgXCJjb25maWdcIik7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc0FQSVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFU19BUEksXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF1cIixcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBhcmVuJ3QgdXNlZCBpbiBwcm9kdWN0aW9uLlxuICAgICAgICBidW5kbGVQYXRoOiBcIlwiLFxuICAgICAgICBmaWxlbmFtZTogXCJcIlxuICAgIH0sXG4gICAgdXNlcmxhbmRcbn0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYWdlcy1hcGkuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2F%5B...nextauth%5D&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2Fapi%2Fauth%2F%5B...nextauth%5D.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].js":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].js ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/next */ \"next-auth/next\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_next__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);\naxios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst BACKEND_ACCESS_TOKEN_LIFETIME = 45 * 60;\nconst BACKEND_REFRESH_TOKEN_LIFETIME = 6 * 24 * 60 * 60;\nconst getCurrentEpochTime = ()=>{\n    return Math.floor(new Date().getTime() / 1000);\n};\nconst SIGN_IN_HANDLERS = {\n    \"credentials\": async (user, account, profile, email, credentials)=>{\n        return true;\n    }\n};\nconst SIGN_IN_PROVIDERS = Object.keys(SIGN_IN_HANDLERS);\nconst authOptions = {\n    secret: process.env.AUTH_SECRET,\n    session: {\n        strategy: \"jwt\",\n        maxAge: BACKEND_REFRESH_TOKEN_LIFETIME\n    },\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            //   id: \"login\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            // The data returned from this function is passed forward as the\n            // `user` variable to the signIn() and jwt() callback\n            async authorize (credentials, req) {\n                try {\n                    const response = await (0,axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n                        url: process.env.NEXTAUTH_BACKEND_URL + \"user/login/\",\n                        method: \"post\",\n                        data: credentials\n                    });\n                    const data = response.data;\n                    console.log(\"data\", data);\n                    if (data) return data;\n                } catch (error) {\n                    console.error(error);\n                }\n                return null;\n            }\n        })\n    ],\n    pages: {\n        signIn: \"/login\"\n    },\n    callbacks: {\n        async signIn ({ user, account, profile, email, credentials }) {\n            // console.log(user, profile);\n            if (!SIGN_IN_PROVIDERS.includes(account.provider)) return false;\n            // try {\n            //   const response = await axios({\n            //     url: process.env.NEXTAUTH_BACKEND_URL + `users/${user.user.pk}`,\n            //     method: \"get\",\n            //     headers: {\n            //           \"Authorization\": 'Bearer '+user.access\n            //       },\n            //   });\n            //   const data = response.data;\n            //   // console.log(\"data\", data);\n            //   if (data) return data;\n            // } catch (error) {\n            //   console.error(error);\n            // }\n            return SIGN_IN_HANDLERS[account.provider](user, account, profile, email, credentials);\n        },\n        async jwt ({ user, token, account }) {\n            // If `user` and `account` are set that means it is a login event\n            // The user is the data returned in signIn\n            if (user && account) {\n                let backendResponse = account.provider === \"credentials\" ? user : account.meta;\n                token[\"user\"] = backendResponse.user;\n                token[\"profile\"] = backendResponse.profile; //it is sent by the CustomLoginView in django/user/views.py\n                token[\"access_token\"] = backendResponse.access;\n                token[\"refresh_token\"] = backendResponse.refresh;\n                token[\"ref\"] = getCurrentEpochTime() + BACKEND_ACCESS_TOKEN_LIFETIME;\n                // console.log(\"backendResponse\", backendResponse);\n                return token;\n            }\n            // Refresh the backend token if necessary\n            if (getCurrentEpochTime() > token[\"ref\"]) {\n                const response = await (0,axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n                    method: \"post\",\n                    url: process.env.NEXTAUTH_BACKEND_URL + \"users/token/refresh/\",\n                    data: {\n                        refresh: token[\"refresh_token\"]\n                    }\n                });\n                token[\"access_token\"] = response.data.access;\n                token[\"refresh_token\"] = response.data.refresh;\n                token[\"ref\"] = getCurrentEpochTime() + BACKEND_ACCESS_TOKEN_LIFETIME;\n            }\n            return token;\n        },\n        // Since we're using Django as the backend we have to pass the JWT\n        // token to the client instead of the `session`.\n        async session ({ token }) {\n            // console.log(\"token in session\", token)\n            // session.user.id = token.user.id\n            return token;\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth_next__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQzRCO0FBQ3hDO0FBRzFCLE1BQU1HLGdDQUFnQyxLQUFHO0FBQ3pDLE1BQU1DLGlDQUFpQyxJQUFFLEtBQUcsS0FBRztBQUUvQyxNQUFNQyxzQkFBc0I7SUFDeEIsT0FBT0MsS0FBS0MsS0FBSyxDQUFDLElBQUlDLE9BQU9DLE9BQU8sS0FBSztBQUM3QztBQUdBLE1BQU1DLG1CQUFtQjtJQUNyQixlQUFlLE9BQU9DLE1BQU1DLFNBQVNDLFNBQVNDLE9BQU9DO1FBQ2pELE9BQU87SUFDWDtBQUNKO0FBRUEsTUFBTUMsb0JBQW9CQyxPQUFPQyxJQUFJLENBQUNSO0FBRS9CLE1BQU1TLGNBQWM7SUFDekJDLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVztJQUMvQkMsU0FBUztRQUNQQyxVQUFVO1FBQ1ZDLFFBQVF0QjtJQUNWO0lBQ0F1QixXQUFXO1FBQ1QxQixzRUFBbUJBLENBQUM7WUFDcEIsaUJBQWlCO1lBQ2ZjLGFBQWE7Z0JBQ1hELE9BQU87b0JBQUNjLE9BQU87b0JBQVNDLE1BQU07Z0JBQU87Z0JBQ3JDQyxVQUFVO29CQUFDRixPQUFPO29CQUFZQyxNQUFNO2dCQUFVO1lBQ2hEO1lBQ0EsZ0VBQWdFO1lBQ2hFLHFEQUFxRDtZQUNyRCxNQUFNRSxXQUFVaEIsV0FBVyxFQUFFaUIsR0FBRztnQkFDOUIsSUFBSTtvQkFDRixNQUFNQyxXQUFXLE1BQU0vQixpREFBS0EsQ0FBQzt3QkFDM0JnQyxLQUFLYixRQUFRQyxHQUFHLENBQUNhLG9CQUFvQixHQUFHO3dCQUN4Q0MsUUFBUTt3QkFDUkMsTUFBTXRCO29CQUNSO29CQUNBLE1BQU1zQixPQUFPSixTQUFTSSxJQUFJO29CQUMxQkMsUUFBUUMsR0FBRyxDQUFDLFFBQVFGO29CQUNwQixJQUFJQSxNQUFNLE9BQU9BO2dCQUNuQixFQUFFLE9BQU9HLE9BQU87b0JBQ2RGLFFBQVFFLEtBQUssQ0FBQ0E7Z0JBQ2hCO2dCQUNBLE9BQU87WUFDVDtRQUNGO0tBQ0Q7SUFDREMsT0FBTztRQUNMQyxRQUFPO0lBRVQ7SUFDQUMsV0FBVztRQUNULE1BQU1ELFFBQU8sRUFBQy9CLElBQUksRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUVDLEtBQUssRUFBRUMsV0FBVyxFQUFDO1lBQ3JELDhCQUE4QjtZQUNoQyxJQUFJLENBQUNDLGtCQUFrQjRCLFFBQVEsQ0FBQ2hDLFFBQVFpQyxRQUFRLEdBQUcsT0FBTztZQUUxRCxRQUFRO1lBQ1IsbUNBQW1DO1lBQ25DLHVFQUF1RTtZQUN2RSxxQkFBcUI7WUFDckIsaUJBQWlCO1lBQ2pCLG1EQUFtRDtZQUNuRCxXQUFXO1lBQ1gsUUFBUTtZQUNSLGdDQUFnQztZQUNoQyxrQ0FBa0M7WUFDbEMsMkJBQTJCO1lBQzNCLG9CQUFvQjtZQUNwQiwwQkFBMEI7WUFDMUIsSUFBSTtZQUVKLE9BQU9uQyxnQkFBZ0IsQ0FBQ0UsUUFBUWlDLFFBQVEsQ0FBQyxDQUN2Q2xDLE1BQU1DLFNBQVNDLFNBQVNDLE9BQU9DO1FBRW5DO1FBQ0EsTUFBTStCLEtBQUksRUFBQ25DLElBQUksRUFBRW9DLEtBQUssRUFBRW5DLE9BQU8sRUFBQztZQUM5QixpRUFBaUU7WUFDakUsMENBQTBDO1lBQzFDLElBQUlELFFBQVFDLFNBQVM7Z0JBQ25CLElBQUlvQyxrQkFBa0JwQyxRQUFRaUMsUUFBUSxLQUFLLGdCQUFnQmxDLE9BQU9DLFFBQVFxQyxJQUFJO2dCQUM5RUYsS0FBSyxDQUFDLE9BQU8sR0FBR0MsZ0JBQWdCckMsSUFBSTtnQkFDcENvQyxLQUFLLENBQUMsVUFBVSxHQUFHQyxnQkFBZ0JuQyxPQUFPLEVBQUUsMkRBQTJEO2dCQUN2R2tDLEtBQUssQ0FBQyxlQUFlLEdBQUdDLGdCQUFnQkUsTUFBTTtnQkFDOUNILEtBQUssQ0FBQyxnQkFBZ0IsR0FBR0MsZ0JBQWdCRyxPQUFPO2dCQUNoREosS0FBSyxDQUFDLE1BQU0sR0FBRzFDLHdCQUF3QkY7Z0JBQ3ZDLG1EQUFtRDtnQkFDbkQsT0FBTzRDO1lBQ1Q7WUFDQSx5Q0FBeUM7WUFDekMsSUFBSTFDLHdCQUF3QjBDLEtBQUssQ0FBQyxNQUFNLEVBQUU7Z0JBQ3hDLE1BQU1kLFdBQVcsTUFBTS9CLGlEQUFLQSxDQUFDO29CQUMzQmtDLFFBQVE7b0JBQ1JGLEtBQUtiLFFBQVFDLEdBQUcsQ0FBQ2Esb0JBQW9CLEdBQUc7b0JBQ3hDRSxNQUFNO3dCQUNKYyxTQUFTSixLQUFLLENBQUMsZ0JBQWdCO29CQUNqQztnQkFDRjtnQkFDQUEsS0FBSyxDQUFDLGVBQWUsR0FBR2QsU0FBU0ksSUFBSSxDQUFDYSxNQUFNO2dCQUM1Q0gsS0FBSyxDQUFDLGdCQUFnQixHQUFHZCxTQUFTSSxJQUFJLENBQUNjLE9BQU87Z0JBQzlDSixLQUFLLENBQUMsTUFBTSxHQUFHMUMsd0JBQXdCRjtZQUN6QztZQUNBLE9BQU80QztRQUNUO1FBQ0Esa0VBQWtFO1FBQ2xFLGdEQUFnRDtRQUNoRCxNQUFNdkIsU0FBUSxFQUFFdUIsS0FBSyxFQUFFO1lBQ25CLHlDQUF5QztZQUN6QyxrQ0FBa0M7WUFDcEMsT0FBT0E7UUFDVDtJQUNGO0FBQ0YsRUFBRTtBQUVGLGlFQUFlL0MscURBQVFBLENBQUNtQixZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1tc21hcnRfdmVyMy8uL3NyYy9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzc4YWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGgvbmV4dFwiO1xuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuXG5jb25zdCBCQUNLRU5EX0FDQ0VTU19UT0tFTl9MSUZFVElNRSA9IDQ1KjYwO1xuY29uc3QgQkFDS0VORF9SRUZSRVNIX1RPS0VOX0xJRkVUSU1FID0gNioyNCo2MCo2MDtcblxuY29uc3QgZ2V0Q3VycmVudEVwb2NoVGltZSA9ICgpID0+IHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApO1xufTtcblxuXG5jb25zdCBTSUdOX0lOX0hBTkRMRVJTID0ge1xuICAgIFwiY3JlZGVudGlhbHNcIjogYXN5bmMgKHVzZXIsIGFjY291bnQsIHByb2ZpbGUsIGVtYWlsLCBjcmVkZW50aWFscykgPT4ge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59O1xuXG5jb25zdCBTSUdOX0lOX1BST1ZJREVSUyA9IE9iamVjdC5rZXlzKFNJR05fSU5fSEFORExFUlMpO1xuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnMgPSB7XG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuQVVUSF9TRUNSRVQsXG4gIHNlc3Npb246IHtcbiAgICBzdHJhdGVneTogXCJqd3RcIixcbiAgICBtYXhBZ2U6IEJBQ0tFTkRfUkVGUkVTSF9UT0tFTl9MSUZFVElNRSxcbiAgfSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ3JlZGVudGlhbHNQcm92aWRlcih7XG4gICAgLy8gICBpZDogXCJsb2dpblwiLFxuICAgICAgY3JlZGVudGlhbHM6IHtcbiAgICAgICAgZW1haWw6IHtsYWJlbDogXCJFbWFpbFwiLCB0eXBlOiBcImVtYWlsXCJ9LFxuICAgICAgICBwYXNzd29yZDoge2xhYmVsOiBcIlBhc3N3b3JkXCIsIHR5cGU6IFwicGFzc3dvcmRcIn1cbiAgICAgIH0sXG4gICAgICAvLyBUaGUgZGF0YSByZXR1cm5lZCBmcm9tIHRoaXMgZnVuY3Rpb24gaXMgcGFzc2VkIGZvcndhcmQgYXMgdGhlXG4gICAgICAvLyBgdXNlcmAgdmFyaWFibGUgdG8gdGhlIHNpZ25JbigpIGFuZCBqd3QoKSBjYWxsYmFja1xuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzLCByZXEpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHtcbiAgICAgICAgICAgIHVybDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfQkFDS0VORF9VUkwgKyBcInVzZXIvbG9naW4vXCIsIC8vbm90ZTogaW4gaW1tc21hcnRfYmFja2VuZF92ZXIyLCBpdCBpcyB1c2Vycy9sb2dpbi8gXG4gICAgICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICAgICAgZGF0YTogY3JlZGVudGlhbHMsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhXCIsIGRhdGEpO1xuICAgICAgICAgIGlmIChkYXRhKSByZXR1cm4gZGF0YTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0sXG4gICAgfSksXG4gIF0sXG4gIHBhZ2VzOiB7XG4gICAgc2lnbkluOicvbG9naW4nLFxuICAgIC8vc2lnbk91dDonL2FwaS9hdXRoL3NpZ25vdXQnLCAvL2l0IGlzIHRoZSByZXN0IGFwaSBvZiBOZXh0QXV0aDsgd2hlbiBjYWxsIHNpZ25PdXQoKSwgdGhpcyBwYWdlIHdpbGwgYmUgdmlzaXRlZCBhbmQgbG9nIG91dCB0aGUgdXNlciBhbmQgYmFjayB0byB0aGUgY3VycmVudCBwYWdlIGF1dG9tYXRpY2FsbHkuXG4gIH0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIHNpZ25Jbih7dXNlciwgYWNjb3VudCwgcHJvZmlsZSwgZW1haWwsIGNyZWRlbnRpYWxzfSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh1c2VyLCBwcm9maWxlKTtcbiAgICAgIGlmICghU0lHTl9JTl9QUk9WSURFUlMuaW5jbHVkZXMoYWNjb3VudC5wcm92aWRlcikpIHJldHVybiBmYWxzZTtcblxuICAgICAgLy8gdHJ5IHtcbiAgICAgIC8vICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7XG4gICAgICAvLyAgICAgdXJsOiBwcm9jZXNzLmVudi5ORVhUQVVUSF9CQUNLRU5EX1VSTCArIGB1c2Vycy8ke3VzZXIudXNlci5wa31gLFxuICAgICAgLy8gICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgIC8vICAgICBoZWFkZXJzOiB7XG4gICAgICAvLyAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6ICdCZWFyZXIgJyt1c2VyLmFjY2Vzc1xuICAgICAgLy8gICAgICAgfSxcbiAgICAgIC8vICAgfSk7XG4gICAgICAvLyAgIGNvbnN0IGRhdGEgPSByZXNwb25zZS5kYXRhO1xuICAgICAgLy8gICAvLyBjb25zb2xlLmxvZyhcImRhdGFcIiwgZGF0YSk7XG4gICAgICAvLyAgIGlmIChkYXRhKSByZXR1cm4gZGF0YTtcbiAgICAgIC8vIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgLy8gfVxuXG4gICAgICByZXR1cm4gU0lHTl9JTl9IQU5ETEVSU1thY2NvdW50LnByb3ZpZGVyXShcbiAgICAgICAgdXNlciwgYWNjb3VudCwgcHJvZmlsZSwgZW1haWwsIGNyZWRlbnRpYWxzXG4gICAgICApO1xuICAgIH0sXG4gICAgYXN5bmMgand0KHt1c2VyLCB0b2tlbiwgYWNjb3VudH0pIHtcbiAgICAgIC8vIElmIGB1c2VyYCBhbmQgYGFjY291bnRgIGFyZSBzZXQgdGhhdCBtZWFucyBpdCBpcyBhIGxvZ2luIGV2ZW50XG4gICAgICAvLyBUaGUgdXNlciBpcyB0aGUgZGF0YSByZXR1cm5lZCBpbiBzaWduSW5cbiAgICAgIGlmICh1c2VyICYmIGFjY291bnQpIHtcbiAgICAgICAgbGV0IGJhY2tlbmRSZXNwb25zZSA9IGFjY291bnQucHJvdmlkZXIgPT09IFwiY3JlZGVudGlhbHNcIiA/IHVzZXIgOiBhY2NvdW50Lm1ldGE7XG4gICAgICAgIHRva2VuW1widXNlclwiXSA9IGJhY2tlbmRSZXNwb25zZS51c2VyO1xuICAgICAgICB0b2tlbltcInByb2ZpbGVcIl0gPSBiYWNrZW5kUmVzcG9uc2UucHJvZmlsZTsgLy9pdCBpcyBzZW50IGJ5IHRoZSBDdXN0b21Mb2dpblZpZXcgaW4gZGphbmdvL3VzZXIvdmlld3MucHlcbiAgICAgICAgdG9rZW5bXCJhY2Nlc3NfdG9rZW5cIl0gPSBiYWNrZW5kUmVzcG9uc2UuYWNjZXNzO1xuICAgICAgICB0b2tlbltcInJlZnJlc2hfdG9rZW5cIl0gPSBiYWNrZW5kUmVzcG9uc2UucmVmcmVzaDtcbiAgICAgICAgdG9rZW5bXCJyZWZcIl0gPSBnZXRDdXJyZW50RXBvY2hUaW1lKCkgKyBCQUNLRU5EX0FDQ0VTU19UT0tFTl9MSUZFVElNRTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJiYWNrZW5kUmVzcG9uc2VcIiwgYmFja2VuZFJlc3BvbnNlKTtcbiAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgfVxuICAgICAgLy8gUmVmcmVzaCB0aGUgYmFja2VuZCB0b2tlbiBpZiBuZWNlc3NhcnlcbiAgICAgIGlmIChnZXRDdXJyZW50RXBvY2hUaW1lKCkgPiB0b2tlbltcInJlZlwiXSkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHtcbiAgICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICAgIHVybDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfQkFDS0VORF9VUkwgKyBcInVzZXJzL3Rva2VuL3JlZnJlc2gvXCIsXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgcmVmcmVzaDogdG9rZW5bXCJyZWZyZXNoX3Rva2VuXCJdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICB0b2tlbltcImFjY2Vzc190b2tlblwiXSA9IHJlc3BvbnNlLmRhdGEuYWNjZXNzO1xuICAgICAgICB0b2tlbltcInJlZnJlc2hfdG9rZW5cIl0gPSByZXNwb25zZS5kYXRhLnJlZnJlc2g7XG4gICAgICAgIHRva2VuW1wicmVmXCJdID0gZ2V0Q3VycmVudEVwb2NoVGltZSgpICsgQkFDS0VORF9BQ0NFU1NfVE9LRU5fTElGRVRJTUU7XG4gICAgICB9XG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSxcbiAgICAvLyBTaW5jZSB3ZSdyZSB1c2luZyBEamFuZ28gYXMgdGhlIGJhY2tlbmQgd2UgaGF2ZSB0byBwYXNzIHRoZSBKV1RcbiAgICAvLyB0b2tlbiB0byB0aGUgY2xpZW50IGluc3RlYWQgb2YgdGhlIGBzZXNzaW9uYC5cbiAgICBhc3luYyBzZXNzaW9uKHsgdG9rZW4gfSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRva2VuIGluIHNlc3Npb25cIiwgdG9rZW4pXG4gICAgICAgIC8vIHNlc3Npb24udXNlci5pZCA9IHRva2VuLnVzZXIuaWRcbiAgICAgIHJldHVybiB0b2tlblxuICAgIH0sXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKGF1dGhPcHRpb25zKTsiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiYXhpb3MiLCJCQUNLRU5EX0FDQ0VTU19UT0tFTl9MSUZFVElNRSIsIkJBQ0tFTkRfUkVGUkVTSF9UT0tFTl9MSUZFVElNRSIsImdldEN1cnJlbnRFcG9jaFRpbWUiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwiZ2V0VGltZSIsIlNJR05fSU5fSEFORExFUlMiLCJ1c2VyIiwiYWNjb3VudCIsInByb2ZpbGUiLCJlbWFpbCIsImNyZWRlbnRpYWxzIiwiU0lHTl9JTl9QUk9WSURFUlMiLCJPYmplY3QiLCJrZXlzIiwiYXV0aE9wdGlvbnMiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiQVVUSF9TRUNSRVQiLCJzZXNzaW9uIiwic3RyYXRlZ3kiLCJtYXhBZ2UiLCJwcm92aWRlcnMiLCJsYWJlbCIsInR5cGUiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsInJlcSIsInJlc3BvbnNlIiwidXJsIiwiTkVYVEFVVEhfQkFDS0VORF9VUkwiLCJtZXRob2QiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwicGFnZXMiLCJzaWduSW4iLCJjYWxsYmFja3MiLCJpbmNsdWRlcyIsInByb3ZpZGVyIiwiand0IiwidG9rZW4iLCJiYWNrZW5kUmVzcG9uc2UiLCJtZXRhIiwiYWNjZXNzIiwicmVmcmVzaCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fauth%2F%5B...nextauth%5D&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2Fapi%2Fauth%2F%5B...nextauth%5D.js&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();