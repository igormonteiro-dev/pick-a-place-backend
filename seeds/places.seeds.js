const Place = require("../models/Place.model");
const mongoose = require("mongoose");

const places = [
  // Parks
  {
    name: "Parc des Buttes Chaumont",
    adress: "7, rue Botzaris",
    zipCode: 75019,
    metroLine: "11",
    metroStation: "Pyrénées",
    open24Hours: false,
    category: "Park",
    theme: "Popular",
  },
  {
    name: "Parc Monceau",
    adress: "35, Boulevard de Courcelles",
    zipCode: "75008",
    metroLine: "2",
    metroStation: "Monceau",
    open24Hours: false,
    category: "Park",
    theme: "Family Friendly",
  },
  {
    name: "Parc de Bercy",
    adress: "128, Quai de Bercy",
    zipCode: "75012",
    metroLine: "6",
    metroStation: "Bercy",
    open24Hours: false,
    category: "Park",
    theme: "Popular",
  },
  {
    name: "Parc de Belleville",
    adress: "47 rue de Couronnes",
    zipCode: "75020",
    metroLine: "2, 11",
    metroStation: "Bellevile",
    open24Hours: false,
    category: "Park",
    theme: "Popular",
  },
  {
    name: "Parc André Citroën",
    adress: "2, rue Cauchy",
    zipCode: "75015",
    metroLine: "RER C, 10",
    metroStation: "Javel - André Citroën",
    open24Hours: false,
    category: "Park",
    theme: "Friends",
  },
  {
    name: "Parc de Bagatelle",
    adress: "Route de Sèvres à Neuilly",
    zipCode: "75016",
    metroLine: "1",
    metroStation: "Pont de Neuilly",
    open24Hours: false,
    category: "Park",
    theme: ["Trendy", "Family Friendly", "Romantic"],
  },
  {
    name: "Parc Montsouris",
    adress: "2, rue Gazan",
    zipCode: "75014",
    metroLine: "RER B",
    metroStation: "Cité Universitaire",
    open24Hours: false,
    category: "Park",
    theme: "Party",
  },
  {
    name: "Parc Floral de Paris",
    adress: "Route de la Pyramide",
    zipCode: "75012 ",
    metroLine: "1",
    metroStation: "Chateau de Vincennes",
    open24Hours: false,
    category: "Park",
    theme: "Family Friendly",
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
