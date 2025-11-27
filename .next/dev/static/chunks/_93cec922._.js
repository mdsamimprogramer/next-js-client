(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/dashboard/add-product/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AddProductPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'react-hot-toast'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function AddProductPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(45);
    if ($[0] !== "44fbccce3e850d78ffca93416d885bbf0ef4d9369394ff34d8e0d7e24d9ad8ab") {
        for(let $i = 0; $i < 45; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "44fbccce3e850d78ffca93416d885bbf0ef4d9369394ff34d8e0d7e24d9ad8ab";
    }
    const { status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            title: "",
            shortDescription: "",
            fullDescription: "",
            price: "",
            date: new Date().toISOString().slice(0, 10),
            priority: "",
            image: ""
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    let t2;
    if ($[2] !== router || $[3] !== status) {
        t1 = ({
            "AddProductPage[useEffect()]": ()=>{
                if (status === "unauthenticated") {
                    router.push("/auth/login");
                }
            }
        })["AddProductPage[useEffect()]"];
        t2 = [
            status,
            router
        ];
        $[2] = router;
        $[3] = status;
        $[4] = t1;
        $[5] = t2;
    } else {
        t1 = $[4];
        t2 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[6] !== form) {
        t3 = ({
            "AddProductPage[handleChange]": (e)=>{
                const { name, value } = e.target;
                setForm({
                    ...form,
                    [name]: value
                });
            }
        })["AddProductPage[handleChange]"];
        $[6] = form;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    const handleChange = t3;
    let t4;
    if ($[8] !== form || $[9] !== router) {
        t4 = ({
            "AddProductPage[handleSubmit]": async (e_0)=>{
                e_0.preventDefault();
                if (!form.title || !form.price) {
                    toast.error("Title and Price are required!");
                    return;
                }
                ;
                try {
                    const res = await fetch("http://localhost:5000/products", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(form)
                    });
                    if (res.ok) {
                        toast.success("Product added successfully!");
                        setForm({
                            title: "",
                            shortDescription: "",
                            fullDescription: "",
                            price: "",
                            date: new Date().toISOString().slice(0, 10),
                            priority: "",
                            image: ""
                        });
                        router.push("/items");
                    } else {
                        toast.error("Failed to add product");
                    }
                } catch (t5) {
                    const err = t5;
                    console.error(err);
                    toast.error("Something went wrong!");
                }
            }
        })["AddProductPage[handleSubmit]"];
        $[8] = form;
        $[9] = router;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    const handleSubmit = t4;
    if (status === "loading") {
        let t5;
        if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/add-product/page.jsx",
                lineNumber: 126,
                columnNumber: 12
            }, this);
            $[11] = t5;
        } else {
            t5 = $[11];
        }
        return t5;
    }
    let t5;
    let t6;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Toaster, {
            position: "top-right"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/add-product/page.jsx",
            lineNumber: 136,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-3xl font-bold mb-6",
            children: "Add Product"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/add-product/page.jsx",
            lineNumber: 137,
            columnNumber: 10
        }, this);
        $[12] = t5;
        $[13] = t6;
    } else {
        t5 = $[12];
        t6 = $[13];
    }
    let t7;
    if ($[14] !== form.title || $[15] !== handleChange) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            name: "title",
            placeholder: "Title",
            value: form.title,
            onChange: handleChange,
            className: "w-full p-2 border rounded",
            required: true
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/add-product/page.jsx",
            lineNumber: 146,
            columnNumber: 10
        }, this);
        $[14] = form.title;
        $[15] = handleChange;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    let t8;
    if ($[17] !== form.shortDescription || $[18] !== handleChange) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            name: "shortDescription",
            placeholder: "Short Description",
            value: form.shortDescription,
            onChange: handleChange,
            className: "w-full p-2 border rounded"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/add-product/page.jsx",
            lineNumber: 155,
            columnNumber: 10
        }, this);
        $[17] = form.shortDescription;
        $[18] = handleChange;
        $[19] = t8;
    } else {
        t8 = $[19];
    }
    let t9;
    if ($[20] !== form.fullDescription || $[21] !== handleChange) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
            name: "fullDescription",
            placeholder: "Full Description",
            value: form.fullDescription,
            onChange: handleChange,
            className: "w-full p-2 border rounded",
            rows: 4
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/add-product/page.jsx",
            lineNumber: 164,
            columnNumber: 10
        }, this);
        $[20] = form.fullDescription;
        $[21] = handleChange;
        $[22] = t9;
    } else {
        t9 = $[22];
    }
    let t10;
    if ($[23] !== form.price || $[24] !== handleChange) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "number",
            name: "price",
            placeholder: "Price",
            value: form.price,
            onChange: handleChange,
            className: "w-full p-2 border rounded",
            required: true
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/add-product/page.jsx",
            lineNumber: 173,
            columnNumber: 11
        }, this);
        $[23] = form.price;
        $[24] = handleChange;
        $[25] = t10;
    } else {
        t10 = $[25];
    }
    let t11;
    if ($[26] !== form.date || $[27] !== handleChange) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "date",
            name: "date",
            placeholder: "Date Added",
            value: form.date,
            onChange: handleChange,
            className: "w-full p-2 border rounded"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/add-product/page.jsx",
            lineNumber: 182,
            columnNumber: 11
        }, this);
        $[26] = form.date;
        $[27] = handleChange;
        $[28] = t11;
    } else {
        t11 = $[28];
    }
    let t12;
    if ($[29] !== form.priority || $[30] !== handleChange) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "number",
            name: "priority",
            placeholder: "Priority",
            value: form.priority,
            onChange: handleChange,
            className: "w-full p-2 border rounded"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/add-product/page.jsx",
            lineNumber: 191,
            columnNumber: 11
        }, this);
        $[29] = form.priority;
        $[30] = handleChange;
        $[31] = t12;
    } else {
        t12 = $[31];
    }
    let t13;
    if ($[32] !== form.image || $[33] !== handleChange) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            name: "image",
            placeholder: "Image URL (optional)",
            value: form.image,
            onChange: handleChange,
            className: "w-full p-2 border rounded"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/add-product/page.jsx",
            lineNumber: 200,
            columnNumber: 11
        }, this);
        $[32] = form.image;
        $[33] = handleChange;
        $[34] = t13;
    } else {
        t13 = $[34];
    }
    let t14;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            className: "w-full py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700 transition",
            children: "Submit"
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/add-product/page.jsx",
            lineNumber: 209,
            columnNumber: 11
        }, this);
        $[35] = t14;
    } else {
        t14 = $[35];
    }
    let t15;
    if ($[36] !== handleSubmit || $[37] !== t10 || $[38] !== t11 || $[39] !== t12 || $[40] !== t13 || $[41] !== t7 || $[42] !== t8 || $[43] !== t9) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-4 md:px-20 py-12",
            children: [
                t5,
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "space-y-4 bg-white p-6 rounded shadow",
                    children: [
                        t7,
                        t8,
                        t9,
                        t10,
                        t11,
                        t12,
                        t13,
                        t14
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/add-product/page.jsx",
                    lineNumber: 216,
                    columnNumber: 56
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/add-product/page.jsx",
            lineNumber: 216,
            columnNumber: 11
        }, this);
        $[36] = handleSubmit;
        $[37] = t10;
        $[38] = t11;
        $[39] = t12;
        $[40] = t13;
        $[41] = t7;
        $[42] = t8;
        $[43] = t9;
        $[44] = t15;
    } else {
        t15 = $[44];
    }
    return t15;
}
_s(AddProductPage, "/qS1mSdv5q132tE9VtzEdqp4Mng=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AddProductPage;
var _c;
__turbopack_context__.k.register(_c, "AddProductPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_93cec922._.js.map