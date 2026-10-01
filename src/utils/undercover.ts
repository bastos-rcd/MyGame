import { ROLES, type Player, type Role, type Winner } from '@/models/undercover'

export const WORDS: [string, string][] = [
	['Pizza', 'Burger'],
	['Café', 'Thé'],
	['Croissant', 'Chocolatine'],
	['Fromage', 'Beurre'],
	['Pomme', 'Poire'],
	['Fraise', 'Framboise'],
	['Citron', 'Orange'],
	['Chocolat', 'Caramel'],
	['Crêpe', 'Gaufre'],
	['Pâtes', 'Riz'],
	['Glace', 'Sorbet'],
	['Ketchup', 'Mayonnaise'],
	['Vin', 'Bière'],
	['Soupe', 'Purée'],
	['Tomate', 'Poivron'],
	['Banane', 'Mangue'],
	['Miel', 'Confiture'],
	["Jus d'orange", 'Limonade'],
	['Frites', 'Chips'],
	['Chat', 'Chien'],
	['Lion', 'Tigre'],
	['Loup', 'Renard'],
	['Dauphin', 'Requin'],
	['Abeille', 'Guêpe'],
	['Cheval', 'Âne'],
	['Hibou', 'Chouette'],
	['Crocodile', 'Alligator'],
	['Papillon', 'Libellule'],
	['Poule', 'Canard'],
	['Lapin', 'Lièvre'],
	['Grenouille', 'Crapaud'],
	['Pingouin', 'Manchot'],
	['Souris', 'Rat'],
	['Plage', 'Piscine'],
	['Montagne', 'Colline'],
	['Forêt', 'Jungle'],
	['Hôpital', 'Clinique'],
	['Restaurant', 'Cantine'],
	['Cinéma', 'Théâtre'],
	['Musée', 'Galerie'],
	['Gare', 'Aéroport'],
	['Boulangerie', 'Pâtisserie'],
	['École', 'Université'],
	['Bibliothèque', 'Librairie'],
	['Camping', 'Hôtel'],
	['Désert', 'Savane'],
	['Château', 'Palais'],
	['Stylo', 'Crayon'],
	['Téléphone', 'Tablette'],
	['Fourchette', 'Cuillère'],
	['Lampe', 'Bougie'],
	['Parapluie', 'Imperméable'],
	['Clé', 'Cadenas'],
	['Montre', 'Réveil'],
	['Lunettes', 'Lentilles'],
	['Oreiller', 'Couette'],
	['Brosse à dents', 'Dentifrice'],
	['Ciseaux', 'Couteau'],
	['Miroir', 'Fenêtre'],
	['Sac à dos', 'Valise'],
	['Chaise', 'Tabouret'],
	['Télévision', 'Ordinateur'],
	['Ballon', 'Frisbee'],
	['Voiture', 'Moto'],
	['Train', 'Métro'],
	['Avion', 'Hélicoptère'],
	['Vélo', 'Trottinette'],
	['Bateau', 'Sous-marin'],
	['Bus', 'Tramway'],
	['Taxi', 'VTC'],
	['Fusée', 'Satellite'],
	['Chaussettes', 'Chaussons'],
	['Casquette', 'Bonnet'],
	['Jean', 'Jogging'],
	['Écharpe', 'Cravate'],
	['Robe', 'Jupe'],
	['Baskets', 'Sandales'],
	['Pull', 'Sweat'],
	['Gants', 'Moufles'],
	['Football', 'Rugby'],
	['Tennis', 'Badminton'],
	['Ski', 'Snowboard'],
	['Natation', 'Plongée'],
	['Basket', 'Handball'],
	['Boxe', 'Judo'],
	['Yoga', 'Pilates'],
	['Échecs', 'Dames'],
	['Cartes', 'Dés'],
	['Puzzle', 'Mots croisés'],
	['Guitare', 'Violon'],
	['Piano', 'Orgue'],
	['Chanteur', 'Rappeur'],
	['Roman', 'Bande dessinée'],
	['Film', 'Série'],
	['Médecin', 'Infirmier'],
	['Pompier', 'Policier'],
	['Boulanger', 'Cuisinier'],
	['Professeur', 'Directeur'],
	['Pilote', 'Astronaute'],
	['Brioche', 'Pain de mie'],
	['Yaourt', 'Fromage blanc'],
	['Ananas', 'Noix de coco'],
	['Cerise', 'Myrtille'],
	['Carotte', 'Navet'],
	['Kebab', 'Tacos'],
	['Popcorn', 'Barbe à papa'],
	['Omelette', 'Œuf au plat'],
	['Salade', 'Taboulé'],
	['Lasagnes', 'Hachis parmentier'],
	['Muffin', 'Cupcake'],
	['Mojito', 'Spritz'],
	['Eau gazeuse', 'Eau plate'],
	['Steak', 'Côtelette'],
	['Girafe', 'Zèbre'],
	['Kangourou', 'Koala'],
	['Ours', 'Panda'],
	['Mouton', 'Chèvre'],
	['Vache', 'Taureau'],
	['Perroquet', 'Toucan'],
	['Méduse', 'Étoile de mer'],
	['Fourmi', 'Termite'],
	['Serpent', 'Lézard'],
	['Phoque', 'Otarie'],
	['Canapé', 'Fauteuil'],
	['Douche', 'Baignoire'],
	['Frigo', 'Congélateur'],
	['Four', 'Micro-ondes'],
	['Balai', 'Aspirateur'],
	['Rideau', 'Volet'],
	['Tapis', 'Paillasson'],
	['Grenier', 'Cave'],
	['Pluie', 'Neige'],
	['Orage', 'Tempête'],
	['Soleil', 'Lune'],
	['Rivière', 'Lac'],
	['Volcan', 'Geyser'],
	['Rose', 'Tulipe'],
	['Sapin', 'Chêne'],
	['Arc-en-ciel', 'Aurore boréale'],
	['Cahier', 'Classeur'],
	['Gomme', 'Correcteur'],
	['Réunion', 'Entretien'],
	['Vacances', 'Week-end'],
	['Anniversaire', 'Mariage'],
	['Halloween', 'Carnaval'],
	['Rhume', 'Grippe'],
	['Dentiste', 'Opticien'],
	['Pansement', 'Plâtre'],
	["Parc d'attractions", 'Zoo'],
	['Pique-nique', 'Barbecue'],
	['Cirque', 'Fête foraine'],
	['Escape game', 'Laser game'],
	['Selfie', 'Portrait'],
	['Jeu de société', 'Jeu vidéo'],
	['Timidité', 'Discrétion'],
	['Curiosité', 'Indiscrétion'],
	['Gratitude', 'Reconnaissance'],
	['Stress', 'Angoisse'],
	['Rire', 'Sourire'],
]

