const timeHM = moment().format('ss');
const timeIntHM = parseInt(timeHM);
let refresh = 60;

console.log (refresh);

if (timeIntHM < 30) {
    refresh = 30 - timeIntHM;
}

else {
    refresh = 60 - timeIntHM;
}

console.log (refresh);

function endorsementMovement () {

    // let halfmin = 0;

    const timeSec = moment().format('ss');
    const timeInt = parseInt(timeSec);
    console.log(timeInt);

    // const min = timeMin.slice(1,2);
    // const sec = timeSec.slice(0,1);

    const min12 = Math.floor(timeInt/5);

    console.log (min12);

    // if (timeInt < 30) {
        
    // }

    // else {
    //     halfmin++
    // }

    // console.log(halfmin);

    let endorNum = Math.floor(Math.random()*6+1);
    let endorNum2 = Math.floor(Math.random()*6+1);

    let bcRand = Math.floor(Math.random()*4+2);

    console.log("endorsement number", endorNum, endorNum2);

    if (endorNum === endorNum2 && endorNum2 === 6) {
        endorNum2--
    }

    else if (endorNum === endorNum2) {
        endorNum2 ++
    }

    console.log("endorsement number", endorNum, endorNum2);
    // localStorage.setItem("backColor" + min12, endorNum);

    // const background0 = localStorage.getItem("backColor0");
    // const background6 = localStorage.getItem("backColor6");
    

    switch (min12) {
        case 0:
            $("#endor1").removeClass("grid1 grid2 bc0 bc2 bc3 bc4 bc5");
            $("#endor2").removeClass("grid1 grid2 bc0 bc2 bc3 bc4 bc5");
            $("#endor3").removeClass("grid1 grid2 bc0 bc2 bc3 bc4 bc5");
            $("#endor4").removeClass("grid1 grid2 bc0 bc2 bc3 bc4 bc5");
            $("#endor5").removeClass("grid1 grid2 bc0 bc2 bc3 bc4 bc5");
            $("#endor6").removeClass("grid1 grid2 bc0 bc2 bc3 bc4 bc5");
            $("#endor" + endorNum).addClass("grid1 bc1 colorChange01");
            $("#endor" + endorNum2).addClass("grid2");
            $("#endor" + endorNum2).addClass("bc" + bcRand);
        break;
        case 1:

        break;
        case 2:

        break;
        case 3:

        break;
        case 4:

        break;
        case 5:

        break;
        case 6:
            $("#endor1").removeClass("grid1 grid2 bc1 bc2 bc3 bc4 bc5");
            $("#endor2").removeClass("grid1 grid2 bc1 bc2 bc3 bc4 bc5");
            $("#endor3").removeClass("grid1 grid2 bc1 bc2 bc3 bc4 bc5");
            $("#endor4").removeClass("grid1 grid2 bc1 bc2 bc3 bc4 bc5");
            $("#endor5").removeClass("grid1 grid2 bc1 bc2 bc3 bc4 bc5");
            $("#endor6").removeClass("grid1 grid2 bc1 bc2 bc3 bc4 bc5");
            $("#endor" + endorNum).addClass("grid1 bc0 colorChange10");
            $("#endor" + endorNum2).addClass("grid2");
            $("#endor" + endorNum2).addClass("bc" + bcRand);
        break;
        case 7:

        break;
        case 8:

        break;
        case 9:

        break;
        case 10:

        break;
        case 11:

        break;
    }

};


// endorsement();
endorsementMovement();
setInterval(endorsementMovement, 5000);
