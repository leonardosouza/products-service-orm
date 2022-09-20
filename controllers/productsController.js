const ProductModel = require("../models/productModel");

// Abordagem 1 - Classes
class ProductsController {
  createProduct(req, res) {
    // ProductDAO.save(req.body, (id, err, result) => {
    //   if (err) {
    //     res.status(500).json({ error: err });
    //   } else {
    //     res.status(201).json({ ...req.body, id });
    //   }
    // });
  }

  getAllProducts(req, res) {
    ProductModel.findAll()
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(500).json({ error: err }));
  }

  getProductById(req, res) {
    // ProductDAO.findOne(req.params.id, (err, result) => {
    //   if (err) {
    //     res.status(500).json({ error: err });
    //   } else if (result.rowCount) {
    //     res.status(200).json(result.rows[0]);
    //   } else {
    //     res.status(404).json({ message: `product not found` });
    //   }
    // });
  }

  updateProduct(req, res) {
    // ProductDAO.updateComplete(req.params.id, req.body, (err, result) => {
    //   if (err) {
    //     res.status(500).json({ error: err });
    //   } else {
    //     res.status(204).end();
    //   }
    // });
  }

  updateProductPartial(req, res) {
    // ProductDAO.updatePartial(req.params.id, req.body, (err, result) => {
    //   if (err) {
    //     res.status(500).json({ error: err });
    //   } else {
    //     res.status(204).end();
    //   }
    // });
  }

  removeProduct(req, res) {
    // ProductDAO.removeOne(req.params.id, (err, result) => {
    //   if (err) {
    //     res.status(500).json({ error: err });
    //   } else {
    //     res.status(204).end();
    //   }
    // });
  }
}

module.exports = new ProductsController();
