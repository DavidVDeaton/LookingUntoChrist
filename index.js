const song = new Audio (src = "audio/Nearer.mp3");
// const timeHM = moment().format('ss');
// const timeIntHM = parseInt(timeHM);
// let refresh = 60;

// if (timeIntHM < 30) {
//     refresh = 30 - timeIntHM;
// }

// else {
//     refresh = 60 - timeIntHM;
// }

// console.log (refresh);

function playAudio () {
    song.loop =true;
    song.play();
}

$(".audio").click(playAudio);

function pauseAudio () {
    song.pause();
}

$(".audioOff").click(pauseAudio);

// function chooseEndorsement () {

//     const endorNumOld = localStorage.getItem("Endo 1");

//     let endorNum = Math.floor(Math.random()*6+1);

//     console.log("endorsement number", endorNum);

//     if (endorNum === endorNumOld && endorNumOld === 6) {
//         endorNum--
//     }

//     else if (endorNum === endorNumOld) {
//         endorNum++
//     }

//     console.log("endorsement number", endorNum);

//     localStorage.setItem("Endo 1", endorNum);
// }

// chooseEndorsement ();

function endorsementMovement () {

    let endorNumOld = localStorage.getItem("Endo 1");

    console.log(endorNumOld);

    let endorNum = Math.floor(Math.random()*6+1);

    console.log("endorsement number", endorNum);

    if (endorNum == endorNumOld) {
        endorNum--
    }

    if (endorNum === 0) {
        endorNum = 6;
    }

    console.log("endorsement number", endorNum);

    localStorage.setItem("Endo 1", endorNum);

    $("#endor1").removeClass("grid1");
    $("#endor2").removeClass("grid1");
    $("#endor3").removeClass("grid1");
    $("#endor4").removeClass("grid1");
    $("#endor5").removeClass("grid1");
    $("#endor6").removeClass("grid1");

    $(".span1").removeClass("span1action");
    $(".span1s").removeClass("span1Saction");
    $(".span2").removeClass("span2action");
    $(".span2d").removeClass("span2Daction");
    $(".span26").removeClass("span26action");
    $(".span3").removeClass("span3action");
    $(".span3d").removeClass("span3Daction");
    $(".span4").removeClass("span4action");
    $(".span46").removeClass("span46action");
    $(".span5").removeClass("span5action");
    $(".highlight").removeClass("sizeUp");
    $(".special").removeClass("specialaction");

    $("#endor" + endorNum).addClass("grid1");

    $(".span1").addClass("span1action");
    $(".span1s").addClass("span1Saction");
    $(".span2").addClass("span2action");
    $(".span2d").addClass("span2Daction");
    $(".span26").addClass("span26action");
    $(".span3").addClass("span3action");
    $(".span3d").addClass("span3Daction");
    $(".span4").addClass("span4action");
    $(".span46").addClass("span46action");
    $(".span5").addClass("span5action");
    $(".highlight").addClass("sizeUp");
    $(".special").addClass("specialaction");

};

endorsementMovement();
setInterval(endorsementMovement, 30000);
