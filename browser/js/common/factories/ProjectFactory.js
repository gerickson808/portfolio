app.factory('ProjectFactory', function($http, $state, $rootScope){

	var factory = {};
	factory.currentProject = null;
	factory.getProjects = function(){
		return $http.get('/api/projects')
		.then(response=>response.data)
		.then(projects=>{
			this.projects = projects;
			return projects;
		});
	};

	factory.getProject = function(name){
		return $.grep(this.projects, e => e.name===name)[0];
	};

	factory.getCurrentProject = function(){
		return this.currentProject;
	};

	factory.showProject = function(project){
		this.currentProject = project;
		if($state.current.name != "projects.project") $state.go('projects.project',{project:project});
		else $rootScope.$broadcast('newProject');
	};

	return factory;

});