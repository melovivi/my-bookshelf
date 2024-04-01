"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var User_1 = require("./entity/User");
var BookEntity_1 = require("./entity/BookEntity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "MY-BOOKSHELF",
    synchronize: true,
    logging: false,
    entities: [User_1.User, BookEntity_1.BookEntity],
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map