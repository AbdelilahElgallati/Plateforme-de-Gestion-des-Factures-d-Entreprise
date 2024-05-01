const Entreprise = require("../Models/EntrepriseSchema");
const Subscription = require("../Models/SubscriptionSchema");
const Invoice = require("../Models/InvoiceSchema");
const jwt = require("jsonwebtoken");

const addEntreprise = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      phone,
      address,
      logo,
      passwordConfirmation,
    } = req.query;
    const existeEntreprise = await Entreprise.findOne({ email: email });
    if (!existeEntreprise && password === passwordConfirmation) {
      const entreprise = new Entreprise({
        name,
        email,
        password,
        phone,
        address,
        logo,
      });
      await entreprise.save();
      res.status(201).json(entreprise);
    } else {
      res
        .status(400)
        .json({
          message:
            "L'entreprise existe déjà ou les mots de passe ne correspondent pas",
        });
    }
  } catch (error) {
    res.status(500).send("Erreur serveur lors de l'ajout d'entreprise");
  }
};

const getAllEntreprises = async (req, res) => {
  try {
    const entreprises = await Entreprise.find();
    res.status(201).json(entreprises);
  } catch (error) {
    res.status(500).send("Erreur serveur lors de la recherche d'entreprise");
  }
};

const getOneEntreprise = async (req, res) => {
  try {
    const entreprise = await Entreprise.findById(req.params.id);
    res.status(201).json(entreprise);
  } catch (error) {
    res.status(500).send("Erreur serveur lors de la recherche d'entreprise");
  }
};

const updateEntreprise = async (req, res) => {
  try {
    const entreprise = await Entreprise.findByIdAndUpdate(
      req.params.id,
      req.query,
      { new: true }
    );
    res.status(201).json(entreprise);
  } catch (error) {
    res.status(500).send("Erreur serveur lors de la mise à jour d'entreprise");
  }
};

const removeEntreprise = async (req, res) => {
  try {
    const entreprise = await Entreprise.findByIdAndDelete(req.params.id);
    res.status(201).json(entreprise);
  } catch (error) {
    res.status(500).send("Erreur serveur lors de la suppression d'entreprise");
  }
};

const login = async (req, res) => {
  try {
    const jsenwebtkn = req.token;
    const decoded = jwt.verify(jsenwebtkn, "AbdelilahElgallati1230");
    const userId = decoded.userId;
    const user = await Entreprise.findById(userId);
    res.json({ jsenwebtkn, user });
  } catch (error) {
    res.status(500).json({ error: "Erreur serveur" });
  }
};

const getDashboardInfo = async (req, res) => {
  try {
    // const enterpriseCount = await Entreprise.countDocuments();
    // const revenueByPack = await Subscription.aggregate([
    //   // Faire correspondre les abonnements avec les packs
    //   {
    //     $lookup: {
    //       from: "packs",
    //       localField: "packId",
    //       foreignField: "_id",
    //       as: "packInfo"
    //     }
    //   },
    //   // Dérouler la liste des abonnements
    //   { $unwind: "$packInfo" },
    //   // Regrouper par pack d'abonnement et calculer la somme des montants payés
    //   {
    //     $group: {
    //       _id: "$packId",
    //       totalRevenue: { $sum: "$packInfo.price" }
    //     }
    //   }
    // ]);

    // // Nombre de comptes d'entreprise actifs
    // const activeEnterpriseCount = await Subscription.countDocuments({
    //   endDate: { $gte: new Date() }
    // });

    // return res.status(200).json({
    //   enterpriseCount,
    //   revenueByPack,
    //   activeEnterpriseCount
    // });

    // Nombre total d'entreprises inscrites
    const totalEntreprises = await Entreprise.countDocuments();

    // Revenus générés par les abonnements
    const revenueBySubscription = await Subscription.aggregate([
      { $group: { _id: "$packId", totalRevenue: { $sum: "$price" } } },
    ]);

    // Nombre de factures émises
    const totalInvoices = await Invoice.countDocuments();

    // Nombre de factures payées
    const paidInvoices = await Invoice.countDocuments({ status: "paid" });

    // Nombre de factures impayées
    const unpaidInvoices = await Invoice.countDocuments({
      status: { $ne: "paid" },
    });

    // Taux d'abonnement par niveau
    const subscriptionCounts = await Subscription.aggregate([
      { $group: { _id: "$status", count: { $sum: 1 } } },
    ]);

    const enterpriseCountByMonthAndYear = getEnterpriseCountByMonthAndYear();

    // Préparer les données à renvoyer
    const dashboardData = {
      totalEntreprises,
      revenueBySubscription,
      totalInvoices,
      paidInvoices,
      unpaidInvoices,
      subscriptionCounts,
      enterpriseCountByMonthAndYear,
    };

    // Envoyer les données au client
    res.status(200).json(dashboardData);
  } catch (error) {
    console.error("Erreur : ", error);
    res
      .status(500)
      .send(
        "Erreur serveur lors de la recherche d'informations du tableau de bord"
      );
  }
};

const getEnterpriseCountByMonthAndYear = async(req, res) => {
  try {
    const enterpriseCountByMonthAndYear = await Entreprise.aggregate([
      {
        $project: {
          year: { $year: "$createdAt" },
          month: { $month: "$createdAt" }
        }
      },
      {
        $group: {
          _id: { year: "$year", month: "$month" },
          count: { $sum: 1 }
        }
      },
      {
        $sort: { "_id.year": 1, "_id.month": 1 }
      }
    ]);
    res.status(200).json(enterpriseCountByMonthAndYear);
  } catch (error) {
    
  }
}

module.exports = {
  getDashboardInfo,
  addEntreprise,
  getAllEntreprises,
  getOneEntreprise,
  updateEntreprise,
  removeEntreprise,
  login,
  getEnterpriseCountByMonthAndYear,
};
