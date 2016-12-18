//  $(document).ready(function() {
//   $(this).on("click", function() {
//     console.log($(this));
//     var that = $(this);
//     for (var i = 0; i < paths.length; i++){
//       if (that == paths[i]){
//         $('#mapRedirect').attr('src',paths[i].url);
//       }
//     }
//   });
// });
//window load method
jQuery(document).ready(function($) {

    $(window).load(function() {

        $('#svggroup').click(function() {
            console.log(this);
            var getStr = $('#svggroup svg text tspan').text();
            var AL = getStr.substr(0, 2);
            var AK = getStr.substr(2, 2);
            var AZ = getStr.substr(4, 2);
            var AR = getStr.substr(6, 2);
            var CA = getStr.substr(8, 2);
            var CO = getStr.substr(10, 2);
            var CT = getStr.substr(12, 2);
            var DE = getStr.substr(14, 2);
            var DC = getStr.substr(16, 2);
            var FL = getStr.substr(18, 2);
            var GH = getStr.substr(20, 2);
            var HI = getStr.substr(22, 2);
            var ID = getStr.substr(24, 2);
            var IL = getStr.substr(26, 2);
            var IN = getStr.substr(28, 2);
            var IA = getStr.substr(30, 2);
            var KS = getStr.substr(32, 2);
            var KY = getStr.substr(34, 2);
            var LA = getStr.substr(36, 2);
            var ME = getStr.substr(38, 2);
            var MD = getStr.substr(40, 2);
            var MA = getStr.substr(42, 2);
            var MI = getStr.substr(44, 2);
            var MN = getStr.substr(46, 2);
            var MS = getStr.substr(48, 2);
            var MO = getStr.substr(50, 2);
            var MT = getStr.substr(52, 2);
            var NE = getStr.substr(54, 2);
            var NV = getStr.substr(56, 2);
            var NH = getStr.substr(58, 2);
            var NJ = getStr.substr(60, 2);
            var NM = getStr.substr(62, 2);
            var NY = getStr.substr(64, 2);
            var NC = getStr.substr(66, 2);
            var ND = getStr.substr(68, 2);
            var OH = getStr.substr(70, 2);
            var OK = getStr.substr(72, 2);
            var OR = getStr.substr(74, 2);
            var PA = getStr.substr(76, 2);
            var RI = getStr.substr(78, 2);
            var SC = getStr.substr(80, 2);
            var SD = getStr.substr(82, 2);
            var TN = getStr.substr(84, 2);
            var TX = getStr.substr(86, 2);
            var UT = getStr.substr(88, 2);
            var VT = getStr.substr(90, 2);
            var VA = getStr.substr(92, 2);
            var WA = getStr.substr(94, 2);
            var WV = getStr.substr(96, 2);
            var WI = getStr.substr(98, 2);
            var WY = getStr.substr(100, 2);
            for (var i = 0; i < paths.length; i++) {
                if (AL == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else if (AK == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else if (AZ == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else if (AR == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else if (CA == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else if (CO == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else if (CT == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else if (DE == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else if (DC == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else if (FL == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else if (GH == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else if (HI == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else if (ID == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else if (IL == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else if (IN == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else if (IA == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else if (KS == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else if (KY == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else if (LA == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else if (ME == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else if (MD == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else if (MA == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else if (MI == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else if (MN == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else if (MS == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else if (MO == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else if (MT == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else if (NE == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else if (NV == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else if (NH == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else if (NJ == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else if (NM == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else if (NY == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else if (NC == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else if (ND == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else if (OH == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else if (OK == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else if (OR == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else if (PA == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else if (RI == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else if (SC == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else if (SD == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else if (TN == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else if (TX == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else if (UT == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else if (VT == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else if (VA == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else if (WA == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else if (WV == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else if (WI == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else if (WY == paths[i].abbreviation) {
                    $('#mapRedirect').attr('src', paths[i].url);
                } else {
                  console.log('Not Found!');
                }
            } // end of for loop
        }) // end of click
    }); // end of Windows on load
}); // end of jQuery
//
// $(function() {
//   $(this).on("click", function() {
//         for (var i = 0; i < paths.length; i++) {
//           if (this) {
//             $('iframe #mapRedirect').attr('src',paths[i].url)
//           }
//         }
//     });
// });
