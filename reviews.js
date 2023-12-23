const reviews = [
    {
        text: "Dennis’ ability to talk about and warn against the wiles and ways of the adversary, while maintaining focus on Jesus Christ and His doctrines, is accomplished in expert fashion. His many years of secular and spiritual study come together beautifully to explain in layman’s terms how to recognize the solicitations of the evil one and triumph over him through Christ. This book is a notable and worthwhile piece of literature from which much can be gained by those who will read and implement its principles.",
        author: "R. Dean Arnson"
    },
    {
        text: "This is a remarkable work and vital for our times. Dennis has captured the scriptural essentials and pragmatic solutions to help us overcome the influence of the adversary in our lives. Beautifully written and authenticated, this book will be cherished by all readers.",
        author: "R.B. Finley"
    },
    {
        text: "Looking Unto Christ does a fabulous job teaching that thoughts are governed by principles. Dr. Deaton does a wonderful job breaking these eternal principles down into skills that the reader can use to bring power over their thoughts. It will also help you understand ways to eliminate self-doubt and fear that holds us back from reaching our true potential. You will learn that not only do you have more power than you can imagine but you can use that imagination to create so much good for many people.",
        author: "Michael Cordon"
    },
    {
        text: "I more than enjoyed reading this book, I have greatly benefited from it—especially the teachings about fear and worry. I hope this invaluable message gets into the hands of the many thousands who need it.There’s nothing like it currently available. It’s truly one of the best books I’ve ever read!",
        author: "Dr. Michael Wright"
    },
    {
        text: "I really cannot put into words how appropriate and timely these 3 chapters have meant to me. It’s an absolute miracle from a loving Heavenly Father that we connected this week. This is one of the most powerful miracles I’ve ever received in my life, and I really mean that. I’m so grateful!!!",
        author: "Shaun Gardner"
    },
    {
        text: "This book spoke to my heart—so inspiring and true. Noting the influence Satan has in our world, it explains how we can rebuke him and seek to follow the Savior. I highly recommend this book to all who are seeking to leave negativity behind and take control of their thoughts and actions.",
        author: "Jill S. Finley"
    },
    {
        text: "Brother Deaton's new book will be life changing for everyone who reads it. Looking Unto Christ in Every Thought brings new meaning to how and why we must, Hear Christ, for ourselves. Being involved in the Addiction Recovery Program for the last 18 years both as a participant and as an Elder clled to the program, I can testify how valuable this book will be for all who suffer with addiction of any kind. This is a book that needs to be read more than once or twice, it needs to be pondered and likened to our own lives.",
        author: "Robert R. Earl"
    },
    {
        text: "This book is not a pep talk. It’s a colorful, guided journey to the very core of who we are and what makes us function better as children of God. While reading, I found myself making easy and deep decisions about how I should think… and how I can rely on Jesus in a practical way to help me progress. Dr. Deaton’s storytelling is masterful and makes application of what he’s teaching seem doable. This book delivers hope through narrative, doctrine, and a lifetime of the author’s quest to understand what makes people improve.",
        author: "Mark Mabry"
    },
    {
        text: 'Over the past several years I have become keenly aware of the influence of the adversary on my thoughts. Just over a year ago I told a trusted friend the thought I would have every time someone complimented me for any reason. It was, "If they really knew me, they would not say that about me!" I cannot pinpoint when this particular thought was given to me, but I adopted it and believed it for many years. Once I recognized the source of this thought, I worked on a response, a rebuttal. The response I composed is simple, but powerful. It is, "They are seeing who I truly am, my divine nature!" As I consciously responded each time with this rebuttal, it became second nature and the original thought became softer and softer until it disappeared. I cannot adequately express how empowering that experience was and how I feel about myself now. It has also helped me to connect on a deeper level with my Heavenly Parents and my Redeemer.',
        author: "Marley Orton"
    },
    {
        text: 'Just what I was needing at this point in my life. There are times when "gifts" are brought into our lives that leave an indelible impact. This is one of those for me. The subtitle: "Defeating Fear, Doubt & Discouragement" cannot be understated when considering the impact of this book. It has reopened my eyes to learning I had forgotten, and new insights I was finally ready to receive. Approached with the light of Christ, and an open heart to learning, this book can change the direction of your life and elevate your heart to a higher state of understanding and being. Christ is truly "...the way, the truth, and the life..."',
        author: "CA"
    },
    {
        text: 'This is a very inspirational read and I highly recommend it! It has been a long time since I’ve enjoyed reading a book as much as I enjoyed this book. It is well written, interesting, inspirational and caused me to expand my thinking and commitment to my Savior. Many times, I paused to ponder the powerful insights in this book. The stories and quotes helped me identify specific way I can manage my thinking in new and expanded modes to improve my relationship with my Savior.',
        author: 'J.G. Bawden'
    },
    {
        text:"As someone who is not a member of Dr. Deaton's church, in fact a practicing Catholic I found this book to be insightful and brilliantly written. It was a joy to read and and teaches many terrific lessons regardless of denomination. It is a tremendous book and highly recommended.",
        author:"BB Edison"
    },
    {
        text:'No other body of work unmasks the mental kriegspiel developed by an enemy for over a millennia. This spiritual playbook is a scriptural companion providing tools and resources which bring peace, clarity, and mental resolve.',
        author: 'Nate Lake'
    },


    
]

