const express = require("express")
const app = express();
const Entreprise = require("../Models/EntrepriseSchema")

const loginMiddleware  = async (req, res,next) =>{
  try {
    const {email,password} = req.body.loginData
    const user = await Entreprise.findOne({ email: email, password: password});
    const jsenwebtkn = jwt.sign({ user:user.username, password:user.password }, "AbdelilahElgallati1230");
    next(); 
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
}

module.exports = loginMiddleware;