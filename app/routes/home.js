import Route from '@ember/routing/route';

export default Route.extend({
	beforeModel(){
    let session = localStorage.username;
    if(session == null){
      this.replaceWith('login');
    }
  }
});
