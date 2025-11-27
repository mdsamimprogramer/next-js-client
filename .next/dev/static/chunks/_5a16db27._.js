(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  typeof document === "object" ? document.currentScript : undefined,
  "[project]/src/components/Protected.jsx [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => ProtectedPage]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/navigation.js [app-client] (ecmascript)"
      );
    var _s = __turbopack_context__.k.signature();
    ("use client");
    function ProtectedPage() {
      _s();
      const $ = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "c"
      ])(14);
      if (
        $[0] !==
        "b13eb6867e48907f7e464942eb490d01f483be1310d151967b5985c2c07e9f1a"
      ) {
        for (let $i = 0; $i < 14; $i += 1) {
          $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] =
          "b13eb6867e48907f7e464942eb490d01f483be1310d151967b5985c2c07e9f1a";
      }
      const { data: session, status } = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useSession"
      ])();
      const router = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useRouter"
      ])();
      let t0;
      if ($[1] !== router || $[2] !== status) {
        t0 = {
          "ProtectedPage[useEffect()]": () => {
            if (status === "unauthenticated") {
              router.push("/login");
            }
          },
        }["ProtectedPage[useEffect()]"];
        $[1] = router;
        $[2] = status;
        $[3] = t0;
      } else {
        t0 = $[3];
      }
      let t1;
      if ($[4] !== status) {
        t1 = [status];
        $[4] = status;
        $[5] = t1;
      } else {
        t1 = $[5];
      }
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useEffect"
      ])(t0, t1);
      if (status === "loading") {
        let t2;
        if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
          t2 = /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            "p",
            {
              children: "Loading...",
            },
            void 0,
            false,
            {
              fileName: "[project]/src/components/Protected.jsx",
              lineNumber: 47,
              columnNumber: 12,
            },
            this
          );
          $[6] = t2;
        } else {
          t2 = $[6];
        }
        return t2;
      }
      let t2;
      if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "h1",
          {
            children: "Protected Page",
          },
          void 0,
          false,
          {
            fileName: "[project]/src/components/Protected.jsx",
            lineNumber: 56,
            columnNumber: 10,
          },
          this
        );
        $[7] = t2;
      } else {
        t2 = $[7];
      }
      let t3;
      if ($[8] !== session.user.email || $[9] !== session.user.name) {
        t3 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "p",
          {
            children: [
              "Welcome, ",
              session.user.name,
              " (",
              session.user.email,
              ")",
            ],
          },
          void 0,
          true,
          {
            fileName: "[project]/src/components/Protected.jsx",
            lineNumber: 63,
            columnNumber: 10,
          },
          this
        );
        $[8] = session.user.email;
        $[9] = session.user.name;
        $[10] = t3;
      } else {
        t3 = $[10];
      }
      let t4;
      if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "button",
          {
            onClick: _ProtectedPageButtonOnClick,
            children: "Sign Out",
          },
          void 0,
          false,
          {
            fileName: "[project]/src/components/Protected.jsx",
            lineNumber: 72,
            columnNumber: 10,
          },
          this
        );
        $[11] = t4;
      } else {
        t4 = $[11];
      }
      let t5;
      if ($[12] !== t3) {
        t5 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "div",
          {
            children: [t2, t3, t4],
          },
          void 0,
          true,
          {
            fileName: "[project]/src/components/Protected.jsx",
            lineNumber: 79,
            columnNumber: 10,
          },
          this
        );
        $[12] = t3;
        $[13] = t5;
      } else {
        t5 = $[13];
      }
      return t5;
    }
    _s(ProtectedPage, "ug7ogrOO78DgBn6/BNSLucNHJac=", false, function () {
      return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "useSession"
        ],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "useRouter"
        ],
      ];
    });
    _c = ProtectedPage;
    function _ProtectedPageButtonOnClick() {
      return (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "signOut"
      ])();
    }
    var _c;
    __turbopack_context__.k.register(_c, "ProtectedPage");
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
  "[project]/src/app/dashboard/add-product/page.jsx [app-client] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => AddProduct]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Protected$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/src/components/Protected.jsx [app-client] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"
      );
    var _s = __turbopack_context__.k.signature();
    ("use client");
    function AddProduct() {
      _s();
      const $ = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "c"
      ])(30);
      if (
        $[0] !==
        "3db0da6a87b0218618a6a8fd3eb2a6eaeda9147986e572ce31ba1de495941f38"
      ) {
        for (let $i = 0; $i < 30; $i += 1) {
          $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] =
          "3db0da6a87b0218618a6a8fd3eb2a6eaeda9147986e572ce31ba1de495941f38";
      }
      let t0;
      if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
          title: "",
          shortDesc: "",
          fullDesc: "",
          price: "",
          image: "",
        };
        $[1] = t0;
      } else {
        t0 = $[1];
      }
      const [form, setForm] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
        "useState"
      ])(t0);
      let t1;
      if ($[2] !== form) {
        t1 = {
          "AddProduct[handleChange]": (e) =>
            setForm({
              ...form,
              [e.target.name]: e.target.value,
            }),
        }["AddProduct[handleChange]"];
        $[2] = form;
        $[3] = t1;
      } else {
        t1 = $[3];
      }
      const handleChange = t1;
      let t2;
      if ($[4] !== form) {
        t2 = {
          "AddProduct[handleSubmit]": async (e_0) => {
            e_0.preventDefault();
            await fetch("https://server-sage-gamma.vercel.app/api/products", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(form),
            });
            alert("Product added!");
            setForm({
              title: "",
              shortDesc: "",
              fullDesc: "",
              price: "",
              image: "",
            });
          },
        }["AddProduct[handleSubmit]"];
        $[4] = form;
        $[5] = t2;
      } else {
        t2 = $[5];
      }
      const handleSubmit = t2;
      let t3;
      if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "h1",
          {
            className: "text-2xl font-bold mb-4",
            children: "Add Product",
          },
          void 0,
          false,
          {
            fileName: "[project]/src/app/dashboard/add-product/page.jsx",
            lineNumber: 72,
            columnNumber: 10,
          },
          this
        );
        $[6] = t3;
      } else {
        t3 = $[6];
      }
      let t4;
      if ($[7] !== form.title || $[8] !== handleChange) {
        t4 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "input",
          {
            type: "text",
            name: "title",
            placeholder: "Title",
            value: form.title,
            onChange: handleChange,
            className: "border p-2 w-full",
          },
          void 0,
          false,
          {
            fileName: "[project]/src/app/dashboard/add-product/page.jsx",
            lineNumber: 79,
            columnNumber: 10,
          },
          this
        );
        $[7] = form.title;
        $[8] = handleChange;
        $[9] = t4;
      } else {
        t4 = $[9];
      }
      let t5;
      if ($[10] !== form.shortDesc || $[11] !== handleChange) {
        t5 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "input",
          {
            type: "text",
            name: "shortDesc",
            placeholder: "Short Description",
            value: form.shortDesc,
            onChange: handleChange,
            className: "border p-2 w-full",
          },
          void 0,
          false,
          {
            fileName: "[project]/src/app/dashboard/add-product/page.jsx",
            lineNumber: 88,
            columnNumber: 10,
          },
          this
        );
        $[10] = form.shortDesc;
        $[11] = handleChange;
        $[12] = t5;
      } else {
        t5 = $[12];
      }
      let t6;
      if ($[13] !== form.fullDesc || $[14] !== handleChange) {
        t6 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "textarea",
          {
            name: "fullDesc",
            placeholder: "Full Description",
            value: form.fullDesc,
            onChange: handleChange,
            className: "border p-2 w-full",
          },
          void 0,
          false,
          {
            fileName: "[project]/src/app/dashboard/add-product/page.jsx",
            lineNumber: 97,
            columnNumber: 10,
          },
          this
        );
        $[13] = form.fullDesc;
        $[14] = handleChange;
        $[15] = t6;
      } else {
        t6 = $[15];
      }
      let t7;
      if ($[16] !== form.price || $[17] !== handleChange) {
        t7 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "input",
          {
            type: "number",
            name: "price",
            placeholder: "Price",
            value: form.price,
            onChange: handleChange,
            className: "border p-2 w-full",
          },
          void 0,
          false,
          {
            fileName: "[project]/src/app/dashboard/add-product/page.jsx",
            lineNumber: 106,
            columnNumber: 10,
          },
          this
        );
        $[16] = form.price;
        $[17] = handleChange;
        $[18] = t7;
      } else {
        t7 = $[18];
      }
      let t8;
      if ($[19] !== form.image || $[20] !== handleChange) {
        t8 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "input",
          {
            type: "text",
            name: "image",
            placeholder: "Image URL",
            value: form.image,
            onChange: handleChange,
            className: "border p-2 w-full",
          },
          void 0,
          false,
          {
            fileName: "[project]/src/app/dashboard/add-product/page.jsx",
            lineNumber: 115,
            columnNumber: 10,
          },
          this
        );
        $[19] = form.image;
        $[20] = handleChange;
        $[21] = t8;
      } else {
        t8 = $[21];
      }
      let t9;
      if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          "button",
          {
            type: "submit",
            className:
              "px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700",
            children: "Submit",
          },
          void 0,
          false,
          {
            fileName: "[project]/src/app/dashboard/add-product/page.jsx",
            lineNumber: 124,
            columnNumber: 10,
          },
          this
        );
        $[22] = t9;
      } else {
        t9 = $[22];
      }
      let t10;
      if (
        $[23] !== handleSubmit ||
        $[24] !== t4 ||
        $[25] !== t5 ||
        $[26] !== t6 ||
        $[27] !== t7 ||
        $[28] !== t8
      ) {
        t10 = /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
          "jsxDEV"
        ])(
          __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Protected$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
            "default"
          ],
          {
            children: /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "div",
              {
                className: "p-10 max-w-2xl mx-auto",
                children: [
                  t3,
                  /*#__PURE__*/ (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__[
                    "jsxDEV"
                  ])(
                    "form",
                    {
                      className: "space-y-4",
                      onSubmit: handleSubmit,
                      children: [t4, t5, t6, t7, t8, t9],
                    },
                    void 0,
                    true,
                    {
                      fileName:
                        "[project]/src/app/dashboard/add-product/page.jsx",
                      lineNumber: 131,
                      columnNumber: 66,
                    },
                    this
                  ),
                ],
              },
              void 0,
              true,
              {
                fileName: "[project]/src/app/dashboard/add-product/page.jsx",
                lineNumber: 131,
                columnNumber: 22,
              },
              this
            ),
          },
          void 0,
          false,
          {
            fileName: "[project]/src/app/dashboard/add-product/page.jsx",
            lineNumber: 131,
            columnNumber: 11,
          },
          this
        );
        $[23] = handleSubmit;
        $[24] = t4;
        $[25] = t5;
        $[26] = t6;
        $[27] = t7;
        $[28] = t8;
        $[29] = t10;
      } else {
        t10 = $[29];
      }
      return t10;
    }
    _s(AddProduct, "qRhQ5M6AHSy+bt5oF1mOyp/jpYQ=");
    _c = AddProduct;
    var _c;
    __turbopack_context__.k.register(_c, "AddProduct");
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

//# sourceMappingURL=_5a16db27._.js.map
