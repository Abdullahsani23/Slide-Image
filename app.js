
// var arrImg =[
//     "images/1st.jpg",
//     "images/2nd.jpg",
//     "images/3rd.jpg",
//     "images/4th.jpg",
// ]
// console.log(arrImg);
// var index = 0
// var img =document.getElementById("img1")

// let intervalId = setInterval(() => {
//     // console.log(arrImg[index]);
//     img.src =arrImg[index]
//     index++
    
//     if(index === arrImg.length){
//         index= 0
//     }
// }, 3000)


var arrImg =[
    "images/1st.jpg",
    "images/2nd.jpg",
    "images/3rd.jpg",
    "images/4th.jpg",
]
console.log(arrImg);
var index = 0

function slider(){
    var img =document.getElementById("img1")
    img.src =arrImg[index]
    index++

    if(index === arrImg.length){
        index = 0
    }
}
setInterval(slider, 3000)