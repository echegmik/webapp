angular.module('nodeApp', ['ngResource'])
  .controller('NodeController', function( $scope ) {

    $scope.nodes = [
      {id:'fd00:ff1:ce0b:a5e0:fcc2:3d00:4:a5ee', color:'#E56385'},
      {id:'fd00:ff1:ce0b:a5e0:4:a30b:1b:3d3d', color:"#62B3E5"},
      {id:'fd00:ff1:ce0b:a5e0:4:a30b:1b:891c', color:"#6CC04A"}];

    function putColor(id, color) {
       return alert ("do something with "+ id);
      }

  });
