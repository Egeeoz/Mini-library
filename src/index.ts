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

const books: Book[] = [];

async function getApiData(): Promise<void> {
  try {
    const response = await fetch(
      "https://my-json-server.typicode.com/zocom-christoffer-wallenberg/books-api/books",
      {
        method: "GET",
      }
    );

    let data: Book[] = await response.json();
    books.push(...data);
  } catch (error) {
    console.log(error);
  }
}
getApiData().then(() => {
  console.log(books);
});
