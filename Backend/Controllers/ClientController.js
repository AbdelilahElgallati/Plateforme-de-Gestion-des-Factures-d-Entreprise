const Client = require("../Models/ClientSchema")

const addClient = async (req, res) => {
  try {
    const ClientData = req.body;
    const client = new Client(ClientData);
    await client.save();
    res.status(201).json(Client);
  } catch (error) {
    res.status(500).send("Erreur serveur lors de l'ajout du client");
  }
}

const  getAllClients = async (req, res) => {
  try {
    const  clients = await Client.find();
    res.status(201).json(clients);
  } catch (error) {
    res.status(500).send("Erreur serveur lors de la recherche des clients");
  }
}

const  getOneClient = async (req, res) => {
  try {
    const  client = await Client.find({_id : req.params._id});
    res.status(201).json(client);
  } catch (error) {
    res.status(500).send("Erreur serveur lors de la recherche de client");
  }
}

const  updateClient = async (req,res)=>{
  try {
    const  client = await Client.findByIdAndUpdate(req.params._id, req.body.Client, {new: true});
    res.status(201).json(client);
  } catch (error) {
    res.status(500).send("Erreur serveur lors de la mise à jour de client");
  }
}

const  removeClient = async (req, res) => {
  try {
    const  client = await Client.findByIdAndDelete(req.params._id);
    res.status(201).json(client);
  } catch (error) {
    res.status(500).send("Erreur serveur lors de la suppression de client");
  }
}

module.exports = {addClient,getAllClients,getOneClient,updateClient,removeClient};