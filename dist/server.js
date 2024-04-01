"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var routes_1 = require("./routes");
var app = express();
app.use(express.json());
app.use(routes_1.default);
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("Servidor rodando na porta ".concat(PORT));
});
//# sourceMappingURL=server.js.map