(function(){

	var app = angular.module('myQuiz',[]);
    app.controller('QuizController', ['$scope', '$http', '$sce', function ($scope, $http, $sce) {

        $scope.score = 0;
        $scope.activeQuestions = -1;
        $scope.activeQuestionAnswered = 0;
        $scope.percentage = 0;



        $http.get('quiz_data.json').then(function(quizData) {
            $scope.myQuestions = quizData.data;
            $scope.totalQuestions = $scope.myQuestions.length;
        });

        $scope.selectAnswer = function(qIndex, aIndex) {
            alert(qIndex + " and " + aIndex)
        }

    }]);

})();