function reviewSelection () {
    let review1 = document.getElementById("review1");
    let auth1 = document.getElementById("auth1");
    let review2 = document.getElementById("review2");
    let auth2 = document.getElementById("auth2");
    let review3 = document.getElementById("review3");
    let auth3 = document.getElementById("auth3");
    let review4 = document.getElementById("review4");
    let auth4 = document.getElementById("auth4");
    let review5 = document.getElementById("review5");
    let auth5 = document.getElementById("auth5");
    let review6 = document.getElementById("review6");
    let auth6 = document.getElementById("auth6");
    let review7 = document.getElementById("review7");
    let auth7 = document.getElementById("auth7");

    let num1 = Math.floor(Math.random()*13);
    review1.textContent = reviews[num1].text;
    auth1.textContent = reviews[num1].author;

    let num2 = Math.floor(Math.random()*13);
    while (num2 === num1) {
        num2 = Math.floor(Math.random()*13);
    }
    review2.textContent = reviews[num2].text;
    auth2.textContent = reviews[num2].author;

    let num3 = Math.floor(Math.random()*13);
    while (num3 === num1 || num3 === num2) {
        num3 = Math.floor(Math.random()*13);
    }
    review3.textContent = reviews[num3].text;
    auth3.textContent = reviews[num3].author;

    let num4 = Math.floor(Math.random()*13);
    while (num4 === num1 || num4 === num2 || num4 === num3) {
        num4 = Math.floor(Math.random()*13);
    }
    review4.textContent = reviews[num4].text;
    auth4.textContent = reviews[num4].author;

    let num5 = Math.floor(Math.random()*13);
    while (num5 === num1 || num5 === num2 || num5 === num3 || num5 === num4) {
        num5 = Math.floor(Math.random()*13);
    }
    review5.textContent = reviews[num5].text;
    auth5.textContent = reviews[num5].author;

    let num6 = Math.floor(Math.random()*13);
    while (num6 === num1 || num6 === num2 || num6 === num3 || num6 === num4 || num6 === num5) {
        num6 = Math.floor(Math.random()*13);
    }
    review6.textContent = reviews[num6].text;
    auth6.textContent = reviews[num6].author;

    let num7 = Math.floor(Math.random()*13);
    while (num7 === num1 || num7 === num2 || num7 === num3 || num7 === num4 || num7 === num5 || num7 === num6) {
        num7 = Math.floor(Math.random()*13);
    }
    review7.textContent = reviews[num7].text;
    auth7.textContent = reviews[num7].author;

}

reviewSelection();

// let num1 = Math.floor(Math.random()*4+1);
// let num2 = Math.floor(Math.random()*2+5);

// function endorsementMovement1 () {

//     $("#endor1").addClass("none");
//     $("#endor2").addClass("none");
//     $("#endor3").addClass("none");
//     $("#endor4").addClass("none");

//     $("#endor1").removeClass("reviewDiv");
//     $("#endor2").removeClass("reviewDiv");
//     $("#endor3").removeClass("reviewDiv");
//     $("#endor4").removeClass("reviewDiv");

//     $("#endor"+ num1).removeClass("none");
//     $("#endor" + num1).addClass("reviewDiv");

//     console.log(num1);


//     if (num1 === 4) {
//         num1 = 1;
//     }

//     else {
//         num1 ++;
//     }

//     console.log(num1);
// };

// function endorsementMovement2 () {

//     setTimeout(function() {

//         $("#endor5").addClass("none");
//         $("#endor6").addClass("none");
//         $("#endor7").addClass("none");

//         $("#endor5").removeClass("reviewDiv");
//         $("#endor6").removeClass("reviewDiv");
//         $("#endor7").removeClass("reviewDiv");

//         $("#endor"+ num2).removeClass("none");
//         $("#endor" + num2).addClass("reviewDiv");

//         console.log(num2);


//         if (num2 === 7) {
//             num2 = 5;
//         }

//         else {
//             num2 ++;
//         }

//         console.log(num2);
//     }, 15000);
// };

// endorsementMovement1();
// setInterval(endorsementMovement1, 30000);

// endorsementMovement2();
// setInterval(endorsementMovement2, 30000);