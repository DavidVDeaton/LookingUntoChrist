//Audio Variables

// const introAudio = new Audio (src = "audio/Introduction-Excerpt.mp3");
// const page14 = new Audio (src = "audio/page14.mp3" );
// const page52 = new Audio (src = "audio/page52.mp3");
// const page94 = new Audio (src = "audio/page94.mp3");
// const page100 = new Audio (src = "audio/page100.mp3" );
// const page120 = new Audio (src = "audio/page120.mp3");
// const page145 = new Audio (src = "audio/page145.mp3");
// const page162 = new Audio (src = "audio/page162.mp3" );
// const page229 = new Audio (src = "audio/page229.mp3");
// const page265 = new Audio (src = "audio/page265.mp3");
// const page338 = new Audio (src = "audio/page338.mp3");

function loadSelected () {
    
    localStorage.setItem("play", "page14");
    $("#ex1-dot").addClass("selected");

};

loadSelected();

for (let g=1; g<11; g++) {


    $("#ex" + g).click(function () {

        for (let i = 1; i< 11; i++) {
        
            $("#ex" + i + "-dot").removeClass("selected");
        };

        $("#ex" + g + "-dot").addClass("selected");

        audio.pause();
        audio.currentTime = 0;

        $(".chapter").remove();
        $(".excerpt-p").remove();
        $(".page").remove();
        
    });

};

let clip = localStorage.getItem("play");
let audio = new Audio (src = "audio/" + clip + ".mp3");

$("#play").click(function () {

    clip = localStorage.getItem("play");
    audio = new Audio (src = "audio/" + clip + ".mp3");
    
    if (clip != "none") {
        audio.play();
    }

    localStorage.setItem("play", "none");
    localStorage.setItem("pause", clip);

});

$("#pause").click(function () {
    
    audio.pause();
    audio.currentTime = 0;

    localStorage.setItem("play", localStorage.getItem("pause"));


});




$("#ex1").click(function () {

    // for (let i = 1; i< 11; i++) {
        
    //     $("#ex" + i + "-dot").removeClass("selected");
    // };

    // $("#ex1-dot").addClass("selected");

    localStorage.setItem("play", "page14");
    $("#clip").append("<h3 class='chapter'>Knowing Yourself: An Eternal, Independent, Self-Governing Being</h3><p class='excerpt-p'>Though we can scarcely wrap our mortal minds around the vast concept of eternity or something always existing—having no beginning and no end—Joseph wants us to do our best to grasp that concept. He wants us to not only understand that God is an eternal, self-existent being, he wants us to understand that the same truth applies to us. Of all the stunning eternal truths taught by the Prophet Joseph Smith, none outranks his teachings about who we are and how we relate to our Father in Heaven. When it comes to conscious beings, the first startling truth is: In the beginning there was no beginning. All the conscious beings we refer to—in whatever state of progression they may be—Gods, angels, unembodied spirits, disembodied spirits, mortal men, women and children—as conscious thinking individuals, none had a beginning.</p><h6 class='page'>Page 14</h6>");

});

$("#ex2").click(function () {

    // for (let i = 1; i< 11; i++) {
        
    //     $("#ex" + i + "-dot").removeClass("selected");
    // };

    // $("#ex2-dot").addClass("selected");

    localStorage.setItem("play", "page52");
    $("#clip").append("<h3 class='chapter'>The Agency to Choose, The Power to Create</h3><p class='excerpt-p'>The Savior has given His all to work out the infinite atonement. He wants my all in return. Ultimately, the highest and wisest use of my agency is to come unto Christ, look to Him in every thought, and willfully submit with all my mental, emotional, physical and spiritual faculties to follow the covenant path of unqualified, unconditional discipleship. No one else can do it for me. There is no salvation by proxy for the living.</p><p class='excerpt-p'>Each one of us has to make up our minds to have no other gods before Him and to come unto Christ with all our might, mind and strength (2 Nephi 25:29). No lazy, half-hearted, feeble-minded effort will do. We’re the only ones who can decide to take control of our mortal, easily tempted, frequently distracted mind and worship the only true God and Jesus Christ whom Heavenly Father has sent. Thus on that basis I submit to you this declaration:</p><p class='excerpt-p italics'>The consummate truth of life is that we alter our destiny by altering our thoughts. The mind is our most crucial determinant, our crowning asset, our ultimate arena of battle. If we will master the power of our minds, we may do or be whatsoever we will.</p><p class='excerpt-p'>It all begins and it all depends on your mind.</p><h6 class='page'>Page 52</h6>");

});

