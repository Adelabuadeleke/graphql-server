const productModel = require('./products.model')

module.exports = {
  Query:{
    products:() => {
      return productModel.getAllProducts();
    }
  }
}