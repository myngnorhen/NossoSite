angular.module('nossoSite', ['ngMaterial','ngMessages'])

.directive('cardmenu', function($mdButton,$mdWhiteframe) {
  return {

    replace: 'true',
      restrict: 'E',
      templateUrl: 'js/cardmenu.html'
  };
})
.config(function ($mdAriaProvider) {

  $mdAriaProvider.disableWarnings();

})
.controller('AppCtrl', AppCtrl);
  function AppCtrl ( $scope, $timeout ) { 
    $scope.cardsMenu=[1,2,3,4,5,6,7];
    $scope.cardsSubMenu=[1,2,3,4];
    $scope.subMenu1="img/clash1.jpg";
    $scope.subMenu2="img/clash2.jpg";
    $scope.subMenu3="img/clash3.jpg";

    $scope.Cartao = 0;
    $scope.setCartao = function(novaCartao){
      $scope.Cartao = novaCartao;
    };
    $scope.isCartao = function(CartaoConsultada){
      return $scope.Cartao === CartaoConsultada;
    };

    $scope.anima = function(id){ 
      var myE2 = angular.element( document.querySelector( '#btCard2' ) );
      var myE3 = angular.element( document.querySelector( '#btCard3' ) );
      if(id==1){
        console.log("id", id);
      var el = angular.element( document.querySelector( '#btCard1' ) );
        el.addClass('animacaoDestaque1');
      }
      if(id==2){
        console.log("id", id);
        myE2.addClass('animacaoDestaque2');
      }
      if(id==3){
        console.log("id", id);
        myE3.addClass('animacaoDestaque3');
      }

    };
    $scope.animaClick = function(id){  
      var myEl = angular.element( document.querySelector( '#btCard1' ) );
      var myE2 = angular.element( document.querySelector( '#btCard2' ) );
      var myE3 = angular.element( document.querySelector( '#btCard3' ) );
      myEl.addClass('animaCard1');
      myE2.addClass('animaCard2');
      myE3.addClass('animaCard3');
      $timeout($scope.anima(id), 5000);    
    };
    $scope.secaoInicial = function(){  
          console.log("Chamou a função");

    };
};

  
