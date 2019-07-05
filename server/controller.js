module.exports = {
  getAll: (req, res) => {
    const db = req.app.get("db");

    db.get_inventory()
      .then(products => res.status(200).send(products))
      .catch(err => {
        res.status(500).send({
          errorMessage:
            "I couldn't get the products. Dang. I don't know what's going on. Do you?"
        });
        console.log(err);
      });
  },

  addProduct: (req, res) => {
    const db = req.app.get("db");
    const { product_name, price, image_url } = req.body;

    db.add_product([product_name, price, image_url])
      .then(res.sendStatus(200))
      .catch(err => {
        res
          .status(500)
          .send({
            errorMessage:
              "I couldn't add anything. Dang. I don't know what's going on. DO you?"
          });
          console.log(err)
      });
  }
};
