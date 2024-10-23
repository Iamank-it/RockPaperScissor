    var a=0;
    var y=0;
    var w=0,l=0,t=0;
    function myfun(){
      if(y==1){
        document.getElementById(`play${y}`).setAttribute("class", "act");
        document.getElementById(`play2`).removeAttribute("class", "act");
        document.getElementById(`play3`).removeAttribute("class", "act");
      }
      else if(y==2){
        document.getElementById(`play${y}`).setAttribute("class", "act");
        document.getElementById(`play1`).removeAttribute("class", "act");
        document.getElementById(`play3`).removeAttribute("class", "act");
      }
      else if(y==3){
        document.getElementById(`play${y}`).setAttribute("class", "act");
        document.getElementById(`play2`).removeAttribute("class", "act");
        document.getElementById(`play1`).removeAttribute("class", "act");
      }
    }
    function play(){
      if(y>0){
        if(a>0 && a<0.33){
          if(y==1){
            t++;
            document.getElementById('tie').value=`Tie : ${t}`;
            document.getElementById('info').value='Its a Tie ! Computer choose Rock !';
          }
          else if(y==2){
            w++;
            document.getElementById('won').value=`Won : ${w}`;
            document.getElementById('info').value='You Won ! Computer choose Rock !'
          }
          else if(y==3){
            l++;
            document.getElementById('lost').value=`Lost : ${l}`;
            document.getElementById('info').value='You Lost ! Computer choose Rock !'
          }
        }
        else if(a>0.33 && a<0.66){
          if(y==1){
            l++;
            document.getElementById('lost').value=`Lost : ${l}`;
            document.getElementById('info').value='You Lost ! Computer choose Paper !';
          }
          else if(y==2){
            t++;
            document.getElementById('tie').value=`Tie : ${t}`;
            document.getElementById('info').value='Its a Tie ! Computer choose Paper !'
          }
          else if(y==3){
            w++;
            document.getElementById('won').value=`Won : ${w}`;
            document.getElementById('info').value='You Won ! Computer choose Paper !'
          }
        }
        else if(a>0.66){
          if(y==1){
            w++;
            document.getElementById('won').value=`Won : ${w}`;
            document.getElementById('info').value='You Won ! Computer choose Scissor !';
          }
          else if(y==2){
            l++;
            document.getElementById('lost').value=`Lost : ${l}`;
            document.getElementById('info').value='You Lost ! Computer choose Scissor !'
          }
          else if(y==3){
            t++;
            document.getElementById('tie').value=`Tie : ${t}`;
            document.getElementById('info').value='Its a Tie ! Computer choose Scissor !'
          }
        }
      }
      else{
        alert('Choose a option to continue')
      }
    }