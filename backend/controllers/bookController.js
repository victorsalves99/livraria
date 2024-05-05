const Book = require("../models/bookModel");
const fs = require("fs");

class bookController {
  static async getAllBook(req, res) {
    const books = await Book.find();
    res.status(200).json(books);
  }
  static async createBook(req, res) {
    try {
      const { title, description, size } = req.body;
      const file = req.file;
      if (!title) {
        fs.unlinkSync(file.path);
        res.status(442).json({ msg: "O titulo é Obrigatorio!" });
        return;
      }
      if (!description) {
        fs.unlinkSync(file.path);
        res.status(442).json({ msg: "A descrição  é Obrigatoria!" });
        return;
      }
      if (!size) {
        fs.unlinkSync(file.path);
        res.status(442).json({ msg: "O tamanho é Obrigatorio!" });
        return;
      }
      if (!file) {
        res.status(442).json({ msg: "O arquivo é Obrigatorio!" });
        return;
      }
      const book = await new Book({
        title,
        src: file.path,
        cover: "uploads\\defalt.jpg",
        description,
        size,
      });
      await book.save();
      res.json({ msg: "livro cadastrado com sucesso!", book });
    } catch (error) {
      res.status(500).json({ msg: "Erro no servidor!" });
    }
  }
  static async addCover(req, res) {
    const id = req.params.id;
    const file = req.file;

    const book = await Book.findById(id);
    book.cover = file.path;
    book.save();
    res.status(200).json({ msg: "Capa adiconada com sucesso!" });
  }
  static async removeBook(req, res) {
    const id = req.params.id;

    const book = await Book.findById(id);
    if (!book) {
      res.status(442).json({ msg: "Livro não encontrado!" });
      return;
    }
    fs.unlinkSync(book.src);
    if (book.cover !== "uploads\\defalt.jpg") {
      fs.unlinkSync(book.cover);
      return;
    }
    await book.deleteOne();
    res.status(200).json({ msg: "Livro deletado com sucesso!" });
  }
}

module.exports = bookController;
