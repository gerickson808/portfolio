app.directive('projectBox', function(ProjectFactory){
	return {
		restrict:'E',
		templateUrl:'js/projects/project-box.html',
		link: function(scope){
			scope.currentImage = scope.project.imageLinks[0];
			scope.showImage = function(image){
				scope.currentImage = image;
			};
			scope.$on('newProject', function(){
        scope.project = ProjectFactory.getCurrentProject();
        scope.currentImage = scope.project.imageLinks[0];
    });
			scope.hideLink = function(){
				return scope.project.deployedLink === null;
			};
		}
	};
});