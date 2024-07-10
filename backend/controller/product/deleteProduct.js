const uploadProductPermission = require("../../helpers/permission");
const productModel = require("../../models/productModel");

async function deleteProductController(req, res) {
  try {
    const permission = await uploadProductPermission(req.userId);
    if (!permission) {
      throw new Error("Permission denied");
    }

    const { _id } = req.body;

    const deleteProduct = await productModel.deleteOne({ _id });

    if (!deleteProduct.deletedCount) {
      throw new Error("Product not found");
    }

    res.json({
      message: "Product deleted successfully",
      data: deleteProduct,
      success: true,
      error: false,
    });
  } catch (err) {
    res.status(400).json;
  }
}

module.exports = deleteProductController;
