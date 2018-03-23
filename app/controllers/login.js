import Controller from '@ember/controller';

export default Controller.extend({
	incError: null,
	actions:{
		autLogin(){
			const username = this.get('username');
			const password = this.get('password');
			const people = this.get('model.people');
			const person = people.findBy('username',username);

			if (typeof(person) !== "undefined") {
				console.log(username);
				if (person.password === password) {
					localStorage.username = username;
					window.alert('Good!');
					this.set('password',null);
					this.set('incError',null);
					this.transitionToRoute('home');
				}
				else{
					$('.incorrect').css('background-color','darkRed');
					this.set('password',null);
					this.set('incError','username or password is incorrect');

				}
			}
			else{
				$('.incorrect').css('background-color','darkRed');
					this.set('password',null);
					this.set('incError','username or password is incorrect');
			}


		},
	},
});
