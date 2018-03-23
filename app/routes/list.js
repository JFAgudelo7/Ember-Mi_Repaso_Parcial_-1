import Route from '@ember/routing/route';

export default Route.extend({
	beforeModel(){
		let session = local.Storage.username;
		if(session == null){
			this.replaceWith('login');
		}
	},
	model(){
		return{
			people: [
				{
					id: 'Rafa',
					name: 'Rafael Nieto de Dios',
					username:'nieto',
					password:'1234',
					sexo: 'M',
					salario: 1000,
					isFemale: false,
				},
				{
					id: 'Lola',
					name: 'Lola Mento',
					username:'mento',
					password:'1234',
					sexo: 'F',
					salario: 1100,
					isFemale: true,
				},
				{
					id: 'Bin',
					name: 'Batman Bin Superman ',
					username:'batman',
					password:'1234',
					sexo: 'M',
					salario: 1200,
					isFemale: false,
				},
				{
					id: 'Helen Chufe',
					name: 'Helen Chufe',
					username:'chufe',
					password:'1234',
					sexo: 'F',
					salario: 1300,
					isFemale: true,
				},
				{
					id: 'Luz',
					name: 'Luz Cuesta Mogollón',
					username:'cuesta',
					password:'1234',
					sexo: 'F',
					salario: 1400,
					isFemale: true,
				},
				{
					id: 'Igor',
					name: 'Igor Dito',
					username:'igor',
					password:'1234',
					sexo: 'M',
					salario: 1500,
					isFemale: false,
				},
			],

		};
	},
});
