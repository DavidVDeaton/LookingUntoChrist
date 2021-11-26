function endorsementMovement () {

    let endorNumOld = localStorage.getItem("Endo 1");

    console.log(endorNumOld);

    let endorNum = Math.floor(Math.random()*7+1);

    console.log("endorsement number", endorNum);

    if (endorNum == endorNumOld) {
        endorNum--
    }

    if (endorNum === 0) {
        endorNum = 7;
    }

    console.log("endorsement number", endorNum);

    localStorage.setItem("Endo 1", endorNum);

    $("#endor1").addClass("none");
    $("#endor2").addClass("none");
    $("#endor3").addClass("none");
    $("#endor4").addClass("none");
    $("#endor5").addClass("none");
    $("#endor6").addClass("none");
    $("#endor7").addClass("none");

    $("#endor1").removeClass("reviewDiv");
    $("#endor2").removeClass("reviewDiv");
    $("#endor3").removeClass("reviewDiv");
    $("#endor4").removeClass("reviewDiv");
    $("#endor5").removeClass("reviewDiv");
    $("#endor6").removeClass("reviewDiv");
    $("#endor7").removeClass("reviewDiv");

    $("#endor" + endorNum).removeClass("none");
    $("#endor" + endorNum).addClass("reviewDiv");

};

endorsementMovement();
setInterval(endorsementMovement, 30000);