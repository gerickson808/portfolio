app.directive('smallProjectBox', function(ProjectFactory){
	return {
		restrict:'E',
		templateUrl:'js/projects/project-box.html',
		scope:{
			name:'='
		},
		link: function(scope){
			scope.project = ProjectFactory.getProject(scope.name);
			scope.currentImage = scope.project.imageLinks[0];
			scope.showImage = function(image){
				scope.currentImage = image;
			};
			scope.hideLink = function(){
				return scope.project.deployedLink === null;
			};
		}
	};
});