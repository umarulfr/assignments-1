var str='malayalam';
var len=str.length;
var flag=0;
for (let i=0;i<len;i++) 
    {
    if (str[i] != str[len-1-i]) 
        flag=1;
    }
if(flag==1)
    console.log("It is not palindrome");
else
    console.log("It is palindrome");