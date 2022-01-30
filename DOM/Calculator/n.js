// // const nprom = new Promise((resolve,reject)=> {
// //     const rand =Math.random();

// //     setTimeout(()=> {
// //         if(rand<0.5){
// //             resolve("fulfilled");
// //             //console.log("fulfilled");
// //         }
// //         else{
// //             reject("error");
// //             //console.log("error");
// //         }
// //     },1000);
// // });

// // console.log(nprom);

// // nprom.catch((error)=>console.log("errormessage"));
// // nprom.then((data)=>console.log("fullfilled"));

// //document.getElementById("btn").addEventListener("click",details)


// // function newImage(){}
// // fetch("https://dog.ceo/api/breeds/image/random")
// // .then(response=> response.json())
// // .then((data) =>   {
// //     var i = document.getElementById("nimg");
// //     i.innerHTML="";
// //     let img = document.createElement("nimg");
// //     img.src=data.message;
// //     i.appendChild(img);
// // })

// // .catch(err=> console.log(err));

// // function details(){
// // fetch("https://randomuser.me/api/")
// // .then(response=> response.json())
// // .then(data => {
// //     //console.log(data.results[0].email))
// //     var i = document.getElementById("na");
// //     i.innerHTML=data.results[0].name.first;
// //     //console.log(i);
// //     var a = document.getElementById("em");
// //     a.innerHTML=data.results[0].email;
// //     var b = document.getElementById("dob");
// //     b.innerHTML=data.results[0].dob.date;
// //     let img = document.getElementById("newimg");
// //     img.src=data.results[0].picture.large;
    
// // })


// // .catch((err)=> {
// //     console.log(err);
// // })    

// // }

// //function details(){

//     fetch("https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json")
//     .then(response=> response.json())
//     .then(data => {

//         for(var i=0;i<data.length;i++){
            
//             var table = document.getElementsByTagName('table')[0];
//             var newrow = table.insertRow(0);
//             newrow.innerHTML=data[i].city;         
//         } 
//     })  

//     .catch((err)=> {
//         console.log(err);
//     }) 
    
//     document.getElementById("btn").addEventListener("click",details)

//     function details(){

        
//         let filter = document.getElementById("city").value;

//         let mytable = document.getElementById("mytable");

//         let tr = document.getElementsByTagName("tr");
//         //console.log(tr.length);

//         for(i=0;i<tr.length;i++)
//         {
//             let td=tr[i].getElementsByTagName("td")[0];
//             console.log(td);
//         if(td){
//             let textvalue = td.textcontent || td.innerHTML;

//             if(textvalue.indexOf(filter) > -1){
//                 tr[i].style.display="";
//             }else{
//                 tr[i].style.display="none";
//             } 

//             }
//         }
//     }
    
