module.exports = [
  "[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x(
      "next/dist/shared/lib/no-fallback-error.external.js",
      () => require("next/dist/shared/lib/no-fallback-error.external.js")
    );

    module.exports = mod;
  },
  "[project]/src/app/layout.jsx [app-rsc] (ecmascript, Next.js Server Component)",
  (__turbopack_context__) => {
    __turbopack_context__.n(
      __turbopack_context__.i(
        "[project]/src/app/layout.jsx [app-rsc] (ecmascript)"
      )
    );
  },
  "[project]/src/app/items/page.jsx [app-rsc] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => ItemDetailsPage]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/image.js [app-rsc] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)"
      );
    async function ItemDetailsPage({ params }) {
      const { id } = params;
      const router = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        "useRouter"
      ])();
      const res = await fetch(
        `https://server-sage-gamma.vercel.app/api/products/${id}`
      );
      const product = await res.json();
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "div",
        {
          className: "px-4 md:px-20 py-12 bg-green-50 min-h-screen",
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "button",
              {
                className: "mb-4 text-green-600 hover:underline",
                onClick: () => router.back(),
                children: "← Back",
              },
              void 0,
              false,
              {
                fileName: "[project]/src/app/items/page.jsx",
                lineNumber: 13,
                columnNumber: 13,
              },
              this
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className: "bg-white rounded-lg shadow overflow-hidden",
                children: [
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      className: "relative w-full h-64 md:h-96",
                      children: /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                        "jsxDEV"
                      ])(
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                          "default"
                        ],
                        {
                          src: product.image || "/items/default.jpg",
                          alt: product.title,
                          fill: true,
                          className: "object-cover",
                        },
                        void 0,
                        false,
                        {
                          fileName: "[project]/src/app/items/page.jsx",
                          lineNumber: 22,
                          columnNumber: 21,
                        },
                        this
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: "[project]/src/app/items/page.jsx",
                      lineNumber: 21,
                      columnNumber: 17,
                    },
                    this
                  ),
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "div",
                    {
                      className: "p-6",
                      children: [
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "h1",
                          {
                            className: "text-3xl font-bold mb-2",
                            children: product.title,
                          },
                          void 0,
                          false,
                          {
                            fileName: "[project]/src/app/items/page.jsx",
                            lineNumber: 30,
                            columnNumber: 21,
                          },
                          this
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "p",
                          {
                            className: "text-green-700 mb-4",
                            children: product.shortDescription,
                          },
                          void 0,
                          false,
                          {
                            fileName: "[project]/src/app/items/page.jsx",
                            lineNumber: 31,
                            columnNumber: 21,
                          },
                          this
                        ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "p",
                          {
                            className: "text-green-900 font-semibold mb-2",
                            children: ["Price: $", product.price],
                          },
                          void 0,
                          true,
                          {
                            fileName: "[project]/src/app/items/page.jsx",
                            lineNumber: 32,
                            columnNumber: 21,
                          },
                          this
                        ),
                        product.priority &&
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            "p",
                            {
                              className: "text-green-800 mb-2",
                              children: ["Priority: ", product.priority],
                            },
                            void 0,
                            true,
                            {
                              fileName: "[project]/src/app/items/page.jsx",
                              lineNumber: 33,
                              columnNumber: 42,
                            },
                            this
                          ),
                        product.date &&
                          /*#__PURE__*/ (0,
                          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                            "jsxDEV"
                          ])(
                            "p",
                            {
                              className: "text-green-800 mb-2",
                              children: ["Date: ", product.date],
                            },
                            void 0,
                            true,
                            {
                              fileName: "[project]/src/app/items/page.jsx",
                              lineNumber: 34,
                              columnNumber: 38,
                            },
                            this
                          ),
                        /*#__PURE__*/ (0,
                        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__[
                          "jsxDEV"
                        ])(
                          "p",
                          {
                            className: "text-gray-700",
                            children: product.description,
                          },
                          void 0,
                          false,
                          {
                            fileName: "[project]/src/app/items/page.jsx",
                            lineNumber: 35,
                            columnNumber: 21,
                          },
                          this
                        ),
                      ],
                    },
                    void 0,
                    true,
                    {
                      fileName: "[project]/src/app/items/page.jsx",
                      lineNumber: 29,
                      columnNumber: 17,
                    },
                    this
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: "[project]/src/app/items/page.jsx",
                lineNumber: 20,
                columnNumber: 13,
              },
              this
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: "[project]/src/app/items/page.jsx",
          lineNumber: 12,
          columnNumber: 9,
        },
        this
      );
    }
  },
  "[project]/src/app/items/page.jsx [app-rsc] (ecmascript, Next.js Server Component)",
  (__turbopack_context__) => {
    __turbopack_context__.n(
      __turbopack_context__.i(
        "[project]/src/app/items/page.jsx [app-rsc] (ecmascript)"
      )
    );
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7bf55d3d._.js.map
