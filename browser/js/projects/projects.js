app.config(function ($stateProvider) {
    $stateProvider.state('projects', {
        url: '/projects',
        templateUrl: 'js/projects/projects.html',
        resolve: {
        	projects:function(ProjectFactory){
        		return ProjectFactory.getProjects();
        	}
        },
        controller:'ProjectsCtrl'
    });
});

app.controller('ProjectsCtrl', function($scope, projects, ProjectFactory){
	$scope.projects = projects;
	$scope.showProject = function(project){
		ProjectFactory.showProject(project);
	};
    var project = $.grep($scope.projects, e => e.name==='Fireframe')[0];
    $scope.showProject(project);

});