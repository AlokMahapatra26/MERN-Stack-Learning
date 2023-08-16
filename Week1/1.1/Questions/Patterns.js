// function pattern1(num){
//     for(let i = 0 ; i < num ; i++){
//         let stringtoPrint = "";
//         for(let j = 0; j <= i; j++){
//             stringtoPrint += "*";
//         }
//         console.log(stringtoPrint);
//     }
// }

// pattern1(20);


function pattern2(num){
    for(let i = 0 ; i < num ; i++){
        let stringtoPrint = "";
        for(let j = 0; j <= i; j++){
            if(i%2==0){
                stringtoPrint += "*";
            }
            
        }
        console.log(stringtoPrint);
    }
}

pattern2(5);