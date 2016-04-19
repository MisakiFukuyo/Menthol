(function(){
  window.addEventListener('load',function(){
    var mentholRoot = document.querySelector('#Menthol');

    if(mentholRoot === undefined || mentholRoot === null){
      return;
    }
    
    function defaultMappingFunc(m,ma,te){
      ma.forEach(function(e){
        te[e].textContent = e + ' : ' + m[e];
      })
    }

    Menthol = function(name,modelsArray,mapppingFunc,opt){
      var leRootElem = (opt && opt.rootTag) ? opt.rootTag : 'div';
      var leLogElem =  (opt && opt.rootTag) ? opt.elemTag : 'div';
      mapppingFunc = typeof mapppingFunc === 'function' ? mapppingFunc : defaultMappingFunc;

      var textEndPoints = [];

      var logElemRoot = document.createElement('div');
      logElemRoot.className = 'menthol-log-root menthol-model-' + name;
      logElemRoot.style.clear = 'both';

      var logTitle = document.createElement('div');
      logTitle.className = 'menthol-log-title';
      logElemRoot.appendChild(logTitle);
      logTitle.textContent = name.toUpperCase();
      logTitle.style.fontWeight = 'bold';

      modelsArray.forEach(function(e){
        var le = document.createElement('div');
        le.className = 'menthol-elem menthol-value-' + e;
        le.style.float = 'left';
        le.style.marginLeft = '1em';
        logElemRoot.appendChild(le);
        textEndPoints[e] = le;
      })
      mentholRoot.appendChild(logElemRoot);
      Menthol[name] = function(model){
        mapppingFunc(model,modelsArray,textEndPoints);
      }
    }

    window.menthol = Menthol;
  });
})();
