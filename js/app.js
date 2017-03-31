var app=angular.module('charApp',[]);
app.controller('charCtrl',function($scope){
 $scope.charCount=function(string){
      $scope.obj={};
    $scope.vowelsCount = 0;
       $scope.consonants = 0;
        var length = string.length;
        var strl = string.charAt(i)


      
      for(var i = 0; i < length; i++) {
        console.log("gggg",string.length)
          var strl = string.charAt(i)
         if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
              $scope.vowelsCount = $scope.vowelsCount + 1;

            console.log("vowel",$scope.vowelsCount )
          }
          else if((string.charAt(i).match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/))){

           $scope.consonants++;
           console.log ("consonants: " , $scope.consonants)
           }

          }
        
  }


 


       

  
});












