function endorsement () {

    const timeMin = moment().format('mm');
    const timeSec = moment().format('ss');
    console.log(timeMin);
    console.log(timeSec);

    const min = timeMin.slice(1,2);
    const sec = timeSec.slice(0,1);
    console.log(min);
    console.log(sec);

    back1 = Math.floor(Math.random()*5);
    console.log(back1);
    back2 = Math.floor(Math.random()*5)+5;
    console.log(back2);

    switch (min) {
        case '0':
            $("#endor6").removeClass("grid1");
            $("#endor5").removeClass("grid2");
            $("#endor1").addClass("grid1");
            $("#endor1").addClass("backgroundColor0");
            $("#endor2").addClass("grid2");
            $("#endor2").addClass("backgroundColor1");
        break;
        case '1':
            $("#endor1").removeClass("grid1");
            $("#endor2").removeClass("grid2");
            $("#endor3").addClass("grid1");
            $("#endor4").addClass("grid2");
            $("#endor3").addClass("backgroundColor" + back1);
            $("#endor4").addClass("backgroundColor" + back2);
        break;
        case '2':
            $("#endor3").removeClass("grid1");
            $("#endor4").removeClass("grid2");
            $("#endor5").addClass("grid1");
            $("#endor6").addClass("grid2");
            $("#endor5").addClass("backgroundColor" + back1);
            $("#endor6").addClass("backgroundColor" + back2);
        break;
        case '3':
            $("#endor5").removeClass("grid1");
            $("#endor6").removeClass("grid2");
            $("#endor1").addClass("grid1");
            $("#endor4").addClass("grid2");
            $("#endor1").addClass("backgroundColor" + back1);
            $("#endor4").addClass("backgroundColor" + back2);
        break;
        case '4':
            $("#endor1").removeClass("grid1");
            $("#endor4").removeClass("grid2");
            $("#endor2").addClass("grid1");
            $("#endor5").addClass("grid2");
            $("#endor2").addClass("backgroundColor" + back1);
            $("#endor5").addClass("backgroundColor" + back2);
        break;
        case '5':
            $("#endor2").removeClass("grid1");
            $("#endor5").removeClass("grid2");
            $("#endor3").addClass("grid1");
            $("#endor6").addClass("grid2");
            $("#endor3").addClass("backgroundColor" + back1);
            $("#endor6").addClass("backgroundColor" + back2);
        break;
        case '6':
            $("#endor3").removeClass("grid1");
            $("#endor6").removeClass("grid2");
            $("#endor1").addClass("grid1");
            $("#endor5").addClass("grid2");
            $("#endor1").addClass("backgroundColor" + back1);
            $("#endor5").addClass("backgroundColor" + back2);
        break;
        case '7':
            $("#endor1").removeClass("grid1");
            $("#endor5").removeClass("grid2");
            $("#endor2").addClass("grid1");
            $("#endor6").addClass("grid2");
            $("#endor2").addClass("backgroundColor" + back1);
            $("#endor6").addClass("backgroundColor" + back2);
        break;
        case '8':
            $("#endor2").removeClass("grid1");
            $("#endor6").removeClass("grid2");
            $("#endor3").addClass("grid1");
            $("#endor4").addClass("grid2");
            $("#endor3").addClass("backgroundColor" + back1);
            $("#endor4").addClass("backgroundColor" + back2);
        break;
        case '9':
            $("#endor3").removeClass("grid1");
            $("#endor4").removeClass("grid2");
            $("#endor6").addClass("grid1");
            $("#endor5").addClass("grid2");
            $("#endor6").addClass("backgroundColor" + back1);
            $("#endor5").addClass("backgroundColor" + back2);
        break;
    }

    // if (sec === '0' || sec === '1' || sec === '2') {
    //     $(".grid1").addClass("movement1");
    //     $(".grid2").addClass("movement2");
    //     console.log("phase 1");
    // }

    // else {
    //     // $(".grid2").addClass("movement2");
    //     console.log("phase 2");
    // }


    

    // if (min === '0' || min === '3' || min === '6' && timeSec < 30) {
    //     $("#endor1").removeClass("none");
    //     $("#endor2").removeClass("none");
    //     $("#endor1").addClass("grid1");
    //     $("#endor2").addClass("grid2");
    // }

    // else if (min === '0' || min === '3' || min === '6' && timeSec >= 30) {
    //     $("#endor1").removeClass("grid1");
    //     $("#endor1").addClass("none");
    //     $("#endor2").removeClass("grid2");
    //     $("#endor2").addClass("grid1");
    //     $("#endor3").addClass("grid3");
    // }

    // else if (timeMin === '1' || min === '4' || min === '7' && timeSec < 30) {
    //     $("#endor1").addClass("none");
    //     $("#endor2").addClass("none");
    //     $("#endor3").addClass("none");
    //     $("#endor4").addClass("grid");
    //     $("#endor5").addClass("grid");
    //     $("#endor6").addClass("none");
    // }

    // else if (timeMin === '1' || min === '4' || min === '7' && timeSec > 30) {
    //     $("#endor1").addClass("none");
    //     $("#endor2").addClass("none");
    //     $("#endor3").addClass("grid");
    //     $("#endor4").addClass("grid");
    //     $("#endor5").addClass("none");
    //     $("#endor6").addClass("none");
    // }

    // else if (timeMin === '2' || min === '5' || min === '8' && timeSec < 30) {
    //     $("#endor1").addClass("none");
    //     $("#endor2").addClass("grid");
    //     $("#endor3").addClass("grid");
    //     $("#endor4").addClass("none");
    //     $("#endor5").addClass("none");
    //     $("#endor6").addClass("none");
    // }

    // else if (timeMin === '2' || min === '5' || min === '8' && timeSec > 30) {
    //     $("#endor1").addClass("grid");
    //     $("#endor2").addClass("grid");
    //     $("#endor3").addClass("none");
    //     $("#endor4").addClass("none");
    //     $("#endor5").addClass("none");
    //     $("#endor6").addClass("none");
    // }
};

endorsement();
setInterval(endorsement, 30000);