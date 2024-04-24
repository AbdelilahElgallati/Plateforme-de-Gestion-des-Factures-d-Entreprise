const Subscription = require("../Models/SubscriptionSchema")

const addSubscription = async (req, res) => {
  try {
    const subscriptionData = req.body;
    const subscription = new Subscription(subscriptionData);
    await subscription.save();
    res.status(201).json(subscription);
  } catch (error) {
    res.status(500).send("Erreur serveur lors de l'ajout du subscription");
  }
}

const  getAllSubscriptions = async (req, res) => {
  try {
    const  subscription = await Subscription.find();
    res.status(201).json(subscription);
  } catch (error) {
    res.status(500).send("Erreur serveur lors de la recherche des subscription");
  }
}

const  getOneSubscription = async (req, res) => {
  try {
    const  subscription = await Subscription.find({_id : req.params._id});
    res.status(201).json(subscription);
  } catch (error) {
    res.status(500).send("Erreur serveur lors de la recherche de subscription");
  }
}

const  updateSubscription = async (req,res)=>{
  try {
    const  subscription = await Subscription.findByIdAndUpdate(req.params._id, req.body.Subscription, {new: true});
    res.status(201).json(subscription);
  } catch (error) {
    res.status(500).send("Erreur serveur lors de la mise à jour de subscription");
  }
}

const  removeSubscription = async (req, res) => {
  try {
    const  subscription = await Subscription.findByIdAndDelete(req.params._id);
    res.status(201).json(subscription);
  } catch (error) {
    res.status(500).send("Erreur serveur lors de la suppression de subscription");
  }
}

module.exports = {addSubscription,getAllSubscriptions,getOneSubscription,updateSubscription,removeSubscription};