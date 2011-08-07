(function() {
  var JQ_URL = 'http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js';

  function addButton($){
    $('[id="ecv"]').remove();
    $('<button id="ecv">Edit Custom View</button>')
      .insertAfter('.msf-container') 
      .click(function(){
        var days = 0, n,
            msg = 'How many days?';
        while (!days) {
            n = prompt(msg);
            if (n === null) {
                return;
            }
            n = n.match(/\d+/);
            if (n) {
                days = n[0];
            }else{
                msg = 'How many days? Please enter a number.';
            }
        }
        var secid = document.cookie.match(/secid=([\w\d\_\-]+)/);
        if (secid) {
            secid = secid[1];
        }else{
            alert('Cannot find the secid cookie');
            return;
        }
        var data = $.param({
                hl : 'en_GB',
                eup : 'customCalMode:custom,' + n,
                secid : secid
              });
        console.log(data);
        $.ajax({
          type : 'post',
          url : '/calendar/user_prefs',
          data : data,
          dataType : 'text',
          success : function(data){location.reload(true);}
        });
      });
  }


  if (typeof jQuery === 'undefined'){
    getScript(JQ_URL, function(){
      return addButton(jQuery);
    });
  }else{
    return addButton(jQuery);
  };
})();
