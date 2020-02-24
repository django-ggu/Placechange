
var studentName = [];
var trueDesk
var desk

function createDesk(e) {
    
    if(e.keyCode === 13){
    e.preventDefault();
    let clearDiv = document.getElementsByClassName('desk')
    while (clearDiv.length) {
        clearDiv[0].remove();
    }
    
    let cnt = Number(event.currentTarget.value) + (((event.currentTarget.value % 6 == 0) ? 0 : 6) - (event.currentTarget.value % 6))

    for (i=0; i<cnt; i++) {
        let desk = document.createElement('div');
        desk.id = "place"
        desk.className = 'bg-light rounded rounded-sm" border-dark text-dark text-center desk True';
        desk.addEventListener("click", toggleClass);
        
        document.getElementsByClassName('row')[0].appendChild(desk);
    }
    event.currentTarget.value = "";
    }
    desk = document.getElementsByClassName('desk');
    trueDesk = document.getElementsByClassName('True');
}


function toggleClass() {
    if (event.currentTarget.classList.contains('True')) {
    if (event.currentTarget.innerText) {
        var index = studentName.indexOf(event.currentTarget.innerText);
        if (index !== -1) studentName.splice(index, 1);
    } 
    event.currentTarget.classList.add('False','bg-danger')
    event.currentTarget.classList.remove('True','bg-light')
    } else {
    if (event.currentTarget.innerText) {
        studentName.push(event.currentTarget.innerText)
    } 
    event.currentTarget.classList.add('True','bg-light')
    event.currentTarget.classList.remove('False','bg-danger')
    }
}

function handle(e){
    if(e.keyCode === 13){
        e.preventDefault(); 
        studentName.push(event.currentTarget.value)
        event.currentTarget.value = "";
        for (i = 0; i<25; i++) {
            if (i >= studentName.length) {
            continue;
            } else {
                trueDesk[i].innerText = studentName[i]
            }
        }
    }
}

function shuffle(e) {
    e.preventDefault();
    studentName = _.shuffle(_.shuffle(studentName))
    desk = document.getElementsByClassName('desk');
    trueDesk = document.getElementsByClassName('True');
    for (i = 0; i<25; i++) {
    if (i >= studentName.length) {
        continue;
    } else {
        trueDesk[i].classList.add('bouncing')
        trueDesk[i].innerText = studentName[i]
        setTimeout(removeBouncing, 1000)
    }
    }
}

function removeBouncing() {
    let removeBounce = document.getElementsByClassName('desk')
    for (s=0; s<removeBounce.length; s++) {
    removeBounce[s].classList.remove('bouncing')
    }
}



// var container = document.getElementById("container");
// var time = document.getElementById("time");
// var box = document.getElementById("place1");
// var boxpos = [box.offsetTop, box.offsetLeft, 0];
// var newid
// var id
// var posx = 0;
// var posy = 0;

// let down2 = 1;

// function down() {
//   clearInterval(newid)
//   clearInterval(id)
    
//   id = setInterval(frame, 1000);
    

//   function frame() {
//     for (i=0; i<test.length; i++) {
//       testpos[i][2] = 1
//       if (test[i].offsetTop > 350 && testpos[i][2] == 1) {
        
//         newid = setInterval(up, 1);
        
//         function up() {
//           console.log('goUP')
//         if (test[i].offsetTop <= testpos[i][0] && testpos[i][2] == 1 ) {
            
//             clearInterval(newid)
//             testpos[i][2] = 0
//           } else {
//             console.log(test[i].offsetLeft)
//             posx-= (test[i].offsetTop - posx) / 10;
//             box.style.top = posx + 'px';
//             posy-= (test[i].offsetLeft - posy) / 10 ;
//             test[i].style.left = posy + 'px'; 
//           }
//         }
//         clearInterval(id)
//       } else {
//         console.log(test[i].offsetLeft)
//         posx+= (test[i].offsetTop - posx) / 10 ;
//         test[i].style.top = posx + 'px';
//         posy+= (test[i].offsetLeft - posy) / 10 ;
//         test[i].style.left = posy + 'px'; 
//       }
//     }
//   }
// }