export const db = {
	users: [
		{
			id: 1,
			nom: 'Chaouti',
			prenom: 'Brahim',
			completeName: 'Chaouti Brahim',
			slugName: 'chaouti-brahim'
		},
		{
			id: 3,
			nom: 'Lhomme',
			prenom: 'Pascal',
			completeName: 'Lhomme Pascal',
			slugName: 'lhomme-pascal'
		},
		{
			id: 5,
			nom: 'Carroy',
			prenom: 'Stéphane',
			completeName: 'Carroy Stéphane',
			slugName: 'carroy-stéphane'
		},
		{ id: 4, nom: 'Kalle', prenom: 'Oumar', completeName: 'Kalle Oumar', slugName: 'kalle-oumar' },
		{
			id: 2,
			nom: 'Riquet',
			prenom: 'Fabrice',
			completeName: 'Riquet Fabrice',
			slugName: 'riquet-fabrice'
		},
		{
			id: 8,
			nom: 'Berber',
			prenom: 'Samir',
			completeName: 'Berber Samir',
			slugName: 'berber-samir'
		},
		{
			id: 6,
			nom: 'Ghaffar',
			prenom: 'Belkheir',
			completeName: 'Ghaffar Belkheir',
			slugName: 'ghaffar-belkheir'
		},
		{ id: 7, nom: 'Mocka', prenom: 'Jay', completeName: 'Mocka Jay', slugName: 'mocka-jay' }
	]
};

// const { users } = db
// db.users.map((user, i) => {
// 	user.completeName = `${user.nom} ${user.prenom}`
// 	user.slugName = `${user.nom.toLowerCase()}-${user.prenom.toLowerCase()}`
// 	console.log(db.users)
// 	return db
// })
// console.log(users)
export default db;
