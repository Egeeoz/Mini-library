var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const books = [];
// const body = document.querySelector("body");
function getApiData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books", {
                method: "GET",
            });
            let data = yield response.json();
            books.push(...data);
        }
        catch (error) {
            console.log(error);
        }
    });
}
getApiData().then(() => {
    printOutBooks();
});
function printOutBooks() {
    console.log(books);
    books.forEach((book) => {
        var _a;
        const section = document.createElement("section");
        section.style.backgroundColor = book.color;
        const p = document.createElement("p");
        p.textContent = book.title;
        section === null || section === void 0 ? void 0 : section.appendChild(p);
        (_a = document.body) === null || _a === void 0 ? void 0 : _a.appendChild(section);
    });
}
