const Pack = require("../Models/PackSchema")

const addPack = async (req, res) => {
  try {
    const packData = req.body;
    const pack = new Pack(packData);
    await pack.save();
    res.status(201).json(pack);
  } catch (error) {
    res.status(500).send("Erreur serveur lors de l'ajout du pack");
  }
}

const  getAllPacks = async (req, res) => {
  try {
    const  packs = await Pack.find();
    res.status(201).json(packs);
  } catch (error) {
    res.status(500).send("Erreur serveur lors de la recherche des packs");
  }
}

const  getOnePack = async (req, res) => {
  try {
    const  pack = await Pack.find({_id : req.params._id});
    res.status(201).json(pack);
  } catch (error) {
    res.status(500).send("Erreur serveur lors de la recherche de pack");
  }
}

const  updatePack = async (req,res)=>{
  try {
    const  pack = await Pack.findByIdAndUpdate(req.params._id, req.body.Pack, {new: true});
    res.status(201).json(pack);
  } catch (error) {
    res.status(500).send("Erreur serveur lors de la mise à jour de pack");
  }
}

const  removePack = async (req, res) => {
  try {
    const  pack = await Pack.findByIdAndDelete(req.params._id);
    res.status(201).json(pack);
  } catch (error) {
    res.status(500).send("Erreur serveur lors de la suppression de pack");
  }
}

module.exports = {addPack,getAllPacks,getOnePack,updatePack,removePack};