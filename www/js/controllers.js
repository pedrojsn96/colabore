angular.module('starter.controllers', [])

.controller('PublicarCtrl', function($scope,Publicacoes) {
    
    
    //var publicacoes = new getPublicacao();
    //$scope.lista = publicacoes.publicacoes;

    //$scope.publicaProblem = function(publicar){
      //publicar.id = $scope.lista.length;
      //publicar.likes = 0;
      //publicacoes.addPublicacao(publicar);
      //console.log(publicar);
    //};

    $scope.publicacoes = Publicacoes.all();
    $scope.addProblem = function(publicar){
      publicar.id = $scope.publicacoes.length;
      publicar.likes = 0;
      console.log(publicar);
      Publicacoes.add($scope.publicar);
    };
    //MAIN.add($scope.publicar,function(){});


})

.controller('FiscalizarCtrl', function($scope, Publicacoes) {
  // Com a nova view cache no Ionic, Controllers só são chamados quando eles são 
  // criados ou quando o aplicativo é iniciado, em vez de a cada mudança de página. Para ouvir 
  // quando esta página está ativa (por exemplo, para atualizar os dados), ouvir o 
  // evento $ionicView.enter:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.publicacoes = Publicacoes.all();
  console.log($scope.publicacoes);
  //var publicacoes = new getPublicacao();
  //$scope.publicacoes = publicacoes.publicacoes;

  $scope.plusOne = function(index) {
    $scope.publicacoes[index].likes += 1;
  };
})

.controller('PublicacaoDetailCtrl', function($scope,$ionicPopup ,$stateParams, Publicacoes) {
  $scope.publicacao = Publicacoes.get($stateParams.publicacaoId);
  //console.log($scope.publicacao);
  var comment = new getComentario();
  $scope.comentarios = comment.comentarios;

  function showPopup(comentar) {
    $scope.data = {};
    $scope.data.newComment = "";
    $ionicPopup.show({
      template: '<input type="text" placeholder="Comentario" autofocus="true" ng-model="data.newComment">',
    title: 'Escreva seu Comentário',
    subTitle: 'Realize seu comentário',
    scope: $scope,
    buttons: [
      { text: 'Cancel' },
      {
        text: '<b>OK</b>',
        type: 'button-positive',
        onTap: function(e){
          comentar.messagem = $scope.data.newComment;
          comentar.id = $scope.publicacao.id;
          //comment.addComentario(comentar);
          console.log(comentar.messagem);
        }
          }
    ]
    });
  };

  $scope.addComentario = function(){
     var comentar = {};
     showPopup(comentar);
     comment.addComentario(comentar);
     comentar = {};
     console.log(comentar);
    };
})

.controller('AtividadeCtrl', function($scope) {
 
  $scope.data = {
    showDelete: false
  };
  
  $scope.edit = function(item) {
    alert('Edita Item: ' + item.id);
  };
  $scope.share = function(item) {
    alert('Divulga Item: ' + item.id);
  };
  
  $scope.moveItem = function(item, fromIndex, toIndex) {
    $scope.items.splice(fromIndex, 1);
    $scope.items.splice(toIndex, 0, item);
  };
  
  $scope.onItemDelete = function(item) {
    $scope.items.splice($scope.items.indexOf(item), 1);
  };
  
  $scope.items = [
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
    { id: 13 },
    { id: 14 },
    { id: 15 },
    { id: 16 },
    { id: 17 },
    { id: 18 },
    { id: 19 },
    { id: 20 },
    { id: 21 },
    { id: 22 },
    { id: 23 },
    { id: 24 },
    { id: 25 },
    { id: 26 },
    { id: 27 },
    { id: 28 },
    { id: 29 },
    { id: 30 },
    { id: 31 },
    { id: 32 },
    { id: 33 },
    { id: 34 },
    { id: 35 },
    { id: 36 },
    { id: 37 },
    { id: 38 },
    { id: 39 },
    { id: 40 },
    { id: 41 },
    { id: 42 },
    { id: 43 },
    { id: 44 },
    { id: 45 },
    { id: 46 },
    { id: 47 },
    { id: 48 },
    { id: 49 },
    { id: 50 }
  ];
});