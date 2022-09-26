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
    OpeningTimes: "Summer: 7am-10pm. Winter: 7am-8pm.",
    category: "park",
    withWho: ["couple", "friends", "family"],
    theme: ["festive", "with pets"],
    description:
      "The Buttes-Chaumont Park, in the north-east of Paris, is one of the biggest and original green spaces in Paris, measuring 25 hectares. Its construction on quarries explains its impressive steepness and change in levels and heights. Visitors can appreciate stunning views of the city from this hilly setting, especially in the Montmartre district. The layout gives it a particular charm: caves and waterfalls, a suspended bridge, and a high viewpoint. It is brightened up with exotic, indigenous trees and numerous birds (seagulls, moorhens, and mallard ducks) share the area and enjoy the artificial lake. Entertainment for children also takes place in the park and there are break areas where you can get something to eat. ",
  },
  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663170594/Pick%20a%20place/La_Rotonde_du_Parc_Monceau_September_16__2007_jesqf5.jpg",
    name: "Parc Monceau",
    adress: "35, Boulevard de Courcelles",
    zipCode: "75008",
    metroLine: "2",
    metroStation: "Monceau",
    OpeningTimes: "Open daily, hours vary. ",
    category: "park",
    withWho: ["couple", "friends", "family"],
    theme: "trendy",
    description:
      "The construction of Parc Monceau dates back to the 17th century, under the orders of the Duke of Chartres. Situated in the 8th arrondissement, today it is one of the most elegant gardens in Paris, and a reflection of the district. Visitors can enter through the great wrought iron gates embellished with gold. Walking around the park, you’ll find many beautiful surprises: numerous statues, a Renaissance archway belonging to the former Paris City Hall, spectacular trees, a wide variety of birds and a large pond. Parc Monceau is surrounded by luxury buildings and sumptuous mansions, including the Musée Cernuschi (Museum of Asian Arts). A peaceful and pleasant park visited by Parisians and tourists. The park also features playgrounds for children. ",
  },
  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663170685/Pick%20a%20place/image_processing20220510-28764-jcf1w5_h1m35w.jpg",
    name: "Parc de Bercy",
    adress: "128, Quai de Bercy",
    zipCode: "75012",
    metroLine: "6",
    metroStation: "Bercy",
    OpeningTimes:
      "Open from 8am/9am to 5.45pm/7pm/7.30pm/8.30pm/9.30pm (depending on the season). ",
    category: "park",
    withWho: ["friends", "family"],
    theme: "local",
    description:
      "Situated on the site of former wine warehouses, the Parc de Bercy still retains some reminders of its past, such as a vineyard and an old railway line. Located at the heart of the 12th arrondissement, between Gare de Lyon and the Cour Saint-Émilion district, the Parc de Bercy is a lovely place for a walk whatever the season. On one side is the largest concert venue in Paris, Bercy Arena. At the other end is the 'jardin romantique' with its little lake and island, populated with ducks and lilies. And in between, film lovers visit the Cinémathèque française (designed by American architect Franck Gehry). Biodiversity is an important part of the Parc de Bercy, with the Maison du Lac (exhibitions on the gardens, conferences, etc.), the Maison du Jardinage (advice for new gardeners, gardening classes, etc.) the Chai de Bercy (wine store) and the Orangerie. The park is a popular with families for walking, football and rollerblading and is a perfect place for Parisians to unwind. ",
  },
  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663172086/Pick%20a%20place/balade-belleville-menilmontant-paris_qjaora.jpg",
    name: "Parc de Belleville",
    adress: "47 rue de Couronnes",
    zipCode: "75020",
    metroLine: "2, 11",
    metroStation: "Bellevile",
    OpeningTimes:
      "The park: Opens at 8am during the week, and 9am on weekends and public holidays. Closes at 5.45pm, 7pm, 8.30pm or 9.30pm depending on the season. ",
    category: "park",
    withWho: ["couple", "friends"],
    theme: ["local", "festive"],
    description:
      "Until the 18th century Belleville was just a corner of the countryside with farms, windmills and open-air cafes. The former village, which became home to people of modest means, chased out of Paris by Haussman's renovations at the end of the 19th century, has recently seen a complete change. Built in 1988 on top of the Belleville hill, the Belleville park (45,000 m²) offers an unrestricted panoramic view of the capital. A wooded village destined for children offers tower staircases and toboggans in all sizes. There is a water course, made up of waterfalls and streams and a panoramic viewpoint where you can admire the Parisian landscape. Evidence of the area's wine-producing past, the park also has 140 vines, which each produce around 2 to 3 kilos of grapes. Harvesting takes place every year. ",
  },
  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663178213/Pick%20a%20place/parc-andre%CC%81_fvftdf.jpg",
    name: "Parc André Citroën",
    adress: "2, rue Cauchy",
    zipCode: "75015",
    metroLine: "RER C, 10",
    metroStation: "Javel - André Citroën",
    OpeningTimes:
      "From 8am or 9am to 7pm, 7.30pm, 8.30pm or 9.30pm depending on the season.",
    category: "park",
    withWho: ["couple", "friends", "family"],
    theme: "local",
    description:
      "The Parc André Citroën is located on the site of the former Parisian Citroën factory. Opened in 1992, with a surface area of 14 hectares, it is one of the newest parks in the capital. This futuristic site, designed by renowned landscapers and architects (Alain Provost, Gilles Clément, Patrick Berger, Jean-Paul Viguier and François Jodry), offers a beautiful view of the Seine and is the only green space in Paris that opens directly onto the river. The park is divided into three themed areas: the Jardin Blanc, the Jardin Noir and the big central park area. Visitors can discover numerous exotic trees and rare plants, two impressive hothouses and many other surprises. The various facilities at the park are great for relaxation or a source of entertainment. Children can take advantage of the ball-games area, ping-pong tables, spring-based toys and toboggans, not to mention the tethered air balloon offering a 150m high ride for children and adults (subject to weather conditions). ",
  },
  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663178213/Pick%20a%20place/image_hqlx6p.jpg",
    name: "Parc de Bagatelle",
    adress: "Route de Sèvres à Neuilly",
    zipCode: "75016",
    metroLine: "1",
    metroStation: "Pont de Neuilly",
    OpeningTimes:
      "November to February: every day from 9.30am to 5pm. Marc and Octobrer: every day from 9.30am to 6.30pm. April to September: every day from 9.30am to 8pm. ",
    category: "park",
    withWho: ["couple", "friends", "family"],
    theme: ["trendy", "romantic"],
    description:
      "The Parc de Bagatelle, situated at the heart of the Bois de Boulogne, is one of the City of Paris’s four botanical gardens. Created in 1775, the park and its chateau were built in 64 days after a wager between Queen Marie-Antoinette and her brother in-law, the Count of Artois. The Parc de Bagatelle is a great place for walking and relaxing. As well as giant trees and varied plant life, little bridges, rocks, caves, expanses of water and artificial waterfalls add to the charm and romantic aspect of the park. The 19th century Chinese pagoda is just one of the park’s curiosities. Visitors can admire the magnificent rose garden with 10,000 rose bushes from 1,200 different species. The park regularly hosts exhibitions and events as well as classical music concerts in the summer.",
  },
  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663178213/Pick%20a%20place/image_processing20220510-28764-1xyhapd_mwi8zu.jpg",
    name: "Parc Montsouris",
    adress: "2, rue Gazan",
    zipCode: "75014",
    metroLine: "RER B",
    metroStation: "Cité Universitaire",
    OpeningTimes: " Depends on the season. ",
    category: "park",
    withWho: ["couple", "friends", "family"],
    theme: ["local", "festive"],
    description:
      "The Parc Montsouris is one of the largest green spaces in Paris. It is located in the 14th arrondissement, between rue d'Alésia and the Cité Universitaire de Paris student accommodation. The park's proximity to the Cité Universitaire makes it a favourite walking spot for students. Built under Napoléon III and opened in 1969, the Parc Montsouris comprises a lake, beautiful statues, remarkable trees (Chinese parasol tree, Diospros kaki or Japanese persimmon tree ... ) and the restaurant 'Pavillon Montsouris', as well as being home to many different species of birds. Visitors can also see Montsouris meteorological observatory and the 'mire du Sud', a monument marking the location of the Paris meridian. The Montsouris reservoir, which holds a third of the drinking water consumed by Parisians, is open to the public once a year, on European Heritage Days. Many free concerts are given from May to September at the bandstand.",
  },
  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663178213/Pick%20a%20place/756216-le-parc-floral-un-magnifique-ecrin-de-verdure-a-paris_pfeciy.jpg",
    name: "Parc Floral de Paris",
    adress: "Route de la Pyramide",
    zipCode: "75012 ",
    metroLine: "1",
    metroStation: "Chateau de Vincennes",
    OpeningTimes: "Opens every day at 9.30am. Closing times vary by season.",
    category: "park",
    withWho: ["couple", "friends", "family"],
    theme: ["festive", "romantic"],
    description:
      "Opened in 1969, the Parc Floral de Paris changes with the seasons, and is popular with plant and nature lovers. Along with the Parc de Bagatelle, École Du Breuil and the Jardin des Serres d'Auteuil, it forms the botanical garden of Paris. Extending over 28 hectares, the park is situated at the heart of the Bois de Vincennes, a stone's throw away from the Château de Vincennes. There are four distinct landscape spaces. Great for walking, but also meeting and socialising (exhibition room, horticultural events, etc.) The park has numerous play areas for children, including a mini golf course like a miniature version of the city, with each of the 18 holes representing a Parisian monument. The park is also the venue for numerous free events every summer such as Paris Jazz Festival, Pestacles, and Festival Classique au Vert. ",
  },
  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663178213/Pick%20a%20place/%C3%8Ele_de_Reuilly_Bois_de_Vincennes_Paris_September_2013_005-1140x694_ngmtut.jpg",
    name: "Bois de Vincennes",
    adress: " Route de la Pyramide",
    zipCode: "75012",
    metroLine: "8",
    metroStation: "Porte Dorée",
    OpeningTimes:
      "The wood is open 24/7. The 'Ferme de Paris' is open on Saturdays and Sundays. The 'Marionnettes de Paris': Wednesday, Saturday and Sunday, 3.30pm-4.30pm (every day during school holidays in the Paris region).Boat hire on Lac Daumesnil is open every day from 9.30am-8pm. Parc Floral: 9.30am-6.30pm in winter, 9.30am-8pm in summer. ",
    category: "wood",
    withWho: ["couple", "friends", "family"],
    theme: ["festive", "trendy", "romantic", "with pets"],
    description:
      "The Bois de Vincennes is the capital's second largest 'green lung', after the Bois de Boulogne. It is located in the east of Paris, on the edge of the 12th arrondissement. Many organizations based in the Bois de Vincennes enable visitors to find out more about the wood and get a closer look at its wildlife; the École du Breuil and its arboretum, the Jardin d'agronomie tropicale, the Ferme de Paris, the Maison Paris Nature, ornithological reserves, etc. The Chateau de Vincennes, a magnificent example of medieval architecture, remains the wood's most notable monument, open every day. There are plenty of chances to relax, have fun or play sport. The Parc Floral is a family paradise with its play areas, including 18-hole mini golf, slides and ping-pong tables. The Parc Floral also offers many free events, especially in the summer; Paris Jazz Festival, the 'Pestacles' festival, Festival Classique au Vert ... On one of the lakes, visitors can go for a boat ride, and fans of horse racing can bet at the racecourse. The Bois de Vincennes is an unmissable place to explore on foot, by bike, alone, as a couple, with friends or as a family! ",
  },
  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663178213/Pick%20a%20place/image_processing20220510-28764-17rcpmr_vkmkhi.jpg",
    name: "Bois de Boulogne",
    adress: "93, Avenue de L'Hippodrome",
    zipCode: "75016",
    metroLine: "1",
    metroStation: "Porte Maillot",
    OpeningTimes:
      "The wood is open 24/7. Jardin des serres d'Auteuil: 8am or 9am - 6/7.30pm or 8.30pm depending on the season. The Jardin d'Acclimatation is open from 10am-7pm, April to September; 10am-6pm, October to March.",
    category: "wood",
    withWho: ["couple", "friends", "family"],
    theme: ["festive", "trendy", "romantic", "with pets"],
    description:
      "A former hunting ground for the Kings of France, the Bois de Boulogne has become the largest spot for relaxation in the west of Paris. With a surface area of 850 hectares, one of the ‘lungs’ of the capital encompasses the Parc de Bagatelle, the Jardin des Serres d'Auteuil, the Pré-Catelan and the Jardin d'Acclimatation. It offers numerous walkways, 28 km of bridleways and 15 km of touristic cycle routes. There are numerous facilities, which have been designed to suit everyone, such as playgrounds for children, the Musée en Herbe, picnic areas, bicycle hire and boat hire on the Lac Inférieur, the Auteuil and Longchamp racecourses, restaurants and the Théâtre de Verdure. ",
  },
  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663178214/Pick%20a%20place/image_processing20220510-28764-1imfyvm_hjgovk.jpg",
    name: "Parc Clichy Batignolles Martin Luther King",
    adress: "147, rue Cardinet",
    zipCode: "75017",
    metroLine: "14",
    metroStation: "Pont Cardinet",
    OpeningTimes: "Open daily, hours depending on the season. ",
    category: "park",
    withWho: ["friends", "family"],
    theme: "local",
    description:
      "A park full of surprises: laid out with many original areas, like the Jardin du rail, with its deckchairs, a play area for children and sports ground, or the landscaped water features with their aquatic plants and water margin plants: water lilies, iris, reeds, bulrushes … A rich and varied ecosystem. ",
  },
  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663178214/Pick%20a%20place/photo_SG_2021_-_PMA_-_zac_chapelle_charbon_-_paris_18_-_IMP-A-018_site_op%C3%A9_0_x82p5f.jpg",
    name: "Parc Chapelle Charbon",
    adress: "52, Rue de la Croix Moreau",
    zipCode: "75018",
    metroLine: "12",
    metroStation: "Porte de la Chapelle",
    OpeningTimes: "",
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
    OpeningTimes: "",
    category: "park",
    withWho: ["couple", "friends", "family"],
    theme: ["local", "romantic"],
    description:
      "Parc Kellermann is the largest park in the 13th arrondissement. It was built on the former Thiers wall, Paris’s last defensive wall. Its typical 1930s design, on two levels, features a French garden, children’s play areas, a fitness circuit, a football pitch and tennis courts. During the summer, a mobile games library proposes free fun activities for children. Since 2017, the park has also been home to an urban educational farm, where children and families can discover all kinds of animals including Ouessant sheep, dwarf goats, chickens, turkeys and rabbits. ",
  },
  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663178214/Pick%20a%20place/cover-r4x3w1000-58e22193a6e96-paris_rnimgb.jpg",
    name: "Parc des Rives de Seine",
    adress: "Quai Henri IV",
    zipCode: "75004",
    metroLine: "7",
    metroStation: "Sully Morland",
    OpeningTimes: "",
    category: "park",
    withWho: ["couple", "friends", "family"],
    theme: ["romantic", "trendy", "historic", "festive", "with pets"],
    description:
      "The Parc Rives de Seine, with a total length of 7 kilomtres, extends along both sides of the Seine and provides a place to walk and relax along the water, in the heart of the city. On the left bank, wander from Pont d'Alma to the Pont Royal. On the right bank you can go from Pont Neuf to the Pont du Sully, as well as the Arsenal basin between the Quai de la Rapée and Place de la Bastille. The Parc Rives de Seine, a designated UNESCO World Heritage Site that is only open to 'soft' trafiic (pedestrians and bikes), is lined with activites (playgrounds for children, picnic areas, terraces, cafes, climbing walls, petanque ...) and offers unusual views of some of Paris's great monuments. ",
  },
  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663178214/Pick%20a%20place/02_passy.nov.03-4ab2b_wxmjsf.jpg",
    name: "Parc de Passy",
    adress: "32, avenue du Président Kennedy",
    zipCode: "75016",
    metroLine: "6",
    metroStation: "Passy",
    OpeningTimes: "",
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
    OpeningTimes: "The opening hours of the park vary according to the season.",
    category: "park",
    withWho: ["couple", "friends", "family"],
    theme: ["romantic", "festive", "local"],
    description:
      "The Parc George Brassens is named after the famous singer and poet, who lived nearby. It is located in the 15th arrondissement, near Paris Expo Porte de Versailles. The park is a lovely, relaxing place for a walk with its river, little bridge and belvedere. It also contains beautiful trees, some rare species of birds, magnificent statues, a vineyard (pinot noir) and a beehive. The honey is sold on site one Saturday a month. Parents bring their kids to the park to enjoy the swings, pony rides and puppet theatre. The Monfort Théâtre, in the centre of the park, offers a multidisciplinary and contemporary programme encompassing dance, theatre and circus. Lovers of old books flock to the covered market every weekend for the old and second-hand book market. ",
  },
  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663178214/Pick%20a%20place/square-de-la-turlure_wxjqti.jpg",
    name: "Parc Marcel Bleustein Blanchet",
    adress: "1, Rue de la Bonne",
    zipCode: "75018",
    metroLine: "12",
    metroStation: "Lamarck Caulaincourt",
    OpeningTimes: "From Monday to Sunday from 8am-7:30pm. ",
    category: "park",
    withWho: ["couple", "friends", "family"],
    theme: ["historic", "festive"],
    description:
      "The Turlure Park is a garden snail offering its visitors breathtaking views of the Sacré-Coeur and the Montmartre district. It is located at the corner of the rues de la Bonne and du Chevalier de la Barre. The name comes from that of the old mill that was there in 1770. It was undermined by quarrying and was destroyed in 1827. Its location was occupied by a tavern between 1853 and 1860, called the Tower of Solferino. The park is also called Square Bleustein-Blanchet and occupies an area of just over 4700 m². ",
  },
  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663178214/Pick%20a%20place/14730042_OpM3u6UoK5e84bIB0jYE7NsfBLoCn-heTaYxAFFDnho_xxrmu2.jpg",
    name: "Parc de Choisy",
    adress: "128-160, avenue de Choisy",
    zipCode: "75013",
    metroLine: "7",
    metroStation: "Tolbiac",
    OpeningTimes:
      "Open 8am/9am - 5:45pm/7pm/7:30pm/8:30pm/9:30pm (according to the season). ",
    category: "park",
    withWho: ["friends", "family"],
    theme: ["local", "with pets"],
    description:
      "The Parc de Choisy, located in Chinatown of Paris, is a classically inspired park. Rectangular in shape, it has a large ornamental pool and its centre features a vast esplanade. On either side of the esplanade, there are play areas and places to relax. The park also houses a fine collection of trees (ash, linden, ginkgo bilobas ...) ",
  },
  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663178214/Pick%20a%20place/parc-de-la-butte-du-chapeau-rouge-paris-19-1_fgq4bi.jpg",
    name: "Parc de la Butte du Chapeau Rouge",
    adress: "5, avenue Debidour",
    zipCode: "75019",
    metroLine: "7bis",
    metroStation: "Pré-Saint-Gervais",
    OpeningTimes: "",
    category: "park",
    withWho: ["friends", "family"],
    theme: ["local"],
    description:
      "Situated in the Mouzaia and Danube districts, this park was designed by Louis Azéma, one of the architects of the Palais de Chaillot. Created in 1939, it is located on one of the hills that were part of a series of gypsum quarries that extended to the Buttes Chaumont. It overlooks the Pré Saint-Gervais plain. This landscaped park has remarkable trees and offers the walker belvederes with views, large lawns, and expanses of heather. During the festival Paris Quartier d'été, concerts are regularly held here. ",
  },
  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663178214/Pick%20a%20place/image_processing20220510-28764-zc23io_gy1utb.jpg",
    name: "Parc Sainte-Périne",
    adress: "41, rue Mirabeau",
    zipCode: "75016",
    metroLine: "10",
    metroStation: "Chardon Lagache",
    OpeningTimes: "",
    category: "park",
    withWho: "family",
    theme: ["local", "with pets"],
    description: "",
  },
  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663178214/Pick%20a%20place/21c530a91412e58772fb5fcef0bb49b1_sjpz8i.jpg",
    name: "Parc de la Cité Universitaire",
    adress: "17 boulevard Jourdan",
    zipCode: "75014",
    metroLine: "B",
    metroStation: "Cité Universitaire",
    OpeningTimes: "",
    category: "park",
    withWho: "friends",
    theme: "local",
    description:
      "The Cité internationale universitaire was established in 1925 as a campus for the Paris universities. Set in a 34-hectare ecologically managed park, the 40 ‘houses’ were built between 1925 and 1969. They reflect a diversity of architectural styles inspired by the Modernist movement and the different countries represented. Five of them are classified as historic monuments, including the Swiss Foundation and the Brazil House, both designed by Le Corbusier. Familiarly known as the ‘Cité-U’, the campus welcomes 12,000 students and researchers from 140 countries each year and offers a vibrant cultural programme of events including shows, exhibitions and guided tours. ",
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
    OpeningTimes: "",
    category: "garden",
    withWho: ["couple", "friends"],
    theme: ["festive", "trendy", "historic"],
    description:
      "Reliant le Pont Alexandre III à l’Hôtel des Invalides, cette grande esplanade ouverte, bordée d’un mail de tilleuls, offre de magnifiques perspectives sur certains des plus beaux monuments de Paris. ",
  },
  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663178215/Pick%20a%20place/image_processing20210402-10975-1plrbuh_eznz0h.jpg",
    name: "Jardin de Reuilly",
    adress: "15, rue Albinoni",
    zipCode: "75012",
    metroLine: "8",
    metroStation: "Montgallet",
    OpeningTimes: "Horaires en fonction de la saison. ",
    category: "garden",
    withWho: ["couple", "friends", "family"],
    theme: ["local", "romantic"],
    description:
      "Situated along the Coulée Verte René Dumont trail, the Jardin de Reuilly - Paul Pernin is overlooked by a large wooden footbridge. The park has a large, gently sloping 4,200 m² lawn, surrounded by themed gardens and embellished with female statues. It was created by the architect Pierre Colboc and the group Paysage between 1992 and 1998, on the site of a former goods station. The first public water fountain in France can be found here, and provides free still or sparkling water at room temperature. ",
  },
  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663178215/Pick%20a%20place/1jard_ars1_v2t6pa.jpg",
    name: "Jardin du Port de l'Arsenal",
    adress: "53, boulevard de la Bastille",
    zipCode: "75012",
    metroLine: "1",
    metroStation: "Bastille",
    OpeningTimes: "",
    category: "garden",
    withWho: ["couple", "friends"],
    theme: ["festive", "historic", "trendy"],
    description: "",
  },
  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663178215/Pick%20a%20place/604143-le-jardin-des-plantes_dolthd.jpg",
    name: "Jardin des Plantes",
    adress: "2 rue Buffon",
    zipCode: "75005",
    metroLine: "5",
    metroStation: "Quai de la Rapée",
    OpeningTimes:
      "Open daily, hours vary depending on the season. Generally from 7.30am to 7.45pm (summer) and 8am to 5.15pm (winter). ",
    category: "garden",
    withWho: ["couple", "friends", "family"],
    theme: ["trendy", "romantic", "historic"],
    description:
      "A nature retreat in the centre of Paris, a botanical garden at the cutting edge of research, and a living testimony to history, the Jardin des Plantes is a 400-year-old garden of science. Its mission is to gather and study plant collections and to welcome the public. Thanks to its plant and flower beds, remarkable trees, statues and pathways, it offers visitors a diverse, well-tended stroll, with mysterious surprises at every turn! Amble at leisure over 2.5 hectares of French Gardens, follow a guide through the world’s mountainous regions, take a botany workshop, discover remarkable historic trees such as our 315-year-old pistachio tree, and generally enjoy an aesthetic, sensory-rich experience. In this green setting, cultural sites dedicated to nature and showcasing the Museum's exceptional heritage collections can be discovered at the bend of the paths: Historical galleries (museums) that present the issues of biodiversity and geodiversity (the Grande Galerie de l'Évolution, the Galerie de Paléontologie et d'Anatomie comparée and the Galerie de Minéralogie et de Géologie); the Ménagerie, the Jardin des Plantes zoo; the Grandes Serres, which host the tropics in Paris.",
  },

  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663233792/Pick%20a%20place/le-jardin-des-rosiers_onxdqf.jpg",
    name: "Jardin des Rosiers Joseph Migneret",
    adress: "10 rue des Rosiers",
    zipCode: "75004",
    metroLine: "1",
    metroStation: "Saint Paul",
    OpeningTimes: "8AM–5:15PM",
    category: "garden",
    withWho: ["couple", "friends"],
    theme: "private",
    description:
      "Literally a hidden, the entrance can bee easily missed, however once in it opens a up to a lovely park garden area, that is perfect to have lunch.",
  },
  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663178215/Pick%20a%20place/Jardin-Catherine-Labour%C3%A9-_-630x405-_-_-Paris-Touriste-Office-Photographe-Am%C3%A9lie-Dupont_crpkca.jpg",
    name: "Jardin Catherine Labouré",
    adress: "29 rue de Babylone",
    zipCode: "75007",
    metroLine: "10",
    metroStation: "Vaneau",
    OpeningTimes: "8h ou 9h-19h30 ou 20h30 ou 21h30, selon la saison. ",
    category: "garden",
    withWho: ["couple", "friends", "family"],
    theme: ["romantic", "private"],
    description:
      "The garden is named after a young 19th-century nun to whom the Virgin Mary was said to have appeared as she tended the kitchen garden. These days the garden’s visitors are far less spiritual – mainly Parisians wanting to relax in the 7,000-m² expanse of lawns and greenery. The garden’s fruit trees, vine-covered pergola and vegetable garden have survived the passage of time. It is an attractive spot in summer for an outing with friends or family, to sunbathe on the lawns or to walk along the cross-shaped outline showing where the convent once stood. ",
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
    OpeningTimes: "",
    category: "square",
    withWho: ["couple", "friends", "family"],
    theme: ["historic", "trendy", "romantic", "festive"],
    description:
      "This square is majestic and quite unique in the uniform design of the buildings and colorful red brick pattern on the facades. The perfectly square green park in the center has 4 fountains, a statue, trees, grass and benches. Many people goes to the square lying on the grass, eating, studying, visiting, and just hanging out. It appears to be a popular place to be.",
  },
  {
    image:
      "https://res.cloudinary.com/ddfqvbvpp/image/upload/v1663178215/Pick%20a%20place/square-du-vert-galant-paris-1_eyvexi.jpg",
    name: "square du Vert Galant",
    adress: "Place du Pont-Neuf",
    zipCode: "75001",
    metroLine: "7",
    metroStation: "Pont Neuf",
    OpeningTimes: "Open round-the-clock (24/7). ",
    category: "square",
    withWho: ["couple", "friends"],
    theme: ["romantic", "historic"],
    description:
      "Erected in tribute to Henri IV and his numerous mistresses, the Square du Vert Galant obtained the ‘Espace vert écologique' (ecological green space) label in 2007. And with good reason, the square has an impressive fauna and flora considering it is situated in the centre of the capital. Consequently, the Square du Vert Galant has become one of the most popular places for romantic strolls where loving couples enjoy little boat trips and wonderful views of the Seine, the Musée du Louvre and the Hôtel de la Monnaie. ",
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
    OpeningTimes:,
    category:"",
    theme:"",
  }
  */
