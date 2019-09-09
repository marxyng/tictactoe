//let label1 = document.getElementById("btn01");
//let label2 = document.getElementById("btn02");
//let label3 = document.getElementById("btn03");
    
    var answer = [ "", "X", "O"];
    var solution = ["player 1 turn", "player 2 turn"];
    var i = 0;
    document.getElementById("btn01").addEventListener("click", choose);
    


      function choose() {
          i++
        if(i == answer.length){
              i = 0;
              j= 0;
          }

          document.getElementById("btn01").innerHTML=answer[i]
          document.getElementById("yourTurn").innerHTML = solution[j]
          //document.getElementById("yourTurn").innerHTML ="Player 2 turn!"
      }


      var i = 0;
      document.getElementById("btn02").addEventListener("click", choose2);
       
        function choose2() {
            i++
          if(i == answer.length){
                i = 0;
            }
  
            document.getElementById("btn02").innerHTML=answer[i]
           
        }

        var i = 0;
        document.getElementById("btn03").addEventListener("click", choose3);
         
          function choose3() {
              i++
            if(i == answer.length){
                  i = 0;
              }
    
              document.getElementById("btn03").innerHTML=answer[i]
          }


          var i = 0;
          document.getElementById("btn04").addEventListener("click", choose4);
           
            function choose4() {
                i++
              if(i == answer.length){
                    i = 0;
                }
      
                document.getElementById("btn04").innerHTML=answer[i]
            }


            var i = 0;
            document.getElementById("btn05").addEventListener("click", choose5);
             
              function choose5() {
                  i++
                if(i == answer.length){
                      i = 0;
                  }
        
                  document.getElementById("btn05").innerHTML=answer[i]
              }

              var i = 0;
              document.getElementById("btn06").addEventListener("click", choose6);
               
                function choose6() {
                    i++
                  if(i == answer.length){
                        i = 0;
                    }
          
                    document.getElementById("btn06").innerHTML=answer[i]
                }

                var i = 0;
                document.getElementById("btn07").addEventListener("click", choose7);
                 
                  function choose7() {
                      i++
                    if(i == answer.length){
                          i = 0;
                      }
            
                      document.getElementById("btn07").innerHTML=answer[i]
                  }

                  var i = 0;
                  document.getElementById("btn08").addEventListener("click", choose8);
                   
                    function choose8() {
                        i++
                      if(i == answer.length){
                            i = 0;
                        }
              
                        document.getElementById("btn08").innerHTML=answer[i]
                    }


                    var i = 0;
                    document.getElementById("btn09").addEventListener("click", choose9);
                     
                      function choose9() {
                          i++
                        if(i == answer.length){
                              i = 0;
                          }
                
                          document.getElementById("btn09").innerHTML=answer[i]
                      }
      




          
    
      
      
