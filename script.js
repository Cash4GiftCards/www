// Angular
var app = angular.module('c4c', ['ui.bootstrap']);
app.controller('Dropdown', function($scope) {});
app.controller('Accordian', function ($scope) {
  $scope.oneAtATime = true;
});


// Google Analytics
var _gaq=[
  ['_setAccount','UA-61077110-1'],
  ['_setDomainName', 'wepaycashforgiftcards.com'],
  ['_trackPageview'],['_trackPageLoadTime']
];

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
