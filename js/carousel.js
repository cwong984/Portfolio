jQuery(document).ready(function(){
   console.log("in doc ready for carousel");
   jQuery(".carousel").carousel(
       {
         pause:true,
         interval:false
       });
});