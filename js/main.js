 $(document).ready(function() {
  $(this).on("click", function() {
    console.log($(this));
    $('#mapRedirect').attr('src',paths[0].url);
  });
});
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
