"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveToDatabase = void 0;
const fs_1 = __importDefault(require("fs"));
const saveToDatabase = (DB) => {
    fs_1.default.writeFileSync('./src/database/db.json', JSON.stringify(DB, null, 2), {
        encoding: 'utf-8',
    });
};
exports.saveToDatabase = saveToDatabase;
