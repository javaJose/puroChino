angular.module('glossaryApp', [])
  .factory('GlossaryWords', ['$http', function($http) {
    var b = {
      getGlossary: function() {
        return $http.get('http://codepen.io/rhewitt/pen/LExdgO.js');
      }
    };
    return b;
  }])

  .controller('GlossaryController', ['$scope', 'GlossaryWords', function($scope, GlossaryWords) {
    $scope.model = {
      search: '',
      words: []
    };

    GlossaryWords.getGlossary().then(function(response) {
      $scope.model.words = response.data;
    });
  }]);

$(function() {
  $('.toggle-glossary').click(function() {
    $('.wrapper').addClass('show-glossary');
  });
  $('.toggle-home').click(function() {
    $('.wrapper').removeClass('show-glossary');
  });

  // Shake the button to grab attention for the demo
  setTimeout(function () {
    var $glossary = $('.toggle-glossary');

    $glossary.addClass('shake');
    $glossary.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function (e) {
      $glossary.removeClass('shake');
    });
  }, 3000);
});
