var pin='585443';
var flag=0;

if(pin.length==6 && pin[0]=='5')
    {
    for(let i=0;i<pin.length;i++)
        {
        if(pin[i]=='0')
            flag=1; 
        }
        if(flag==1)
        console.log("valid"); 
        else{
        console.log('Invalid')
        }
    
    
    }

else
    console.log('Invalid'); 
 