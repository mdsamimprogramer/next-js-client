module.exports = [
  "[project]/src/components/Protected.jsx [app-ssr] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => ProtectedPage]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next-auth/react/index.js [app-ssr] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)"
      );
    ("use client");
    function ProtectedPage() {
      const { data: session, status } = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useSession"
      ])();
      const router = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useRouter"
      ])();
      (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useEffect"
      ])(() => {
        if (status === "unauthenticated") {
          router.push("/login");
        }
      }, [status]);
      if (status === "loading")
        return /*#__PURE__*/ (0,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
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
            lineNumber: 17,
            columnNumber: 38,
          },
          this
        );
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        "div",
        {
          children: [
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
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
                lineNumber: 21,
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
                lineNumber: 22,
                columnNumber: 13,
              },
              this
            ),
            /*#__PURE__*/ (0,
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
              "jsxDEV"
            ])(
              "button",
              {
                onClick: () =>
                  (0,
                  __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                    "signOut"
                  ])(),
                children: "Sign Out",
              },
              void 0,
              false,
              {
                fileName: "[project]/src/components/Protected.jsx",
                lineNumber: 23,
                columnNumber: 13,
              },
              this
            ),
          ],
        },
        void 0,
        true,
        {
          fileName: "[project]/src/components/Protected.jsx",
          lineNumber: 20,
          columnNumber: 9,
        },
        this
      );
    }
  },
  "[project]/src/app/dashboard/add-product/page.jsx [app-ssr] (ecmascript)",
  (__turbopack_context__) => {
    "use strict";

    __turbopack_context__.s(["default", () => AddProduct]);
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Protected$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/src/components/Protected.jsx [app-ssr] (ecmascript)"
      );
    var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ =
      __turbopack_context__.i(
        "[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)"
      );
    ("use client");
    function AddProduct() {
      const [form, setForm] = (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "useState"
      ])({
        title: "",
        shortDesc: "",
        fullDesc: "",
        price: "",
        image: "",
      });
      const handleChange = (e) =>
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
      const handleSubmit = async (e) => {
        e.preventDefault();
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
      };
      return /*#__PURE__*/ (0,
      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
        "jsxDEV"
      ])(
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Protected$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
          "default"
        ],
        {
          children: /*#__PURE__*/ (0,
          __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
            "jsxDEV"
          ])(
            "div",
            {
              className: "p-10 max-w-2xl mx-auto",
              children: [
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
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
                    fileName:
                      "[project]/src/app/dashboard/add-product/page.jsx",
                    lineNumber: 23,
                    columnNumber: 17,
                  },
                  this
                ),
                /*#__PURE__*/ (0,
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
                  "jsxDEV"
                ])(
                  "form",
                  {
                    className: "space-y-4",
                    onSubmit: handleSubmit,
                    children: [
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
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
                          fileName:
                            "[project]/src/app/dashboard/add-product/page.jsx",
                          lineNumber: 25,
                          columnNumber: 21,
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
                          name: "shortDesc",
                          placeholder: "Short Description",
                          value: form.shortDesc,
                          onChange: handleChange,
                          className: "border p-2 w-full",
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            "[project]/src/app/dashboard/add-product/page.jsx",
                          lineNumber: 26,
                          columnNumber: 21,
                        },
                        this
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
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
                          fileName:
                            "[project]/src/app/dashboard/add-product/page.jsx",
                          lineNumber: 27,
                          columnNumber: 21,
                        },
                        this
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
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
                          fileName:
                            "[project]/src/app/dashboard/add-product/page.jsx",
                          lineNumber: 28,
                          columnNumber: 21,
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
                          name: "image",
                          placeholder: "Image URL",
                          value: form.image,
                          onChange: handleChange,
                          className: "border p-2 w-full",
                        },
                        void 0,
                        false,
                        {
                          fileName:
                            "[project]/src/app/dashboard/add-product/page.jsx",
                          lineNumber: 29,
                          columnNumber: 21,
                        },
                        this
                      ),
                      /*#__PURE__*/ (0,
                      __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__[
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
                          fileName:
                            "[project]/src/app/dashboard/add-product/page.jsx",
                          lineNumber: 30,
                          columnNumber: 21,
                        },
                        this
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName:
                      "[project]/src/app/dashboard/add-product/page.jsx",
                    lineNumber: 24,
                    columnNumber: 17,
                  },
                  this
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: "[project]/src/app/dashboard/add-product/page.jsx",
              lineNumber: 22,
              columnNumber: 13,
            },
            this
          ),
        },
        void 0,
        false,
        {
          fileName: "[project]/src/app/dashboard/add-product/page.jsx",
          lineNumber: 21,
          columnNumber: 9,
        },
        this
      );
    }
  },
];

//# sourceMappingURL=src_11287116._.js.map
