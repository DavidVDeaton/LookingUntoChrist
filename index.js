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

    $("#endor" + endorNum).addClass("grid1");

};

endorsementMovement();
setInterval(endorsementMovement, 30000);



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


function chooseEndorsement () {

    console.log("is this working");

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
