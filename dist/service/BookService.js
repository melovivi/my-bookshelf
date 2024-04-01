"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
var BookService = /** @class */ (function () {
    function BookService(repository) {
        this.repository = repository;
    }
    BookService.prototype.listBooks = function () {
        return this.repository.listBooks();
    };
    BookService.prototype.addBook = function (book) {
        this.repository.add(book);
    };
    return BookService;
}());
exports.BookService = BookService;
//# sourceMappingURL=BookService.js.map