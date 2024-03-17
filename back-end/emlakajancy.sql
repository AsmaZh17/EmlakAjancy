-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mer. 13 mars 2024 à 13:42
-- Version du serveur : 8.2.0
-- Version de PHP : 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `emlakajancy`
--

-- --------------------------------------------------------

--
-- Structure de la table `avantages_immobilier`
--

DROP TABLE IF EXISTS `avantages_immobilier`;
CREATE TABLE IF NOT EXISTS `avantages_immobilier` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `avantages_immobilier`
--

INSERT INTO `avantages_immobilier` (`id`, `description`, `icon`, `nom`) VALUES
(1, 'Explorez une vaste sélection de propriétés, des appartements confortables aux maisons de luxe, pour trouver la maison de vos rêves.', 'fa-building', 'Large Property Selection'),
(2, 'Faites équipe avec nos agents immobiliers experts qui vous guideront tout au long du processus, de la recherche à l\'achat ou à la vente de votre propriété.', 'fa-user-tie', 'Expert Agents'),
(3, 'Bénéficiez de consultations personnalisées pour comprendre vos besoins spécifiques et trouver la propriété qui correspond parfaitement à vos critères.', 'fa-comments', 'Personalized Consultations'),
(4, 'Nous croyons en la transparence totale dans toutes les transactions. Soyez assuré que chaque étape du processus immobilier est claire et compréhensible.', 'fa-handshake', 'Transparent Transactions');

-- --------------------------------------------------------

--
-- Structure de la table `typologie`
--

