
    var num;
   function  again()
   {
  
       num = Number(prompt("Enter the number",undefined));
       if(num ==  undefined  || num === NaN)
       {
           document.querySelector('.result').innerHTML =" You not Enter anyNUMBER";
       }
       document.querySelector(".num").innerHTML = "You Enter : "+num;
       document.querySelector('.result').innerHTML ="";
    //    num = 4;
    //    console.log("num"+num);
       

   }
 
       
function prime()
{
   
    
    // console.log(num);
    
    let flag = true;
    
    for(let i=2;i*i<=num;i++)
    {
      
        if(num%i == 0)
        {
            flag = false;
    
            break; 
          
        }
    }
   
    if(num ==  undefined  || num == NaN)
    {
        document.querySelector('.result').innerHTML =" You not Enter anyNUMBER";
    }
     else if(flag == true )
    {
        document.querySelector('.result').innerHTML = num+"  PRIME NUMBER";
    }
    else{
        document.querySelector('.result').innerHTML = num+ " NOT PRIME NUMBER";
    }
      
   
}

// total Prime Number




function Allprime()
{
    // var num = Number(window.prompt("Enter the number ",undefined));
    var allresult =document.querySelectorAll('.allnumber');
    if(num == undefined || num == NaN)
    {
        allresult[0].textContent = "Not valid Number";
        return -1;
    }
    else
    {
        var arr = new Array(num);
        var arr1 = [];
       
    
        for(let i=0;i<=num;i++)
        {
            arr[i] = true;
        }
         
    
       
        
        
        arr[0] = false;
        arr[1] = false;
    
        for(let i=2 ;i*i<=num;i++)
        {
            if(arr[i] === true)
            {
                for(let j=i*i ;j<=num; j = j+i)
                {
                    arr[j] = false;
                }
            }
        }


        var text = "";
        let count =0;
       for(let i=0;i<=num;i++)
       {
           if(arr[i]==true)
           {
               arr1.push(i);
               count++;
               text= text.concat(i+", ");
           }
    
       }
    
    
       delete arr1;
       delete arr;
       
        
       allresult[0].innerHTML="Total Prime number: "+ "<strong>"+  count + "</strong>" +"<br>"+ text ;
       allresult[0].addEventListener('mouseover', ()=>{
           allresult[0].classList.add('all-prime-number-box');
       });
    

    }
   
    
 
    
   
   
}



