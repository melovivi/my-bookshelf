"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
var BookController = /** @class */ (function () {
    function BookController(service) {
        this.service = service;
    }
    BookController.prototype.addBook = function (req, res) {
        console.log(this.service);
        var book = req.body;
        this.service.addBook(book);
        res.status(201).json(book);
    };
    BookController.prototype.listBook = function (res) {
        var books = this.service.listBooks();
        res.status(200).json(books);
    };
    return BookController;
}());
exports.BookController = BookController;
//# sourceMappingURL=BookController.js.map