function loadSelected () {
    
    $("#ex1").addClass("selected");

};

loadSelected();

for (let g=1; g<11; g++) {


    $("#ex" + g).click(function () {

        for (let i = 1; i< 11; i++) {
        
            $("#ex" + i).removeClass("selected");
        };

        $("#ex" + g).addClass("selected");

        $("p").remove();
        $("br").remove();
        
    });

};

$("#ex1").click(function () {

    $("#clip").append("<p>Though we can scarcely wrap our mortal minds around the vast concept of eternity or something always existing—having no beginning and no end—Joseph wants us to do our best to grasp that concept. He wants us to not only understand that God is an eternal, self-existent being, he wants us to understand that the same truth applies to us. Of all the stunning eternal truths taught by the Prophet Joseph Smith, none outranks his teachings about who we are and how we relate to our Father in Heaven. When it comes to conscious beings, the first startling truth is: In the beginning there was no beginning. All the conscious beings we refer to—in whatever state of progression they may be—Gods, angels, unembodied spirits, disembodied spirits, mortal men, women and children—as conscious thinking individuals, none had a beginning.</p>");

});

$("#ex2").click(function () {

    $("#clip").append("<p>The Savior has given His all to work out the infinite atonement. He wants my all in return. Ultimately, the highest and wisest use of my agency is to come unto Christ, look to Him in every thought, and willfully submit with all my mental, emotional, physical and spiritual faculties to follow the covenant path of unqualified, unconditional discipleship. No one else can do it for me. There is no salvation by proxy for the living.</p><br><p>Each one of us has to make up our minds to have no other gods before Him and to come unto Christ with all our might, mind and strength (2 Nephi 25:29). No lazy, half-hearted, feeble-minded effort will do. We’re the only ones who can decide to take control of our mortal, easily tempted, frequently distracted mind and worship the only true God and Jesus Christ whom Heavenly Father has sent. Thus on that basis I submit to you this declaration:</p><br><p>The consummate truth of life is that we alter our destiny by altering our thoughts.</p><p>The mind is our most crucial determinant, our crowning asset, our ultimate arena of battle.</p><p>If we will master the power of our minds, we may do or be whatsoever we will.</p><br><p>It all begins and it all depends on your mind.</p>");

});

$("#ex3").click(function () {

    $("#clip").append("<p>Number3</p>");

});

$("#ex4").click(function () {

    $("#clip").append("<p>Number4</p>");

});

$("#ex5").click(function () {

    $("#clip").append("<p>Number5</p>");

});

$("#ex6").click(function () {

    $("#clip").append("<p>Number6</p>");

});

$("#ex7").click(function () {

    $("#clip").append("<p>Number7</p>");

});

$("#ex8").click(function () {

    $("#clip").append("<p>Number8</p>");

});

$("#ex9").click(function () {

    $("#clip").append("<p>Number9</p>");

});

$("#ex10").click(function () {

    $("#clip").append("<p>Number10</p>");

});