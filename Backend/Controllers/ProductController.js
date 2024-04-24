const Produit = require("../Models/ProductSchema")

const addProduit = async (req, res) => {
  try {
    const produitData = req.body;
    const produit = new Produit(produitData);
    await produit.save();
    res.status(201).json(produit);
  } catch (error) {
    res.status(500).send("Erreur serveur lors de l'ajout du produit");
  }
}

const  getAllProduits = async (req, res) => {
  try {
    const  produits = await Produit.find();
    res.status(201).json(produits);
  } catch (error) {
    res.status(500).send("Erreur serveur lors de la recherche des produits");
  }
}

const  getOneProduit = async (req, res) => {
  try {
    const  produit = await Produit.find({_id : req.params._id});
    res.status(201).json(produit);
  } catch (error) {
    res.status(500).send("Erreur serveur lors de la recherche de produit");
  }
}

const  updateProduit = async (req,res)=>{
  try {
    const  produit = await Produit.findByIdAndUpdate(req.params._id, req.body.Produit, {new: true});
    res.status(201).json(produit);
  } catch (error) {
    res.status(500).send("Erreur serveur lors de la mise à jour de produit");
  }
}

const  removeProduit = async (req, res) => {
  try {
    const  produit = await Produit.findByIdAndDelete(req.params._id);
    res.status(201).json(produit);
  } catch (error) {
    res.status(500).send("Erreur serveur lors de la suppression de produit");
  }
}

module.exports = {addProduit,getAllProduits,getOneProduit,updateProduit,removeProduit};