const express = require("express");
const CategoryRouter = express.Router();
const CategoryController = require("../Controllers/CategoryController");

CategoryRouter.get( "/", CategoryController.getAllCategories); 
CategoryRouter.get( "/:id", CategoryController.getOneCategory); 
CategoryRouter.post('/add',CategoryController.addCategory);
CategoryRouter.put('/edit/:id',CategoryController.updateCategory);
CategoryRouter.delete("/remove/:id",CategoryController.removeCategory);

module.exports = CategoryRouter;