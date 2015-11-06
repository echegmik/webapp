angular.module('nodeApp', [])
  .controller('NodeController', function( $scope ) {

    $scope.nodes = [
      {id:'A', color:'#E56385'},
      {id:'B', color:"#62B3E5"},
      {id:'C', color:"#6CC04A"}];

  });
