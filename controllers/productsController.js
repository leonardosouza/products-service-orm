const { Op } = require("sequelize");

const ProductModel = require("../models/productModel");

// Abordagem 1 - Classes
class ProductsController {
  createProduct(req, res) {
    const { ulid } = require("ulid");
    const data = { ...req.body, id: ulid() };

    ProductModel.create(data)
      .then(() => res.status(201).json(data))
      .catch((err) => res.status(500).json({ error: err }));
  }

  getAllProducts(req, res) {
    const { name } = req.query;

    const filter = name
      ? {
          where: {
            name: {
              [Op.iLike]: `%${name}%`,
            },
          },
        }
      : {};

    ProductModel.findAll(filter)
      .then((result) => res.status(200).json(result))
      .catch((err) => res.status(500).json({ error: err }));
  }

  getProductById(req, res) {
    const { id } = req.params;
    ProductModel.findOne({ where: { id } })
      .then((result) => {
        if (result) {
          res.status(200).json(result);
        } else {
          res.status(404).json({ message: `product not found` });
        }
      })
      .catch((err) => res.status(500).json({ error: err }));
  }

  updateProduct(req, res) {
    const { id } = req.params;
    ProductModel.update(req.body, { where: { id } })
      .then(() => res.status(204).end())
      .catch(() => res.status(500).json({ error: err }));
  }

  removeProduct(req, res) {
    const { id } = req.params;
    ProductModel.destroy({ where: { id } })
      .then((result) => {
        if (result) {
          res.status(204).end();
        } else {
          res.status(404).json({ message: `product not found` });
        }
      })
      .catch((err) => res.status(500).json({ error: err }));
  }
}

module.exports = new ProductsController();