$("#ex3").click(function () {

    // for (let i = 1; i< 11; i++) {
        
    //     $("#ex" + i + "-dot").removeClass("selected");
    // };

    // $("#ex3-dot").addClass("selected");

    localStorage.setItem("play", "page94");
    $("#clip").append("<h3 class='chapter'>The War in Heaven in Our Heads</h3><p class='excerpt-p'>Experiencing an evil or impure impulse—an overture injected into our minds by the adversary—does not mean we are unclean in our thoughts. Initially, it is a temptation and only a temptation. In mortality, we cannot stop the perpetual influx of enticements and temptations. It is the crux of our mortal test. Temptations become sins only if we accept and dwell on them. If you entertain them, add to them, or even “savor” them, then, yes, you are committing sin in your head, as the Lord plainly taught (Matt 5:28; 3 Ne. 12:28). However, if you catch and identify them for what they are—Satan’s tawdry attempts to get you to sin—and promptly shift your thinking, refusing to dwell on them, you have not sinned. If fact, the opposite is true; you have actually increased in righteousness. Lehi taught that the very definition of righteousness is to be exposed to temptation but not succumb to it (2 Ne 2:13). Each time you unmask one of Satan’s ploys and reject it, you achieve a small but significant moral victory and add another drop of oil to your lamp of righteousness.</p><p class='excerpt-p'>Without this insight, we also become vulnerable to another satanic ploy, which Satan throws on top of the first temptation. Once he’s convinced you and me that we’re the one who spawned the temptation, he berates us and then compounds his assault by suggesting we may as well continue since we’ve already sinned in our minds.</p><h6 class='page'>Page 94</h6>");

});

$("#ex4").click(function () {



    localStorage.setItem("play", "page100");
    $("#clip").append("<h3 class='chapter'>Prevalence of Satanic Thoughts</h3><p class='excerpt-p'>Without discounting the gravity of major sins one iota, I submit that Satan’s efforts to lure us into committing major sins is but the proverbial tip of the iceberg of satanic ploys. He has other prevalent and frequent strategies he unleashes on us that are just as potentially injurious as the ones he uses to tempt us to commit major sins—but these tactics are far more diabolically disguised.</p><p class='excerpt-p'>Hear it, O ye ends of the earth! Any thought that tears you down; diminishes your sense of worth; questions your identity as a child of God; or urges you to doubt, belittle, or berate yourself, is not coming from you (your intelligence of spirit); and it is most certainly not coming from a divine source. It is coming from the depths of the infernal pit, from Lucifer and the household of Satan on the dark side of the veil.</p><h6 class='page'>Page 100</h6>");

});

$("#ex5").click(function () {



    localStorage.setItem("play", "page120");
    $("#clip").append("<h3 class='chapter'>The Biggest Lies You Will Ever Hear Are in Your Head</h3><p class='excerpt-p'>A subtle and important distinction has become apparent to me. SKAM is most effective when I am in victim mode, framing a situation as being only about my needs. Instead, when I am thinking outside myself, praying in the morning to be able recognize an opportunity to get past myself and to act immediately on something—anything—that would help someone else, everything else in my day goes better. And, even if it doesn’t make the six o’clock news, each time I detect, disagree and disobey a selfish thought, I take a step away from SKAM and a step closer to Christ and that is more than enough.</p><h6 class='page'>Page 120</h6>");

});

$("#ex6").click(function () {



    localStorage.setItem("play", "page145");
    $("#clip").append("<h3 class='chapter'>Making it Real</h3><p class='excerpt-p'>In mortality, we become conditioned to go directly from stimulus to reaction with little or no forethought, whereas a response requires consideration. Sometimes it seems as though there’s no time for a choice anywhere along the sequence. Something happens and, bam, we go from interpretation to emotion to reaction in less than a blink of the eye—in a seemingly unavoidable case of a stimulus generating an automatic set response. In those moments, SKAM immediately shifts our attention from what we can do to intercept the reaction by telling us we had no choice because it wasn’t our fault. Our reaction, he suggests, was caused by some outside source—generally another person. He wants to divert our attention from our role in the matter, by urging us to dive headlong into finger-pointing and wishing everybody else would grow up and change. He must laugh at our frustration every time we think we can actually blame somebody else into improving our behavior—or their behavior sufficient to improve our outcomes.</p><h6 class='page'>Page 145</h6>");

});

