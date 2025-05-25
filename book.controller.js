import Book from "../model/book.model.js";

export const getBook = async (req, res) => {
try {
    const books = await Book.find(); // usually plural 'books' when fetching multiple
    res.status(200).json(books);
} catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
}
};
