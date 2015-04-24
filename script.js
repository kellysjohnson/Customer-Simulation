//
//var array = ["Scott for sitting down with me today. Tracy, Vince for talking to me after I shared my story. They were supportive.",
//    "I want to thank the random Nerdery staff that stopped in to sprinkle some knowledge from their mighty brains on us.",
//    "Tracey for convincing Alicia and i we were wrong about -- and ++ being altered on the global level.", "You all were great. I'm just glad to be here.",
//"Mary did a great job at catching logical errors going through the challenge today.",
//    "Thanks to Erik! He taught me how to mirror my displays, great start to the day.",
//    "Every one was super helpful. Aaron and Kaitlin were great partners. Vince was very welcoming to start the first day.",
//    "I am feeling really thankful that everyone on our team is so nice and open.",
//"Shout out to the guest speaker from the nerdery for doing such a wonderful job!",
//"I'm also really appreciate the thoughtful and supportive comments from Clare. She is always super kind and supportive!",
//"Alicia, for helping me to feel a little less overwhelmed.",
//    "I would like to thank Steve Martin and Kaitlin Muth. They both took the time to help me understand how to use indices.",
//    "Everyone! I couldn't ask for a better first day or a better cohort.",
//   "I would thank Clare for being my table/row partner and teammate in the challenge, she is very sweet and welcoming. I thank Joseph and Scott and Mark and Fred, all of them contribute greatly to the mood and learning environment in their own ways. I thank Chelsea and Brian for some moments of comic relief. I thank everyone for being very nice, positive, and friendly.",
//   "Michelle for letting me walk through our challenge and understand it. Casey, Cody, Kaitlin were also big helps. We really worked hard and problem solved like crazy today.",
//   "Yeah, Michael and Clare. You guys were awesome teammates today! We complimented each other very well and were super supportive of one another. You communicated well and helped me to understand things I didn't before. Thanks!",
//];

var array = [];

$(document).ready(function() {

   $.get('dataonly.txt', function(data) {
       array = data.split('\n');

       for (var i=0; i<array.length; i++) {
           $(".shouts").append("<div id" + i + ">" + array[i] + "</div>");
       }
   });


});



