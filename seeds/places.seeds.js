const Place = require("../models/Place.model");
const mongoose = require("mongoose");

const places = [
  // parks
  {
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
    name: "Square Louis-XIII, Places des Vosges",
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
  {
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
  {
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

// {
//     name:"",
//     adress:"",
//     zipCode:"",
//     metroLine:"",
//     metroStation:"",
//     open24Hours:,
//     category:"",
//     theme:"",
//   }
