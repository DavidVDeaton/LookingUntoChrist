let num1 = Math.floor(Math.random()*4+1);
let num2 = Math.floor(Math.random()*2+5);

function endorsementMovement1 () {

    $("#endor1").addClass("none");
    $("#endor2").addClass("none");
    $("#endor3").addClass("none");
    $("#endor4").addClass("none");

    $("#endor1").removeClass("reviewDiv");
    $("#endor2").removeClass("reviewDiv");
    $("#endor3").removeClass("reviewDiv");
    $("#endor4").removeClass("reviewDiv");

    $("#endor"+ num1).removeClass("none");
    $("#endor" + num1).addClass("reviewDiv");

    console.log(num1);


    if (num1 === 4) {
        num1 = 1;
    }

    else {
        num1 ++;
    }

    console.log(num1);
};

function endorsementMovement2 () {

    setTimeout(function() {

        $("#endor5").addClass("none");
        $("#endor6").addClass("none");
        $("#endor7").addClass("none");

        $("#endor5").removeClass("reviewDiv");
        $("#endor6").removeClass("reviewDiv");
        $("#endor7").removeClass("reviewDiv");

        $("#endor"+ num2).removeClass("none");
        $("#endor" + num2).addClass("reviewDiv");

        console.log(num2);


        if (num2 === 7) {
            num2 = 5;
        }

        else {
            num2 ++;
        }

        console.log(num2);
    }, 15000);
};

endorsementMovement1();
setInterval(endorsementMovement1, 30000);

endorsementMovement2();
setInterval(endorsementMovement2, 30000);