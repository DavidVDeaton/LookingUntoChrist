const song = new Audio (src = "audio/Nearer.mp3");
const timeHM = moment().format('ss');
const timeIntHM = parseInt(timeHM);
let refresh = 60;



if (timeIntHM < 30) {
    refresh = 30 - timeIntHM;
}

else {
    refresh = 60 - timeIntHM;
}

console.log (refresh);

function playAudio () {
    song.loop =true;
    song.play();
}

$(".audio").click(playAudio);

function pauseAudio () {
    song.pause();
}

$(".audioOff").click(pauseAudio);

function chooseEndorsement () {

    const endorNumOld = localStorage.getItem("Endo 1");

    let endorNum = Math.floor(Math.random()*6+1);

    console.log("endorsement number", endorNum);

    if (endorNum === endorNumOld && endorNumOld === 6) {
        endorNum--
    }

    else if (endorNum === endorNumOld) {
        endorNum++
    }

    console.log("endorsement number", endorNum);

    localStorage.setItem("Endo 1", endorNum);
}

chooseEndorsement ();


function endorsementMovement () {

    // let halfmin = 0;

    const timeSec = moment().format('ss');
    const timeInt = parseInt(timeSec);
    console.log(timeInt);

    // const min = timeMin.slice(1,2);
    // const sec = timeSec.slice(0,1);

    let min12 = Math.floor(timeInt/5);

    if (min12===6) {
        min12 = 0;
    }

    console.log (min12); 

    const eNum = localStorage.getItem('Endo 1');

    switch (min12) {
        case 0:
            $("#endor1").removeClass("grid1");
            $("#endor2").removeClass("grid1");
            $("#endor3").removeClass("grid1");
            $("#endor4").removeClass("grid1");
            $("#endor5").removeClass("grid1");
            $("#endor6").removeClass("grid1");
            $(".span1").removeClass("span1action");
            $(".span2").removeClass("span2action");
            $(".span3").removeClass("span3action");
            $(".span4").removeClass("span4action");
            $(".span5").removeClass("span5action");
            $(".span6").removeClass("span6action");
            $(".highlight").removeClass("sizeUp");
            $("#endor" + eNum).addClass("grid1");
            $(".span1").addClass("span1action");
            $(".span2").addClass("span2action");
            $(".span3").addClass("span3action");
            $(".span4").addClass("span4action");
            $(".span5").addClass("span5action");
            $(".span6").addClass("span6action");
            $(".highlight").addClass("sizeUp");
        break;
        case 1:

        break;
        case 2:

        break;
        case 3:

        break;
        case 4:
          
        break;

    }

};


// endorsement();
endorsementMovement();
setInterval(chooseEndorsement, 20000);
setInterval(endorsementMovement, 5000);
