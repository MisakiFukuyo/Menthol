Menthol
=======

Simple js log view DOM-based, mainly to mobile device debugging

## Usage

1. Add Menthol log view entry point on your html

          <div id="Menthol"></div>

2. Load script

          <script src="./menthol.js"></script>

3. Entry model

        menthol('modelName',['a','b','c','z'],function(aModel,modelsArrayItSelf,elems){
          console.log('This model mapping function is optional, if you didn't set this element, library use default mapping function.');
          modelsArrayItSelf.forEach(function(e){
            elems[e].textContent = aModel[e];
          })
          elems['z'].textContent = aModel.in.deep.z;
        });

4. Logging

          menthol.modelName({a:11,b:9,c:36,in:{deep:{z:18}}});

5. You get log view
