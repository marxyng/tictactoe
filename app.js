var  label1 = document.getElementById("btn01");
var label2 = document.getElementById("btn02");
var label3 = document.getElementById("btn03");
var label4= document.getElementById("btn04");
var label5= document.getElementById("btn05");
var label6= document.getElementById("btn06");
var label7= document.getElementById("btn07");
var label8= document.getElementById("btn08");
var label9= document.getElementById("btn09");
    
    var answer = [ "X", "O"];
    var solution = ["player 1 turn", "player 2 turn"];
    var i = 0;
    document.getElementById("btn01").addEventListener("click", choose);
    


      function choose() {
          i++
        if(i == answer.length){
              i = 0;
              
          }

          document.getElementById("btn01").innerHTML=answer[i] 
          
          //document.getElementById("yourTurn").innerHTML = solution[j]
          //document.getElementById("yourTurn").innerHTML ="Player 2 turn!"
      }

      var j = 0;
      document.getElementById("btn01").addEventListener("click", changeTitle)

      function changeTitle() {
          j++
          if(j== solution.length) {
              j = 0;
          }
          document.getElementById("yourTurn").innerHTML = solution[j]
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

        var j = 0;
        document.getElementById("btn02").addEventListener("click", changeTitle)
  
        function changeTitle() {
            j++
            if(j== solution.length) {
                j = 0;
            }
            document.getElementById("yourTurn").innerHTML = solution[j]
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
          var j = 0;
          document.getElementById("btn03").addEventListener("click", changeTitle)
    
          function changeTitle() {
              j++
              if(j== solution.length) {
                  j = 0;
              }
              document.getElementById("yourTurn").innerHTML = solution[j]
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

            var j = 0;
            document.getElementById("btn04").addEventListener("click", changeTitle)
      
            function changeTitle() {
                j++
                if(j== solution.length) {
                    j = 0;
                }
                document.getElementById("yourTurn").innerHTML = solution[j]
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

              var j = 0;
              document.getElementById("btn05").addEventListener("click", changeTitle)
        
              function changeTitle() {
                  j++
                  if(j== solution.length) {
                      j = 0;
                  }
                  document.getElementById("yourTurn").innerHTML = solution[j]
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

                var j = 0;
                document.getElementById("btn06").addEventListener("click", changeTitle)
          
                function changeTitle() {
                    j++
                    if(j== solution.length) {
                        j = 0;
                    }
                    document.getElementById("yourTurn").innerHTML = solution[j]
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
                  var j = 0;
                  document.getElementById("btn07").addEventListener("click", changeTitle)
            
                  function changeTitle() {
                      j++
                      if(j== solution.length) {
                          j = 0;
                      }
                      document.getElementById("yourTurn").innerHTML = solution[j]
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

                    var j = 0;
                    document.getElementById("btn08").addEventListener("click", changeTitle)
              
                    function changeTitle() {
                        j++
                        if(j== solution.length) {
                            j = 0;
                        }
                        document.getElementById("yourTurn").innerHTML = solution[j]
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
      
                      var j = 0;
                      document.getElementById("btn09").addEventListener("click", changeTitle)
                
                      function changeTitle() {
                          j++
                          if(j== solution.length) {
                              j = 0;
                          }
                          document.getElementById("yourTurn").innerHTML = solution[j]
                      }
 label1.addEventListener("click", bigWinner);
 label2.addEventListener("click", bigWinner );
 label3.addEventListener("click", bigWinner);
 label4.addEventListener("click", bigWinner );
 label5.addEventListener("click", bigWinner);
 label6.addEventListener("click", bigWinner);
 label7.addEventListener("click", bigWinner);
 label8.addEventListener("click", bigWinner);
 label9.addEventListener("click", bigWinner);
 
 function bigWinner(){
if(label1.innerHTML === "X" & label2.innerHTML ==="X" & label3.innerHTML ==="X"){
    document.getElementById("youAreTheWinner").innerHTML="You are the winner";
} else {
    if(label4.innerHTML === "X" & label5.innerHTML === "X" & label6.innerHTML=== "X"){
        document.getElementById("youAreTheWinner").innerHTML="You are the winner";
    }else{
        if(label7.innerHTML ==="X" & label8.innerHTML=== "X" & label9.innerHTML === "X"){
            document.getElementById("youAreTheWinner").innerHTML="You are the winner";

        }else{
if(label1.innerHTML === "X" & label4.innerHTML === "X" & label7.innerHTML === "X"){
    document.getElementById("youAreTheWinner").innerHTML="You are the winner";
} else {
    if(label2.innerHTML=== "X" & label5.innerHTML==="X" & label8.innerHTML==="X"){
        document.getElementById("youAreTheWinner").innerHTML = "You are the winner";
} else {
    if(label3.innerHTML=== "X" & label6.innerHTML==="X" & label9.innerHTML ==="X"){
        document.getElementById("youAreTheWinner").innerHTML = "You are the winner";
    
    }else {
        

    if(label1.innerHTML === "O" & label2.innerHTML ==="O" & label3.innerHTML ==="O"){
        document.getElementById("youAreTheWinner").innerHTML="You are the winner";
    } else {
        if(label4.innerHTML === "O" & label5.innerHTML === "O" & label6.innerHTML=== "O"){
            document.getElementById("youAreTheWinner").innerHTML="You are the winner";
        }else{
            if(label7.innerHTML ==="O" & label8.innerHTML=== "O" & label9.innerHTML === "O"){
                document.getElementById("youAreTheWinner").innerHTML="You are the winner";
    
            }else{
    if(label1.innerHTML === "O" & label4.innerHTML === "O" & label7.innerHTML === "O"){
        document.getElementById("youAreTheWinner").innerHTML="You are the winner";
    } else {
        if(label2.innerHTML=== "O" & label5.innerHTML==="O" & label8.innerHTML==="O"){
            document.getElementById("youAreTheWinner").innerHTML = "You are the winner";
    } else {
        if(label3.innerHTML=== "O" & label6.innerHTML==="O" & label9.innerHTML ==="O"){
            document.getElementById("youAreTheWinner").innerHTML = "You are the winner";
    

}
    }
}
            }
        
         /*  
        
           


    

    
    











 /*
let allPawns = [ label1, label2, label3, label4, label5, label6, label7, label8, label9];
 let allClick= [
 label1.addEventListener("click", computerPlay),
 label2.addEventListener("click", computerPlay ),
 label3.addEventListener("click", computerPlay),
 label4.addEventListener("click", computerPlay ),
 label5.addEventListener("click", computerPlay),
 label6.addEventListener("click", computerPlay),
 label7.addEventListener("click", computerPlay),
 label8.addEventListener("click", computerPlay),
 label9.addEventListener("click", computerPlay),
 ]
 */
 /*
//math.floor(math.round);
 function computerPlay() {
    let random = allPawns(math.floor(math.random))
 }
     if(label1 = "" ){
         computerPlay();
         
         
     }
*/


        }
    }
}
}
}
        }
    }

}
 }