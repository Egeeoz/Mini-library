// Interface for the books fetching from the api
interface Book {
  id: number;
  title: string;
  author: string;
  publisher: string;
  year: number;
  pages: number | null;
  plot: string;
  audience: string;
  color: string;
}

// Books array, books from api gets pushed in here
const books: Book[] = [];

// Modal elements
const popup = document.getElementById("popup") as HTMLElement;
const popupOverlay = document.getElementById("popupOverlay") as HTMLElement;
const popupBody = document.getElementById("popupBody") as HTMLElement;
const closeBtn = document.querySelector(".popup__close") as HTMLElement;

// Async function that fetches book data
async function getApiData(): Promise<void> {
  try {
    const response = await fetch(
      "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books",
      {
        method: "GET",
      }
    );
    // Storing fetched data and pushing it to books array
    let data: Book[] = await response.json();
    books.push(...data);
  } catch (error) {
    console.log(error);
  }
}
getApiData().then(() => {
  printOutBooks();
});

// Function for printing out the fetched books onto the page
function printOutBooks() {
  books.forEach((book) => {
    const section = document.createElement("section");
    section.style.backgroundColor = book.color;

    section.className = "book__section";

    const p = document.createElement("p");
    p.textContent = book.title;
    section?.appendChild(p);
    document.body?.appendChild(section);

    section.addEventListener("click", () => openPopup(book));
  });
}
// Modal popup with information about the book fetched from api
function openPopup(book: Book) {
  popupBody.innerHTML = `<h3>${book.title}</h3>
  <p>Author: ${book.author}</p>
  <p>Publisher: ${book.publisher}</p>
  <p>Year: ${book.year}</p>
  <p>Pages: ${book.pages}</p>
  <p>Plot: ${book.plot}</p>
  <p>Audience: ${book.audience}</p>`;

  popup.style.display = "block";
  popupOverlay.style.display = "block";
}

closeBtn.addEventListener("click", closePopup);
popupOverlay.addEventListener("click", closePopup);
// Function to close popup modal
function closePopup() {
  popup.style.display = "none";
  popupOverlay.style.display = "none";
}