DROP TABLE IF EXISTS `typologie`;
CREATE TABLE IF NOT EXISTS `typologie` (
  `dtype` varchar(31) NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `adresse` varchar(255) DEFAULT NULL,
  `annee_construction` int NOT NULL,
  `description` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `nom_projet` varchar(255) DEFAULT NULL,
  `ref` int NOT NULL,
  `urlimage` varbinary(1024) DEFAULT NULL,
  `categorie` varchar(255) DEFAULT NULL,
  `etat` varchar(255) DEFAULT NULL,
  `hidden` bit(1) NOT NULL,
  `libre` bit(1) NOT NULL,
  `localisation` varchar(1024) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `prix` double NOT NULL,
  `surface` double NOT NULL,
  `etage` int DEFAULT NULL,
  `nombre_chambres` int DEFAULT NULL,
  `nombre_animaux` int DEFAULT NULL,
  `type_culture` varchar(255) DEFAULT NULL,
  `jardin` bit(1) DEFAULT NULL,
  `nombre_pieces` int DEFAULT NULL,
  `couvert` bit(1) DEFAULT NULL,
  `nombre_places` int DEFAULT NULL,
  `constructible` bit(1) DEFAULT NULL,
  `type_terrain` varchar(255) DEFAULT NULL,
  `surface_jardin` double DEFAULT NULL,
  `proprietaire_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK8riym0rhm0mtfrnc0uuh5955f` (`proprietaire_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `typologie`
--

INSERT INTO `typologie` (`dtype`, `id`, `adresse`, `annee_construction`, `description`, `nom_projet`, `ref`, `urlimage`, `categorie`, `etat`, `hidden`, `libre`, `localisation`, `prix`, `surface`, `etage`, `nombre_chambres`, `nombre_animaux`, `type_culture`, `jardin`, `nombre_pieces`, `couvert`, `nombre_places`, `constructible`, `type_terrain`, `surface_jardin`, `proprietaire_id`) VALUES
('Villa', 2, 'Ksar Hellal, Monastir', 2004, 'Cette villa, située à Ksar Hellal à proximité du café Rotana, s\'érige sur un terrain de 1025 m² réparti sur deux niveaux.  À l\'extérieur, vous trouverez un jardin bien entretenu agrémenté d\'une piscine, ainsi qu\'un abri pour quatre voitures.', 'Villa individuelle en vente', 5, 0xaced0005757200135b4c6a6176612e6c616e672e537472696e673badd256e7e91d7b4702000078700000000774002c2e2e2f2e2e2f6173736574732f696d672f5265736964656e63652f56696c6c612d696d672d312e6a7065670a74002c2e2e2f2e2e2f6173736574732f696d672f5265736964656e63652f56696c6c612d696d672d322e6a7065670a74002c2e2e2f2e2e2f6173736574732f696d672f5265736964656e63652f56696c6c612d696d672d332e6a7065670a74002c2e2e2f2e2e2f6173736574732f696d672f5265736964656e63652f56696c6c612d696d672d342e6a7065670a74002c2e2e2f2e2e2f6173736574732f696d672f5265736964656e63652f56696c6c612d696d672d352e6a7065670a74002c2e2e2f2e2e2f6173736574732f696d672f5265736964656e63652f56696c6c612d696d672d362e6a7065670a74002c2e2e2f2e2e2f6173736574732f696d672f5265736964656e63652f56696c6c612d696d672d372e6a7065670a, 'Villa', 'Vente', b'0', b'0', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1243.0092730463566!2d10.888958807216559!3d35.65320088578479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1302113313eac321%3A0x8bca68ab1b65cc3a!2sInstitut%20Sup%C3%A9rieur%20des%20Etudes%20Technologiques%20(ISET)%20de%20Ksar%20Hellal!5e0!3m2!1sfr!2stn!4v1709666283897!5m2!1sfr!2stn', 1390000, 1025, NULL, 5, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 250, NULL),
('Appartement', 3, 'Mahdia - Hiboun', 2015, 'Cet appartement occupe le troisième étage d\'une résidence sécurisée et avec ascenseur.  A l\'entrée on trouve un salon spacieux et une salle à manger . La cuisine est entièrement aménagée par plusieurs éléments de rangement fonctionnels et équipée par une hotte aspirante, une plaque chauffante, un four électrique et un réfrigérateur. Elle donne accès à un séchoir', 'S+1 en location', 1, 0xaced0005757200135b4c6a6176612e6c616e672e537472696e673badd256e7e91d7b470200007870000000057400322e2e2f2e2e2f6173736574732f696d672f5265736964656e63652f417070617274656d656e742d696d672d312e6a7065670a7400322e2e2f2e2e2f6173736574732f696d672f5265736964656e63652f417070617274656d656e742d696d672d322e6a7065670a7400322e2e2f2e2e2f6173736574732f696d672f5265736964656e63652f417070617274656d656e742d696d672d332e6a7065670a7400322e2e2f2e2e2f6173736574732f696d672f5265736964656e63652f417070617274656d656e742d696d672d342e6a7065670a7400322e2e2f2e2e2f6173736574732f696d672f5265736964656e63652f417070617274656d656e742d696d672d352e6a7065670a, 'Appartement', 'Location', b'0', b'0', 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1623.8592492700438!2d11.031215528711819!3d35.51123830000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1stahar%20sfar%20mahdia!5e0!3m2!1sfr!2stn!4v1709668248198!5m2!1sfr!2stn', 800, 98, 1, 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('Ferme', 4, 'Kalâa Kebira, Sousse', 2023, 'Une ferme de 9000m² située à Kalaa Kbira avec une façade de 52m² sur la route principale équipée par l\'électricité et l\'eau. Elle contient:  _80 oliviers.  -Arbres fruitiers.  -10 vaches latiers de divers races.', 'Ferme en vente', 2, 0xaced0005757200135b4c6a6176612e6c616e672e537472696e673badd256e7e91d7b4702000078700000000274002e2e2e2f2e2e2f6173736574732f696d672f5265736964656e63652f4665726d652d696d672d312e6a7065670a0a0a74002e2e2e2f2e2e2f6173736574732f696d672f5265736964656e63652f4665726d652d696d672d322e6a7065670a0a0a, 'Ferme', 'Vente', b'0', b'1', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.511761899254!2d10.472171675656018!3d35.90997167251426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd8f3e95729775%3A0xf58f177b133129eb!2zZmVybWUgSGFiaWIgLSDYs9in2YbZitipINit2KjZitio!5e0!3m2!1sfr!2stn!4v1709669906111!5m2!1sfr!2stn', 350000, 8880, NULL, NULL, 10, 'Culture de maïs', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('Terrain', 5, 'Sousse Centre Ville, Rue el mohsinin - Bouhsina', 2023, 'Terrain isolé avec une façade de 30 mètre qui permet de bâtir un RDC et deux étages.  Ce dernier est idéal pour construire une villa avec des espaces généreux ou bien une résidence familiale, il jouit d’un très bon voisinage de grandes villas.', 'Terrain habitation ind. en vente', 3, 0xaced0005757200135b4c6a6176612e6c616e672e537472696e673badd256e7e91d7b4702000078700000000174002e2e2e2f2e2e2f6173736574732f696d672f5265736964656e63652f5465727261696e2d696d672d312e6a7065670a, 'Terrain', 'Vente', b'0', b'0', 'https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d1224.288536346547!2d10.617367116828024!3d35.81527514732574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d35.8147089!2d10.6184146!4m3!3m2!1d35.8147385!2d10.6184633!5e0!3m2!1sfr!2stn!4v1709670756068!5m2!1sfr!2stn', 1200000, 1167, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, b'1', 'Terrain agricole', NULL, NULL),
('Appartement', 6, 'Hergla, Sousse', 2022, 'Cet appartement fait partie intégrante d\'un projet direct du promoteur à Hergla, caractérisé par sa situation privilégiée à seulement 350 mètres de la mer et de la forêt d\'El Madfoun. La résidence bénéficie d\'une localisation stratégique, se trouvant à 15 minutes de l\'aéroport Enfidha et à 10 minutes du Mall of Sousse.', 'S+2 en vente', 4, 0xaced0005757200135b4c6a6176612e6c616e672e537472696e673badd256e7e91d7b470200007870000000067400322e2e2f2e2e2f6173736574732f696d672f5265736964656e63652f417070617274656d656e742d696d672d362e6a7065670a7400322e2e2f2e2e2f6173736574732f696d672f5265736964656e63652f417070617274656d656e742d696d672d372e6a7065670a7400322e2e2f2e2e2f6173736574732f696d672f5265736964656e63652f417070617274656d656e742d696d672d382e6a7065670a7400322e2e2f2e2e2f6173736574732f696d672f5265736964656e63652f417070617274656d656e742d696d672d392e6a7065670a7400332e2e2f2e2e2f6173736574732f696d672f5265736964656e63652f417070617274656d656e742d696d672d31302e6a7065670a7400332e2e2f2e2e2f6173736574732f696d672f5265736964656e63652f417070617274656d656e742d696d672d31312e6a7065670a, 'Appartement', 'Vente', b'0', b'1', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4338.131541543266!2d10.501677948679314!3d36.028979248109074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd84386e0b3e0b%3A0x6c6b092b676ca119!2sHergla!5e0!3m2!1sfr!2stn!4v1709671220689!5m2!1sfr!2stn', 260000, 92, 4, 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
('Villa', 7, 'Monastir, Rue trèves - Skanes', 2005, 'Ce triplex jumelé est totalement indépendant et sécurisé au cœur de la zone Skanes La Falaise.  Il est édifié sur trois niveaux interconnectés et agrémenté d\'un jardin.  Au rez-de-chaussée on touve un spacieux salon baigné de lumière naturelle grâce à ses larges baies vitrées qui s\'ouvrent sur le jardin. Parfait pour se détendre en famille ou pour recevoir des invités.', 'Villa jumelée en location', 6, 0xaced0005757200135b4c6a6176612e6c616e672e537472696e673badd256e7e91d7b4702000078700000000774002e2e2e2f2e2e2f6173736574732f696d672f5265736964656e63652f56696c6c612d696d672d382e6a7065670a0a0a74002e2e2e2f2e2e2f6173736574732f696d672f5265736964656e63652f56696c6c612d696d672d392e6a7065670a0a0a74002f2e2e2f2e2e2f6173736574732f696d672f5265736964656e63652f56696c6c612d696d672d31302e6a7065670a0a0a74002f2e2e2f2e2e2f6173736574732f696d672f5265736964656e63652f56696c6c612d696d672d31312e6a7065670a0a0a74002f2e2e2f2e2e2f6173736574732f696d672f5265736964656e63652f56696c6c612d696d672d31322e6a7065670a0a0a74002f2e2e2f2e2e2f6173736574732f696d672f5265736964656e63652f56696c6c612d696d672d31332e6a7065670a0a0a74002f2e2e2f2e2e2f6173736574732f696d672f5265736964656e63652f56696c6c612d696d672d31342e6a7065670a0a0a, 'Villa', 'Location', b'0', b'1', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1474.9271853981425!2d10.803349379908761!3d35.77693398757688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13026d53764e6653%3A0x55abb78fa2da4446!2sRue%20Mohamed%20Salah%20Sayadi%2C%20Monastir!5e0!3m2!1sfr!2stn!4v1709671727818!5m2!1sfr!2stn', 1500, 600, NULL, 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 100, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `dtype` varchar(31) NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `adresse` varchar(255) DEFAULT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `telephone` varchar(255) DEFAULT NULL,
  `whatsapp` varchar(255) DEFAULT NULL,
  `instagram` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`dtype`, `id`, `email`, `nom`, `password`, `prenom`, `role`, `adresse`, `facebook`, `telephone`, `whatsapp`, `instagram`) VALUES
('Proprietaire', 1, 'Emlakajanci@gmail.com', 'Emlak', '$2a$10$MNzI9GIpRhY8VUi4JVJQtekyEQem5mwlKffz0zceiMQtAzF83ZMaq', 'Ajanci', 'Admin', 'Monastir, Tunisie', 'Emlak Ajanci', '+216 20 988 050', '+21620988050', 'Emlak_ajanci'),
('User', 2, 'asmazahani17@gmail.com', 'Asma', '$2a$10$rSlIOw3/lIcJvVqL6YRa8OcB.IGg/dq7g4yfFPyarIOnZ0ZfthCHe', 'Zh', 'User', NULL, NULL, NULL, NULL, NULL),
('User', 3, 'test@gmail.com', 'test', '$2a$10$saJ1xIKZtjUktEOxFQTCIehYqoGwUZJ2eBfXuBRa/B7FsnGis1r8W', 'test', 'User', NULL, NULL, NULL, NULL, NULL);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `typologie`
--
ALTER TABLE `typologie`
  ADD CONSTRAINT `FK8riym0rhm0mtfrnc0uuh5955f` FOREIGN KEY (`proprietaire_id`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
