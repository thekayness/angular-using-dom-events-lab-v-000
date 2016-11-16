function Counter() {
	return {
		transclude: true,
		template: [
			'<div>',
				'<h3>Counter</h3>',
				'<div>Click anywhere to increment the counter!</div>',
				'<div>Current count: {{ count }}</div>',
			'</div>'
		].join(''),
		controller: function ($scope) {
			$scope.count = 0;
		},
		require: 'counter',
		link: function(scope, element) {
			document.addEventListener('click', function() {
				scope.count++;
				scope.$apply();
			});
			scope.$on('$destroy', function() {
				element.off();
			});
		}
	}
}

angular
	.module('app')
	.directive('counter', Counter);