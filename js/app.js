var app=angular.module('charApp',[]);
app.controller('charCtrl',function($scope){
	    $scope.charCount=function(string){
      $scope.obj={};

       var length = string.length;
      for(var i = 0; i < length; i++) {
       console.log("gggg",string.length)
       if(string.charAt(i['a','e','i','o','u']))
       var strl = string.charAt(i=['a','e','i','o','u'])
         // var vowel=['a','e','i','o','u'];

      $scope.obj[strl] = (isNaN($scope.obj[strl]) ? 1 : $scope.obj[strl] + 1);
  }


 


console.log($scope.obj)
        }

  
});





