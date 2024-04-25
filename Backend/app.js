const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const url = "mongodb://127.0.0.1:27017/MyInvoice";
const app = express();

const CategorieRouter = require("./Routes/CategoryRouter");
const ClientRouter = require("./Routes/ClientRouter");
const EntrepriseRouter = require("./Routes/EntrepriseRouter");
const InvoiceRouter = require("./Routes/InvoiceRouter");
const PackRouter = require("./Routes/PackRouter");
const ProductRouter = require("./Routes/ClientRouter");
const SettingRouter = require("./Routes/SettingsRouter");
const SubscriptionRouter = require("./Routes/SubscriptionRouter");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/Categorie", CategorieRouter);
app.use("/Client", ClientRouter);
app.use("/Entreprise", EntrepriseRouter);
app.use("/Invoice", InvoiceRouter);
app.use("/Pack", PackRouter);
app.use("/Produit", ProductRouter);
app.use("/Setting", SettingRouter);
app.use("/Subscription", SubscriptionRouter);

mongoose
  .connect(url)
  .then(() => {
    console.log("connecting to my database");
  })
  .catch((err) => {
    console.log(err);
});

app.listen(3001, () => {
  console.log("the platform is running well");
});