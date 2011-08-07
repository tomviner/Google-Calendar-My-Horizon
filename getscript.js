(function() {
  var URL_TO_FETCH = '//raw.github.com/tomviner/Google-Calendar-My-Horizon/master/myhorizon.js';

  window.getScript = function (url, success){
    var credit = "Based on http://pastie.org/462639";
    var script = document.createElement('script');
    script.src = url;
    var head = document.getElementsByTagName('head')[0],
        done = false;
    script.onload = script.onreadystatechange = function(){
      if ( !done && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete') ){
        done = true;
        success();
        script.onload = script.onreadystatechange = null;
        head.removeChild(script);
      }
    };
    head.appendChild(script);
  };

  getScript(URL_TO_FETCH, function(){});
})();

