(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  typeof document === "object" ? document.currentScript : undefined,
  "[project]/src/components/ProductCard.jsx [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => ProductCard]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)"
      );
    function ProductCard(t0) {
      const $ = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "c"
      ])(18);
      if (
        $[0] !==
        "2ff0005e12ea18943be66bfb5fdf04f96ec261ff0b29747f8e7e9eb6b6e70695"
      ) {
        for (let $i = 0; $i < 18; $i += 1) {
          $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] =
          "2ff0005e12ea18943be66bfb5fdf04f96ec261ff0b29747f8e7e9eb6b6e70695";
      }
      const { product } = t0;
      let t1;
      if ($[1] !== product.image || $[2] !== product.title) {
        t1 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "img",
          {
            src: product.image,
            alt: product.title,
            className: "h-48 w-full object-cover rounded mb-2",
          },
          void 0,
          false,
          {
            fileName: "[project]/src/components/ProductCard.jsx",
            lineNumber: 16,
            columnNumber: 10,
          },
          this
        );
        $[1] = product.image;
        $[2] = product.title;
        $[3] = t1;
      } else {
        t1 = $[3];
      }
      let t2;
      if ($[4] !== product.title) {
        t2 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
            lineNumber: 25,
            columnNumber: 10,
          },
          this
        );
        $[4] = product.title;
        $[5] = t2;
      } else {
        t2 = $[5];
      }
      let t3;
      if ($[6] !== product.shortDesc) {
        t3 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "p",
          {
            className: "text-gray-600 text-sm",
            children: product.shortDesc,
          },
          void 0,
          false,
          {
            fileName: "[project]/src/components/ProductCard.jsx",
            lineNumber: 33,
            columnNumber: 10,
          },
          this
        );
        $[6] = product.shortDesc;
        $[7] = t3;
      } else {
        t3 = $[7];
      }
      let t4;
      if ($[8] !== product.price) {
        t4 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
            lineNumber: 41,
            columnNumber: 10,
          },
          this
        );
        $[8] = product.price;
        $[9] = t4;
      } else {
        t4 = $[9];
      }
      const t5 = `/items/${product._id}`;
      let t6;
      if ($[10] !== t5) {
        t6 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "default"
          ],
          {
            href: t5,
            className:
              "mt-2 inline-block text-sm text-green-700 hover:underline",
            children: "Details",
          },
          void 0,
          false,
          {
            fileName: "[project]/src/components/ProductCard.jsx",
            lineNumber: 50,
            columnNumber: 10,
          },
          this
        );
        $[10] = t5;
        $[11] = t6;
      } else {
        t6 = $[11];
      }
      let t7;
      if (
        $[12] !== t1 ||
        $[13] !== t2 ||
        $[14] !== t3 ||
        $[15] !== t4 ||
        $[16] !== t6
      ) {
        t7 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "div",
          {
            className: "border p-4 rounded shadow hover:shadow-lg",
            children: [t1, t2, t3, t4, t6],
          },
          void 0,
          true,
          {
            fileName: "[project]/src/components/ProductCard.jsx",
            lineNumber: 58,
            columnNumber: 10,
          },
          this
        );
        $[12] = t1;
        $[13] = t2;
        $[14] = t3;
        $[15] = t4;
        $[16] = t6;
        $[17] = t7;
      } else {
        t7 = $[17];
      }
      return t7;
    }
    _c = ProductCard;
    var _c;
    __turbopack_context__.k.register(_c, "ProductCard");
    if (
      typeof globalThis.$RefreshHelpers$ === "object" &&
      globalThis.$RefreshHelpers !== null
    ) {
      __turbopack_context__.k.registerExports(
        __turbopack_context__.m,
        globalThis.$RefreshHelpers$
      );
    }
  },
  "[project]/src/app/items/page.jsx [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => ItemsPage]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/navigation.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/src/components/ProductCard.jsx [app-client] (ecmascript)"
      );
    var _s = __turbopack_context__.k.signature();
    ("use client");
    function ItemsPage() {
      _s();
      const $ = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "c"
      ])(25);
      if (
        $[0] !==
        "fa46da3060b3143f3840c624cd0a5951cefd0d136ef96cfecc3728fb209a1533"
      ) {
        for (let $i = 0; $i < 25; $i += 1) {
          $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] =
          "fa46da3060b3143f3840c624cd0a5951cefd0d136ef96cfecc3728fb209a1533";
      }
      let t0;
      if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
      } else {
        t0 = $[1];
      }
      const [products, setProducts] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useState"
      ])(t0);
      const [search, setSearch] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useState"
      ])("");
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useRouter"
      ])();
      let t1;
      let t2;
      if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
          "ItemsPage[useEffect()]": () => {
            fetch("https://server-sage-gamma.vercel.app/api/products")
              .then(_ItemsPageUseEffectAnonymous)
              .then(
                {
                  "ItemsPage[useEffect() > (anonymous)()]": (data) =>
                    setProducts(data),
                }["ItemsPage[useEffect() > (anonymous)()]"]
              );
          },
        }["ItemsPage[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
      } else {
        t1 = $[2];
        t2 = $[3];
      }
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useEffect"
      ])(t1, t2);
      let t3;
      let t4;
      let t5;
      let t6;
      let t7;
      if ($[4] !== products || $[5] !== search) {
        let t8;
        if ($[11] !== search) {
          t8 = {
            "ItemsPage[products.filter()]": (p) =>
              p.title.toLowerCase().includes(search.toLowerCase()),
          }["ItemsPage[products.filter()]"];
          $[11] = search;
          $[12] = t8;
        } else {
          t8 = $[12];
        }
        const filteredProducts = products.filter(t8);
        t5 = "px-6 py-12";
        if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
          t6 = /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
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
              lineNumber: 62,
              columnNumber: 12,
            },
            this
          );
          $[13] = t6;
        } else {
          t6 = $[13];
        }
        let t9;
        if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
          t9 = {
            "ItemsPage[<input>.onChange]": (e) => setSearch(e.target.value),
          }["ItemsPage[<input>.onChange]"];
          $[14] = t9;
        } else {
          t9 = $[14];
        }
        if ($[15] !== search) {
          t7 = /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            "input",
            {
              type: "text",
              placeholder: "Search...",
              value: search,
              onChange: t9,
              className: "border p-2 mb-6 w-full md:w-1/3",
            },
            void 0,
            false,
            {
              fileName: "[project]/src/app/items/page.jsx",
              lineNumber: 77,
              columnNumber: 12,
            },
            this
          );
          $[15] = search;
          $[16] = t7;
        } else {
          t7 = $[16];
        }
        t3 = "grid md:grid-cols-3 gap-6";
        t4 = filteredProducts.map(_ItemsPageFilteredProductsMap);
        $[4] = products;
        $[5] = search;
        $[6] = t3;
        $[7] = t4;
        $[8] = t5;
        $[9] = t6;
        $[10] = t7;
      } else {
        t3 = $[6];
        t4 = $[7];
        t5 = $[8];
        t6 = $[9];
        t7 = $[10];
      }
      let t8;
      if ($[17] !== t3 || $[18] !== t4) {
        t8 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "div",
          {
            className: t3,
            children: t4,
          },
          void 0,
          false,
          {
            fileName: "[project]/src/app/items/page.jsx",
            lineNumber: 101,
            columnNumber: 10,
          },
          this
        );
        $[17] = t3;
        $[18] = t4;
        $[19] = t8;
      } else {
        t8 = $[19];
      }
      let t9;
      if ($[20] !== t5 || $[21] !== t6 || $[22] !== t7 || $[23] !== t8) {
        t9 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "div",
          {
            className: t5,
            children: [t6, t7, t8],
          },
          void 0,
          true,
          {
            fileName: "[project]/src/app/items/page.jsx",
            lineNumber: 110,
            columnNumber: 10,
          },
          this
        );
        $[20] = t5;
        $[21] = t6;
        $[22] = t7;
        $[23] = t8;
        $[24] = t9;
      } else {
        t9 = $[24];
      }
      return t9;
    }
    _s(ItemsPage, "Pkt7SPG7PiIEJrt8Mc7WEVnn9sU=", false, function () {
      return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "useRouter"
        ],
      ];
    });
    _c = ItemsPage;
    function _ItemsPageFilteredProductsMap(p_0) {
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProductCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "default"
        ],
        {
          product: p_0,
        },
        p_0._id,
        false,
        {
          fileName: "[project]/src/app/items/page.jsx",
          lineNumber: 122,
          columnNumber: 10,
        },
        this
      );
    }
    function _ItemsPageUseEffectAnonymous(res) {
      return res.json();
    }
    var _c;
    __turbopack_context__.k.register(_c, "ItemsPage");
    if (
      typeof globalThis.$RefreshHelpers$ === "object" &&
      globalThis.$RefreshHelpers !== null
    ) {
      __turbopack_context__.k.registerExports(
        __turbopack_context__.m,
        globalThis.$RefreshHelpers$
      );
    }
  },
  "[project]/node_modules/next/navigation.js [app-client] (ecmascript)",
  (__turbopack_context__, module, exports) => {
    module.exports = __turbopack_context__.r(
      "[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)"
    );
  },
]);

//# sourceMappingURL=_188dd0f6._.js.map
