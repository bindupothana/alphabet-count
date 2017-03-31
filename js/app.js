var app=angular.module('charApp',[]);
app.controller('charCtrl',function($scope){
 $scope.charCount=function(string){
      $scope.obj={};
      $scope.vowelsCount = 0;
       var consonant = ' bcdfghjklmnpqrstvwxyz';
        var length = string.length;
        var strl = string.charAt(i)


      
      for(var i = 1; i < length-1; i++) {
        console.log("gggg",string.length)
         if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
              $scope.vowelsCount += 1;
            }
                console.log("vowel",$scope.vowelsCount )

          }
        
  }


 


       

  
});












