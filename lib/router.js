Router.configure({ layoutTemplate: 'layout' });

Router.route("/", {
	name: 'homeIndex',
	data: function() {
		return {
			message: 'Welcome to the Rocket Shop'
		}
	}
});

Router.route("/about", {
	name: 'homeAbout',
});
Router.route("/contact", {
	name: 'homeContact',
});
Router.route("/portfolio", {
	name: 'goToPortfolio'
});