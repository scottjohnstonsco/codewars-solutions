function pattern(n){
     let output="";
     if (n <=0){
         return "";
        } 
        else if(n % 2=== 0){
             n = n -1; 
            } 
            
    let rows = [];
    
    for (let i = 1; i <=n; i += 2){
        rows.push(String(i).repeat(i)); 
    } 
    output = rows.join("\n");
    return output; }