$("#ex7").click(function () {



    localStorage.setItem("play", "page162");
    $("#clip").append("<h3 class='chapter'>Halting Between Opinions</h3><p class='excerpt-p'>We live in the times of confusion prophesied by Isaiah, the great prophet who aptly described our day. He saw a time when people would “call evil good, and good evil, [and] put darkness for light, and light for darkness” (Isa 5:20). Clearly, Lucifer has succeeded in creating confusion and spreading enmity upon the earth about many moral issues—the definition of life, gender, marriage, and religious freedom. Beyond such larger issues, we are even inundated in contradictory information about simple everyday matters. When someone encourages us “to eat healthy” does anyone know with certainty what in today’s world that means? Are eggs good for you or not? What about oils and fats? Does wheat heal or harm? Which kinds of vitamin supplements cause cancer rather than cure it? Names for dietary plans have become identities. Are you Vegan? Paleo? Or, Mitochondrial? (Personally, I’ve become a nutritional schizophrenic: I’m a paleo-vegan-Siamese ketotarian who skips the entire egg and just eats the shells.)</p><h6 class='page'>Page 162</h6>");

});

$("#ex8").click(function () {



    localStorage.setItem("play", "page229");
    $("#clip").append("<h3 class='chapter'>The Trap of Walking in One's Own Way</h3><p class='excerpt-p'>One of Satan’s most subtle snares preys upon on the blindness stemming from human pride. The apex of human arrogance is reached when we mortals deign to prescribe what kind of being God should be and how He should conduct His relationship with His children. We don’t think of it in terms of actually creating God’s job description for Him, but that’s exactly what we do. It is also very difficult not to align our personal conception of God with the prevailing “wisdom” of the day in which we live, blending it with our own interpretation of what life should be like and the way we want things to be. In effect, we believe there is a God, but forget that we’re not Him.</p><p class='excerpt-p'>The Apostle Paul found it very difficult to convince the Jews in his day that God had the right to institute a higher law. . . They even cried out for the Savior to be crucified because the Messiah they saw before them—beaten, scourged and bleeding—humbly submitting His will to that of the Father—did not fit their mental image of what the Messiah was supposed to look like and do. The Messiah they had conjured was supposed to incinerate the wicked, oppressing Romans, return Israel to its former glory and world supremacy, and feed them bread on a daily basis. Moral of the story: Beware of hubris (excessive pride) and imposing your paradigm of God onto God.</p><h6 class='page'>Page 229</h6>");

});

$("#ex9").click(function () {



    localStorage.setItem("play", "page265");
    $("#clip").append("<h3 class='chapter'>Winning the Battle of Discouragement</h3><p class='excerpt-p'>When it seems dark and hopeless or painful and purposeless, let us put our trust in Jesus Christ and call upon the Father in His holy name. May we remember, “It’s the hard stuff”—for Christ and for us—that brings to pass justification and sanctification! May we look unto Christ in every thought and never forget the ultimate climb the Savior had to make in order for our climbs to have any meaning. A clear sign we are exercising our faith is when we can be grateful for the hard stuff. Again, it helps to remember the pattern. The most significant part of life-transforming events, that part we all need to be the most grateful for, is not the easy start. Nor is it the grand and glorious finish. It’s the hard stuff in the middle in between the easy starts and the glorious finishes that makes the whole thing great. For that reason, we can even be grateful for doubts and discouragement.</p><p class='excerpt-p'>Very few will escape moments where it seems like all we can do is endure. It is in those hours when “enduring it well” comes down to taking one more step. And then another. Although it may not seem so at that moment, one step at a time is not only sufficient to qualify as “enduring it well,” it is also heroic.</p><h6 class='page'>Page 265</h6>");

});

$("#ex10").click(function () {



    localStorage.setItem("play", "page338");
    $("#clip").append("<h3 class='chapter'>Accessing Power Through Faith in Jesus Christ</h3><p class='excerpt-p'>Wait. It gets better. “And Jesus, immediately knowing in himself that virtue had gone out of him, turned him about in the press, and said, Who touched my clothes?” At this statement, Peter and His disciples are stunned and mystified. Here is Jesus, surrounded by a mob, pushed, jostled and pressed upon from every angle as in an adoring mosh pit, and he’s asking, “who touched me?” The disciples are thinking, “What? Who touched you? They all touched you. Everybody did. Everybody’s laying their hands on you. You’re being mauled!” “And Jesus said, ‘Somebody hath touched me: for I perceive that virtue is gone out of me’” (Luke 8:46, emphasis added). Now we arrive at the crux of this miracle and the glorious good news it holds out for all of us. The word translated “virtue” by the King James translators is “dunamis,” from the root word “dunami,” meaning force or power, the same root of the word dynamo in English. At the moment the woman touched the border of Christ’s garment, there was an actual transfer of power from the body of the Lord to the body of the woman! He felt it! She felt it—“she felt in her body that she was healed of that plague.” He that hath ears, let him hear and ponder.</p><h6 class='page'>Page 338</h6>");

});

$(".firstLook").hover(function () {

    $("#noHover").addClass("hidden");
    $("#hover").removeClass("hidden");

})

$(".secondLook").hover(function () {
   
    $("#secondNoHover").addClass("hidden");
    $("#secondHover").removeClass("hidden");

})
