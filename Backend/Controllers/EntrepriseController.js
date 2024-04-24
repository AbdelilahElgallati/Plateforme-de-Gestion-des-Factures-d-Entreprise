const Entreprise = require("../Models/EntrepriseSchema")

const addEntreprise = async (req, res) => {
  try {
    const entrepriseData = req.body;
    const existeEntreprise = await Entreprise.findOne({ email: req.body.Entreprise.email})
    if(entrepriseData.password == entrepriseData.passwordConfirmation && !existeEntreprise) {
      const entreprise = new Entreprise(entrepriseData);
      await entreprise.save();
      res.status(201).json(entreprise);
    }
  } catch (error) {
    res.status(500).send("Erreur serveur lors de l'ajout d'entreprise");
  }
}

const  getAllEntreprises = async (req, res) => {
  try {
    const  entreprise = await Entreprise.find();
    res.status(201).json(entreprise);
  } catch (error) {
    res.status(500).send("Erreur serveur lors de la recherche d'entreprise");
  }
}

const  getOneEntreprise = async (req, res) => {
  try {
    const  entreprise = await Entreprise.find({_id : req.params._id});
    res.status(201).json(entreprise);
  } catch (error) {
    res.status(500).send("Erreur serveur lors de la recherche d'entreprise");
  }
}

const  updateEntreprise = async (req,res)=>{
  try {
    const  entreprise = await Entreprise.findByIdAndUpdate(req.params._id, req.body.Entreprise, {new: true});
    res.status(201).json(entreprise);
  } catch (error) {
    res.status(500).send("Erreur serveur lors de la mise à jour d'entreprise");
  }
}

const  removeEntreprise = async (req, res) => {
  try {
    const  entreprise = await Entreprise.findByIdAndDelete(req.params._id);
    res.status(201).json(entreprise);
  } catch (error) {
    res.status(500).send("Erreur serveur lors de la suppression d'entreprise");
  }
}

const login  = async (req, res) =>{
  try {
    res.json({ jsenwebtkn, user }); 
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
}

module.exports = {addEntreprise,getAllEntreprises,getOneEntreprise,updateEntreprise,removeEntreprise,login};