app.config(function ($stateProvider) {
    $stateProvider.state('projects.project', {
        templateUrl: 'js/projects/projects.project.html',
        resolve: {
        	project:function($stateParams, ProjectFactory){
        		return ProjectFactory.getCurrentProject();
        	}
        },
        controller:'ProjectCtrl'
    });
});

app.controller('ProjectCtrl', function($scope, project, ProjectFactory){
	$scope.project = project;
});