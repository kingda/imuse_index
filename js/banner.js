//for banner_gallery
(function () {
       function setPicScroll () {
        var pictures = document.getElementsByClassName("banner_gallery")[0].getElementsByTagName("li");
        var scroll_pictures=document.getElementsByClassName("banner_scroll")[0].getElementsByTagName("a");
        var current=0;
        var intervar_id;
        var interval_id2;
         var timeDistance=4000;
        init();
        function  init() {
          for(var i=0;i<scroll_pictures.length;i++){
                scroll_pictures[i].number=i;
              scroll_pictures[i].onmouseover=function () {
                       hide ();
                      current=this.number;
                      show();
                       clearInterval(intervar_id);                  
            };
            scroll_pictures[i].onmouseout=function () {
                      intervar_id=setInterval(repeat,timeDistance);
            };
    
          }
        }

        function hide () { 
           
          removeClass(pictures[current],"display");
          addClass(pictures[current],"nodisplay");
          var className="banner_scroll_"+current+"_act";
          removeClass(scroll_pictures[current],className);
             
        }
        function show () {
           removeClass(pictures[current],"nodisplay");
           addClass(pictures[current],"display");
          var className="banner_scroll_"+current+"_act";
          addClass(scroll_pictures[current],className);

        }
        function repeat () {
              hide();
              if(current==3)
              current=0;
                else
              current++;
              show();

         }
      this.start=function  () {
        intervar_id=setInterval(repeat,timeDistance);
      }

  }
    var startF = new setPicScroll ();
   startF.start();
})();

(function () {
  var label = document.getElementsByClassName("banner_search_block_form")[0].getElementsByTagName("label")[0];
  var input = document.getElementsByClassName("banner_search_block_form")[0].getElementsByTagName("input")[0];
  label.onclick=function  () {
    this.style.display="none";
    input.focus();
  };
  input.onfocus=function  () {
    label.style.display="none";
  }
  input.onblur=function  () {
    if(this.value.length==0)
   label.style.display="block";
  };

})();