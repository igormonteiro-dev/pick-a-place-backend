const Place = require("../models/Place.model");
const mongoose = require("mongoose");

const places = [
  /* 
  🌳parks🌳
  */
  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663158259/Pick%20a%20place/parc-des-buttes-chaumont_stksh7.jpg",
    name: "Parc des Buttes Chaumont",
    adress: "7, rue Botzaris",
    zipCode: 75019,
    metroLine: "11",
    metroStation: "Pyrénées",
    open24Hours: false,
    category: "park",
    withWho: ["couple", "friends", "family", "with pets"],
    theme: "festive",
  },
  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663170594/Pick%20a%20place/La_Rotonde_du_Parc_Monceau_September_16__2007_jesqf5.jpg",
    name: "Parc Monceau",
    adress: "35, Boulevard de Courcelles",
    zipCode: "75008",
    metroLine: "2",
    metroStation: "Monceau",
    open24Hours: false,
    category: "park",
    withWho: ["couple", "friends", "family"],
    theme: "trendy",
  },
  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663170685/Pick%20a%20place/image_processing20220510-28764-jcf1w5_h1m35w.jpg",
    name: "Parc de Bercy",
    adress: "128, Quai de Bercy",
    zipCode: "75012",
    metroLine: "6",
    metroStation: "Bercy",
    open24Hours: false,
    category: "park",
    withWho: ["friends", "family"],
    theme: "local",
  },
  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663172086/Pick%20a%20place/balade-belleville-menilmontant-paris_qjaora.jpg",
    name: "Parc de Belleville",
    adress: "47 rue de Couronnes",
    zipCode: "75020",
    metroLine: "2, 11",
    metroStation: "Bellevile",
    open24Hours: false,
    category: "park",
    withWho: ["couple", "friends"],
    theme: ["local", "festive"],
  },
  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663178213/Pick%20a%20place/parc-andre%CC%81_fvftdf.jpg",
    name: "Parc André Citroën",
    adress: "2, rue Cauchy",
    zipCode: "75015",
    metroLine: "RER C, 10",
    metroStation: "Javel - André Citroën",
    open24Hours: false,
    category: "park",
    withWho: ["couple", "friends", "family"],
    theme: "local",
  },
  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663178213/Pick%20a%20place/image_hqlx6p.jpg",
    name: "Parc de Bagatelle",
    adress: "Route de Sèvres à Neuilly",
    zipCode: "75016",
    metroLine: "1",
    metroStation: "Pont de Neuilly",
    open24Hours: false,
    category: "park",
    withWho: ["couple", "friends", "family"],
    theme: ["trendy", "romantic"],
  },
  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663178213/Pick%20a%20place/image_processing20220510-28764-1xyhapd_mwi8zu.jpg",
    name: "Parc Montsouris",
    adress: "2, rue Gazan",
    zipCode: "75014",
    metroLine: "RER B",
    metroStation: "Cité Universitaire",
    open24Hours: false,
    category: "park",
    withWho: ["couple", "friends", "family"],
    theme: ["local", "festive"],
  },
  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663178213/Pick%20a%20place/756216-le-parc-floral-un-magnifique-ecrin-de-verdure-a-paris_pfeciy.jpg",
    name: "Parc Floral de Paris",
    adress: "Route de la Pyramide",
    zipCode: "75012 ",
    metroLine: "1",
    metroStation: "Chateau de Vincennes",
    open24Hours: false,
    category: "park",
    withWho: ["couple", "friends", "family"],
    theme: ["festive", "romantic"],
  },
  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663178213/Pick%20a%20place/%C3%8Ele_de_Reuilly_Bois_de_Vincennes_Paris_September_2013_005-1140x694_ngmtut.jpg",
    name: "Bois de Vincennes",
    adress: " Route de la Pyramide",
    zipCode: "75012",
    metroLine: "8",
    metroStation: "Porte Dorée",
    open24Hours: true,
    category: "wood",
    withWho: ["couple", "friends", "family", "with pets"],
    theme: ["festive", "trendy", "romantic"],
  },
  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663178213/Pick%20a%20place/image_processing20220510-28764-17rcpmr_vkmkhi.jpg",
    name: "Bois de Boulogne",
    adress: "93, Avenue de L'Hippodrome",
    zipCode: "75016",
    metroLine: "1",
    metroStation: "Porte Maillot",
    open24Hours: true,
    category: "wood",
    withWho: ["couple", "friends", "family", "with pets"],
    theme: ["festive", "trendy", "romantic"],
  },
  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663178214/Pick%20a%20place/image_processing20220510-28764-1imfyvm_hjgovk.jpg",
    name: "Parc Clichy Batignolles Martin Luther King",
    adress: "147, rue Cardinet",
    zipCode: "75017",
    metroLine: "14",
    metroStation: "Pont Cardinet",
    open24Hours: false,
    category: "park",
    withWho: ["friends", "family"],
    theme: "local",
  },
  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663178214/Pick%20a%20place/photo_SG_2021_-_PMA_-_zac_chapelle_charbon_-_paris_18_-_IMP-A-018_site_op%C3%A9_0_x82p5f.jpg",
    name: "Parc Chapelle Charbon",
    adress: "52, Rue de la Croix Moreau",
    zipCode: "75018",
    metroLine: "12",
    metroStation: "Porte de la Chapelle",
    open24Hours: false,
    category: "park",
    withWho: ["friends", "family"],
    theme: "local",
  },
  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663178214/Pick%20a%20place/image_processing20220510-28764-1hof1u1_ir8gr4.jpg",
    name: "Parc Kellermann",
    adress: "19, Rue de la Poterne des Peupliers",
    zipCode: "75013",
    metroLine: "7",
    metroStation: "Maison Blanche",
    open24Hours: false,
    category: "park",
    withWho: ["couple", "friends", "family"],
    theme: ["local", "romantic"],
  },
  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663178214/Pick%20a%20place/cover-r4x3w1000-58e22193a6e96-paris_rnimgb.jpg",
    name: "Parc des Rives de Seine",
    adress: "Quai Henri IV",
    zipCode: "75004",
    metroLine: "7",
    metroStation: "Sully Morland",
    open24Hours: true,
    category: "park",
    withWho: ["couple", "friends", "family", "with pets"],
    theme: ["romantic", "trendy", "historic", "festive"],
  },
  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663178214/Pick%20a%20place/02_passy.nov.03-4ab2b_wxmjsf.jpg",
    name: "Parc de Passy",
    adress: "32, avenue du Président Kennedy",
    zipCode: "75016",
    metroLine: "6",
    metroStation: "Passy",
    open24Hours: false,
    category: "park",
    withWho: ["couple", "friends", "family"],
    theme: ["romantic", "local"],
  },
  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663178216/Pick%20a%20place/15e_Parc_Georges_Brassens_xzuy8x.jpg",
    name: "Parc Georges Brassens",
    adress: "2, place Jacques-Marette",
    zipCode: "75015",
    metroLine: "12",
    metroStation: "Convention",
    open24Hours: false,
    category: "park",
    withWho: ["couple", "friends", "family"],
    theme: ["romantic", "festive", "local"],
  },
  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663178214/Pick%20a%20place/square-de-la-turlure_wxjqti.jpg",
    name: "Parc Marcel Bleustein Blanchet",
    adress: "1, Rue de la Bonne",
    zipCode: "75018",
    metroLine: "12",
    metroStation: "Lamarck Caulaincourt",
    open24Hours: false,
    category: "park",
    withWho: ["couple", "friends", "family"],
    theme: ["historic", "festive"],
  },
  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663178214/Pick%20a%20place/14730042_OpM3u6UoK5e84bIB0jYE7NsfBLoCn-heTaYxAFFDnho_xxrmu2.jpg",
    name: "Parc de Choisy",
    adress: "128-160, avenue de Choisy",
    zipCode: "75013",
    metroLine: "7",
    metroStation: "Tolbiac",
    open24Hours: false,
    category: "park",
    withWho: ["friends", "family", "with pets"],
    theme: "local",
  },
  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663178214/Pick%20a%20place/parc-de-la-butte-du-chapeau-rouge-paris-19-1_fgq4bi.jpg",
    name: "Parc de la Butte du Chapeau Rouge",
    adress: "5, avenue Debidour",
    zipCode: "75019",
    metroLine: "7bis",
    metroStation: "Pré-Saint-Gervais",
    open24Hours: false,
    category: "park",
    withWho: ["friends", "family"],
    theme: ["local"],
  },
  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663178214/Pick%20a%20place/image_processing20220510-28764-zc23io_gy1utb.jpg",
    name: "Parc Sainte-Périne",
    adress: "41, rue Mirabeau",
    zipCode: "75016",
    metroLine: "10",
    metroStation: "Chardon Lagache",
    open24Hours: false,
    category: "park",
    withWho: ["family", "with pets"],
    theme: "local",
  },
  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663178214/Pick%20a%20place/21c530a91412e58772fb5fcef0bb49b1_sjpz8i.jpg",
    name: "Parc de la Cité Universitaire",
    adress: "17 boulevard Jourdan",
    zipCode: "75014",
    metroLine: "B",
    metroStation: "Cité Universitaire",
    open24Hours: false,
    category: "park",
    withWho: "friends",
    theme: "local",
  },

  /*
  🌳gardens🌳
  */

  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663178215/Pick%20a%20place/image_1_zyai6l.jpg",
    name: "Esplanade des Invalides",
    adress: "1, rue Fabert",
    zipCode: "75007",
    metroLine: "8",
    metroStation: "La Tour Maubourg",
    open24Hours: true,
    category: "garden",
    withWho: ["couple", "friends"],
    theme: ["festive", "trendy", "historic"],
  },
  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663178215/Pick%20a%20place/image_processing20210402-10975-1plrbuh_eznz0h.jpg",
    name: "Jardin de Reuilly",
    adress: "15, rue Albinoni",
    zipCode: "75012",
    metroLine: "8",
    metroStation: "Montgallet",
    open24Hours: false,
    category: "garden",
    withWho: ["couple", "friends", "family"],
    theme: ["local", "romantic"],
  },
  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663178215/Pick%20a%20place/1jard_ars1_v2t6pa.jpg",
    name: "Jardin du Port de l'Arsenal",
    adress: "53, boulevard de la Bastille",
    zipCode: "75012",
    metroLine: "1",
    metroStation: "Bastille",
    open24Hours: true,
    category: "garden",
    withWho: ["couple", "friends"],
    theme: ["festive", "historic", "trendy"],
  },
  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663178215/Pick%20a%20place/604143-le-jardin-des-plantes_dolthd.jpg",
    name: "Jardin des Plantes",
    adress: "2 rue Buffon",
    zipCode: "75005",
    metroLine: "5",
    metroStation: "Quai de la Rapée",
    open24Hours: false,
    category: "garden",
    withWho: ["couple", "friends", "family"],
    theme: ["trendy", "romantic", "historic"],
  },

  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663233792/Pick%20a%20place/le-jardin-des-rosiers_onxdqf.jpg",
    name: "Jardin des Rosiers Joseph Migneret",
    adress: "10 rue des Rosiers",
    zipCode: "75004",
    metroLine: "1",
    metroStation: "Saint Paul",
    open24Hours: false,
    category: "garden",
    withWho: ["couple", "friends"],
    theme: "private",
  },
  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663178215/Pick%20a%20place/Jardin-Catherine-Labour%C3%A9-_-630x405-_-_-Paris-Touriste-Office-Photographe-Am%C3%A9lie-Dupont_crpkca.jpg",
    name: "Jardin Catherine Labouré",
    adress: "29 rue de Babylone",
    zipCode: "75007",
    metroLine: "10",
    metroStation: "Vaneau",
    open24Hours: false,
    category: "garden",
    withWho: ["couple", "friends", "family"],
    theme: ["romantic", "private"],
  },

  /*
  🌳squares🌳
  */
  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663178215/Pick%20a%20place/image_2_caktfz.jpg",
    name: "Places des Vosges, Square Louis-XIII,",
    adress: "30, place des Vosges",
    zipCode: "75004",
    metroLine: "8",
    metroStation: "Chemin Vert",
    open24Hours: false,
    category: "square",
    withWho: ["couple", "friends", "family"],
    theme: ["historic", "trendy", "romantic", "festive"],
  },
  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663178215/Pick%20a%20place/square-du-vert-galant-paris-1_eyvexi.jpg",
    name: "square du Vert Galant",
    adress: "Place du Pont-Neuf",
    zipCode: "75001",
    metroLine: "7",
    metroStation: "Pont Neuf",
    open24Hours: true,
    category: "square",
    withWho: ["couple", "friends"],
    theme: ["romantic", "historic"],
  },
];

require("../db/index");

const seedDB = async () => {
  await Place.deleteMany({});
  const insertedPlaces = await Place.insertMany(places);

  console.log(`${insertedPlaces.length} places were created`);
};
seedDB().then(() => {
  mongoose.connection.close();
});

/*
model to add new place
{
    name:"",
    adress:"",
    zipCode:"",
    metroLine:"",
    metroStation:"",
    open24Hours:,
    category:"",
    theme:"",
  }
  */
