$('#yes').click(function(event){
   newDoggy();
   // navigateToContentSection($('#about-me'));
   // alert("YES");
 });

 $('#no').click(function(event){
   newDoggy();
   // navigateToContentSection($('#latest-work'));
   // alert("NO");
 });

function newDoggy(){
   location.reload();
}
