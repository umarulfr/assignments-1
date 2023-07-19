var list=['HTML','CSS','JAVA','JS'];
var newString=list[0];
for(let i=1;i<list.length;i++)
    {
    newString=newString+','+list[i];
    }
console.log(newString);