function shuffle<T>(array: T[]): T[] {
	const result = [...array]
	for (let i = result.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[result[i], result[j]] = [result[j], result[i]]
	}
	return result
}

export function buildRoles(players: number): Role[] {
	const { civils, undercover, mister } = compute(players)

	return shuffle([
		...Array.from({ length: civils }, () => ROLES.CIVIL),
		...Array.from({ length: undercover }, () => ROLES.UNDERCOVER),
		...Array.from({ length: mister }, () => ROLES.MISTER),
	])
}

export function pickWords(): { civil: string; undercover: string } {
	const [a, b] = WORDS[Math.floor(Math.random() * WORDS.length)]
	return Math.random() < 0.5
		? { civil: a, undercover: b }
		: { civil: b, undercover: a }
}

export function compute(players: number): {
	civils: number
	undercover: number
	mister: number
} {
	const mister = 1
	const undercover = Math.max(1, Math.floor((players - 1) / 3.5))
	const civils = players - undercover - mister

	return {
		civils,
		undercover,
		mister,
	}
}

export function pickStarter(players: Player[]): string | null {
	const alive = players.filter((player) => !player.die)
	const candidates = alive.filter((player) => player.role !== ROLES.MISTER)
	const pool = candidates.length > 0 ? candidates : alive

	if (pool.length === 0) return null

	return pool[Math.floor(Math.random() * pool.length)].name
}

export function getSecret(
	role: Role | null,
	words: { civil: string; undercover: string } | null,
): string {
	if (role === ROLES.MISTER) return 'Tu es Mister White'
	if (role === ROLES.UNDERCOVER) return words?.undercover ?? ''
	return words?.civil ?? ''
}

export function getWinner(players: Player[]): Winner | null {
	const alive = players.filter((player) => !player.die)

	const civils = alive.filter((p) => p.role === ROLES.CIVIL).length
	const undercovers = alive.filter((p) => p.role === ROLES.UNDERCOVER).length
	const misters = alive.filter((p) => p.role === ROLES.MISTER).length

	if (undercovers === 0 && misters === 0) return 'CIVIL'
	if (undercovers > 0 && civils <= undercovers) return 'UNDERCOVER'
	if (undercovers === 0 && civils <= misters) return 'MISTER'

	return null
}

export function normalize(value: string): string {
	return value
		.trim()
		.toLowerCase()
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
}
