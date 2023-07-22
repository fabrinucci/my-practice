"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.route('/').get((req, res) => {
    res.send(`<h1>Hello from ${req.baseUrl}</h1>`);
});
exports.default = router;
