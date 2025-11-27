(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/items/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ItemsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ItemsPage() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(50);
    if ($[0] !== "6f17e8fc7f10fc66cb29e82af23f210e323ca75a04f194afa33ec6192125f10c") {
        for(let $i = 0; $i < 50; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6f17e8fc7f10fc66cb29e82af23f210e323ca75a04f194afa33ec6192125f10c";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [products, setProducts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [category, setCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "ItemsPage[useEffect()]": ()=>{
                fetch("http://localhost:5000/products").then(_ItemsPageUseEffectAnonymous).then({
                    "ItemsPage[useEffect() > (anonymous)()]": (data)=>setProducts(data)
                }["ItemsPage[useEffect() > (anonymous)()]"]).catch(_ItemsPageUseEffectAnonymous2).finally({
                    "ItemsPage[useEffect() > (anonymous)()]": ()=>setLoading(false)
                }["ItemsPage[useEffect() > (anonymous)()]"]);
            }
        })["ItemsPage[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t10;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[4] !== category || $[5] !== loading || $[6] !== products || $[7] !== router || $[8] !== search) {
        let t11;
        if ($[17] !== category || $[18] !== search) {
            t11 = ({
                "ItemsPage[products.filter()]": (p)=>{
                    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
                    const matchesCategory = category ? p.category === category : true;
                    return matchesSearch && matchesCategory;
                }
            })["ItemsPage[products.filter()]"];
            $[17] = category;
            $[18] = search;
            $[19] = t11;
        } else {
            t11 = $[19];
        }
        const filteredProducts = products.filter(t11);
        let t12;
        if ($[20] !== products) {
            t12 = Array.from(new Set(products.map(_ItemsPageProductsMap)));
            $[20] = products;
            $[21] = t12;
        } else {
            t12 = $[21];
        }
        const categories = t12;
        t5 = "px-4 mx-auto justify-center text-center md:px-20 py-12 min-h-screen";
        if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl font-bold text-green-800 mb-2",
                children: "Our Items"
            }, void 0, false, {
                fileName: "[project]/src/app/items/page.jsx",
                lineNumber: 83,
                columnNumber: 12
            }, this);
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mb-6 text-green-700",
                children: "Browse our selection of fresh products"
            }, void 0, false, {
                fileName: "[project]/src/app/items/page.jsx",
                lineNumber: 84,
                columnNumber: 12
            }, this);
            $[22] = t6;
            $[23] = t7;
        } else {
            t6 = $[22];
            t7 = $[23];
        }
        let t13;
        if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
            t13 = ({
                "ItemsPage[<input>.onChange]": (e)=>setSearch(e.target.value)
            })["ItemsPage[<input>.onChange]"];
            $[24] = t13;
        } else {
            t13 = $[24];
        }
        let t14;
        if ($[25] !== search) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                placeholder: "Search items...",
                value: search,
                onChange: t13,
                className: "p-2 w-full md:w-1/3 border rounded"
            }, void 0, false, {
                fileName: "[project]/src/app/items/page.jsx",
                lineNumber: 102,
                columnNumber: 13
            }, this);
            $[25] = search;
            $[26] = t14;
        } else {
            t14 = $[26];
        }
        let t15;
        if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
            t15 = ({
                "ItemsPage[<select>.onChange]": (e_0)=>setCategory(e_0.target.value)
            })["ItemsPage[<select>.onChange]"];
            $[27] = t15;
        } else {
            t15 = $[27];
        }
        let t16;
        if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
            t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "",
                children: "All Categories"
            }, void 0, false, {
                fileName: "[project]/src/app/items/page.jsx",
                lineNumber: 119,
                columnNumber: 13
            }, this);
            $[28] = t16;
        } else {
            t16 = $[28];
        }
        let t17;
        if ($[29] !== categories) {
            t17 = categories.map(_ItemsPageCategoriesMap);
            $[29] = categories;
            $[30] = t17;
        } else {
            t17 = $[30];
        }
        let t18;
        if ($[31] !== category || $[32] !== t17) {
            t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                value: category,
                onChange: t15,
                className: "p-2 w-full md:w-1/3 border rounded",
                children: [
                    t16,
                    t17
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/items/page.jsx",
                lineNumber: 134,
                columnNumber: 13
            }, this);
            $[31] = category;
            $[32] = t17;
            $[33] = t18;
        } else {
            t18 = $[33];
        }
        if ($[34] !== t14 || $[35] !== t18) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex mx-auto justify-center text-center flex-col md:flex-row gap-4 mb-6",
                children: [
                    t14,
                    t18
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/items/page.jsx",
                lineNumber: 142,
                columnNumber: 12
            }, this);
            $[34] = t14;
            $[35] = t18;
            $[36] = t8;
        } else {
            t8 = $[36];
        }
        if ($[37] !== loading) {
            t9 = loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-green-800",
                children: "Loading products..."
            }, void 0, false, {
                fileName: "[project]/src/app/items/page.jsx",
                lineNumber: 150,
                columnNumber: 23
            }, this);
            $[37] = loading;
            $[38] = t9;
        } else {
            t9 = $[38];
        }
        t10 = !loading && filteredProducts.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-green-800",
            children: "No products found."
        }, void 0, false, {
            fileName: "[project]/src/app/items/page.jsx",
            lineNumber: 156,
            columnNumber: 56
        }, this);
        t3 = "grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6";
        t4 = !loading && filteredProducts.map({
            "ItemsPage[filteredProducts.map()]": (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg shadow hover:shadow-lg hover:-translate-y-1 transition cursor-pointer overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-full h-48",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: item.image && (item.image.startsWith("http") || item.image.startsWith("/")) ? item.image : "/items/default.jpg",
                                alt: item.title,
                                fill: true,
                                className: "object-cover"
                            }, void 0, false, {
                                fileName: "[project]/src/app/items/page.jsx",
                                lineNumber: 159,
                                columnNumber: 228
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/items/page.jsx",
                            lineNumber: 159,
                            columnNumber: 190
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold mb-1",
                                    children: item.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/items/page.jsx",
                                    lineNumber: 159,
                                    columnNumber: 436
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-green-700 text-sm mb-2 line-clamp-2",
                                    children: item.shortDescription
                                }, void 0, false, {
                                    fileName: "[project]/src/app/items/page.jsx",
                                    lineNumber: 159,
                                    columnNumber: 496
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-green-900 font-semibold mb-3",
                                    children: [
                                        "$",
                                        item.price
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/items/page.jsx",
                                    lineNumber: 159,
                                    columnNumber: 579
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition",
                                    onClick: {
                                        "ItemsPage[filteredProducts.map() > <button>.onClick]": ()=>router.push(`/items/${item._id}`)
                                    }["ItemsPage[filteredProducts.map() > <button>.onClick]"],
                                    children: "Details"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/items/page.jsx",
                                    lineNumber: 159,
                                    columnNumber: 645
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/items/page.jsx",
                            lineNumber: 159,
                            columnNumber: 415
                        }, this)
                    ]
                }, item._id, true, {
                    fileName: "[project]/src/app/items/page.jsx",
                    lineNumber: 159,
                    columnNumber: 52
                }, this)
        }["ItemsPage[filteredProducts.map()]"]);
        $[4] = category;
        $[5] = loading;
        $[6] = products;
        $[7] = router;
        $[8] = search;
        $[9] = t10;
        $[10] = t3;
        $[11] = t4;
        $[12] = t5;
        $[13] = t6;
        $[14] = t7;
        $[15] = t8;
        $[16] = t9;
    } else {
        t10 = $[9];
        t3 = $[10];
        t4 = $[11];
        t5 = $[12];
        t6 = $[13];
        t7 = $[14];
        t8 = $[15];
        t9 = $[16];
    }
    let t11;
    if ($[39] !== t3 || $[40] !== t4) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/app/items/page.jsx",
            lineNumber: 188,
            columnNumber: 11
        }, this);
        $[39] = t3;
        $[40] = t4;
        $[41] = t11;
    } else {
        t11 = $[41];
    }
    let t12;
    if ($[42] !== t10 || $[43] !== t11 || $[44] !== t5 || $[45] !== t6 || $[46] !== t7 || $[47] !== t8 || $[48] !== t9) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: [
                t6,
                t7,
                t8,
                t9,
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/items/page.jsx",
            lineNumber: 197,
            columnNumber: 11
        }, this);
        $[42] = t10;
        $[43] = t11;
        $[44] = t5;
        $[45] = t6;
        $[46] = t7;
        $[47] = t8;
        $[48] = t9;
        $[49] = t12;
    } else {
        t12 = $[49];
    }
    return t12;
}
_s(ItemsPage, "laWE3H24rUNzTHWr9hdtPuh9sG8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ItemsPage;
function _ItemsPageCategoriesMap(cat, idx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: cat,
        children: cat
    }, `${cat}-${idx}`, false, {
        fileName: "[project]/src/app/items/page.jsx",
        lineNumber: 212,
        columnNumber: 10
    }, this);
}
function _ItemsPageProductsMap(p_0) {
    return p_0.category;
}
function _ItemsPageUseEffectAnonymous2(err) {
    return console.error(err);
}
function _ItemsPageUseEffectAnonymous(res) {
    return res.json();
}
var _c;
__turbopack_context__.k.register(_c, "ItemsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_items_page_jsx_2f19a4b2._.js.map