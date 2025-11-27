module.exports = [
  "[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x(
      "next/dist/server/app-render/action-async-storage.external.js",
      () =>
        require("next/dist/server/app-render/action-async-storage.external.js")
    );

    module.exports = mod;
  },
  "[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x(
      "next/dist/server/app-render/work-unit-async-storage.external.js",
      () =>
        require("next/dist/server/app-render/work-unit-async-storage.external.js")
    );

    module.exports = mod;
  },
  "[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)",
  (__turbopack_context__, module, exports) => {
    const mod = __turbopack_context__.x(
      "next/dist/server/app-render/work-async-storage.external.js",
      () =>
        require("next/dist/server/app-render/work-async-storage.external.js")
    );

    module.exports = mod;
  },
  "[project]/src/components/ProductCard.jsx [app-ssr] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => ProductCard]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/image.js [app-ssr] (ecmascript)"
      );
    function ProductCard({ product }) {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "div",
        {
          className:
            "border p-4 rounded shadow hover:shadow-lg transition transform hover:-translate-y-1",
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className: "relative w-full h-48 mb-2",
                children: /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "default"
                  ],
                  {
                    src: product.image || "/items/default.jpg",
                    alt: product.title,
                    fill: true,
                    className: "object-cover rounded",
                  },
                  void 0,
                  false,
                  {
                    fileName: "[project]/src/components/ProductCard.jsx",
                    lineNumber: 8,
                    columnNumber: 17,
                  },
                  this
                ),
              },
              void 0,
              false,
              {
                fileName: "[project]/src/components/ProductCard.jsx",
                lineNumber: 7,
                columnNumber: 13,
              },
              this
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "h2",
              {
                className: "font-bold text-lg",
                children: product.title,
              },
              void 0,
              false,
              {
                fileName: "[project]/src/components/ProductCard.jsx",
                lineNumber: 15,
                columnNumber: 13,
              },
              this
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "p",
              {
                className: "text-gray-600 text-sm line-clamp-2",
                children: product.shortDescription,
              },
              void 0,
              false,
              {
                fileName: "[project]/src/components/ProductCard.jsx",
                lineNumber: 16,
                columnNumber: 13,
              },
              this
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "p",
              {
                className: "text-green-600 font-semibold mt-1",
                children: ["$", product.price],
              },
              void 0,
              true,
              {
                fileName: "[project]/src/components/ProductCard.jsx",
                lineNumber: 17,
                columnNumber: 13,
              },
              this
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                "default"
              ],
              {
                href: `/items/${product._id}`,
                className:
                  "mt-2 inline-block text-sm text-green-700 hover:underline",
                children: "Details",
              },
              void 0,
              false,
              {
                fileName: "[project]/src/components/ProductCard.jsx",
                lineNumber: 18,
                columnNumber: 13,
              },
              this
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: "[project]/src/components/ProductCard.jsx",
          lineNumber: 6,
          columnNumber: 9,
        },
        this
      );
    }
  },
  "[project]/src/app/items/page.jsx [app-ssr] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => ItemsPage]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/src/components/ProductCard.jsx [app-ssr] (ecmascript)"
      );
    ("use client");
    function ItemsPage() {
      const [products, setProducts] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useState"
      ])([]);
      const [search, setSearch] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useState"
      ])("");
      const router = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useRouter"
      ])();
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useEffect"
      ])(() => {
        fetch("https://server-sage-gamma.vercel.app/api/products")
          .then((res) => res.json())
          .then((data) => setProducts(data));
      }, []);
      const filteredProducts = products.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "div",
        {
          className: "px-6 py-12",
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "h1",
              {
                className: "text-3xl font-bold mb-4",
                children: "Our Items",
              },
              void 0,
              false,
              {
                fileName: "[project]/src/app/items/page.jsx",
                lineNumber: 23,
                columnNumber: 13,
              },
              this
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "input",
              {
                type: "text",
                placeholder: "Search...",
                value: search,
                onChange: (e) => setSearch(e.target.value),
                className: "border p-2 mb-6 w-full md:w-1/3",
              },
              void 0,
              false,
              {
                fileName: "[project]/src/app/items/page.jsx",
                lineNumber: 24,
                columnNumber: 13,
              },
              this
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className: "grid md:grid-cols-3 gap-6",
                children: filteredProducts.map((p) =>
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                      "default"
                    ],
                    {
                      product: p,
                    },
                    p._id,
                    false,
                    {
                      fileName: "[project]/src/app/items/page.jsx",
                      lineNumber: 33,
                      columnNumber: 21,
                    },
                    this
                  )
                ),
              },
              void 0,
              false,
              {
                fileName: "[project]/src/app/items/page.jsx",
                lineNumber: 31,
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
          lineNumber: 22,
          columnNumber: 9,
        },
        this
      );
    }
  },
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9c031a09._.js.map
