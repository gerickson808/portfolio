app.factory('ProjectFactory', function($http, $state, $rootScope){

	var factory = {};
	factory.currentProject = null;

	factory.getProjects = function(){
		return $http.get('/api/projects')
		.then(response=>response.data);
	};

	factory.getCurrentProject = function(){
		return this.currentProject;
	};

	factory.showProject = function(project){
		this.currentProject = project;
		console.log($state.current.name);
		if($state.current.name != "projects.project") $state.go('projects.project',{project:project});
		else $rootScope.$broadcast('newProject');
	};

	return factory;

});