var application = {};

application.init = function() {
  this.openTutorial();
}

application.openTutorial = function() {
  var dragImgURL = chrome.extension.getURL("images/drag.svg");
  var timeImgURL = chrome.extension.getURL("images/time.svg");
  // var colors = ['#ffebee','#ffcdd2','#ef9a9a','#e57373','#ef5350','#f44336','#e53935','#d32f2f','#c62828','#b71c1c','#ff8a80','#ff5252','#ff1744','#d50000','#fce4ec','#f8bbd0','#f48fb1','#f06292','#ec407a','#e91e63','#d81b60','#c2185b','#ad1457','#880e4f','#ff80ab','#ff4081','#f50057','#c51162','#f3e5f5','#e1bee7','#ce93d8','#ba68c8','#ab47bc','#9c27b0','#8e24aa','#7b1fa2','#6a1b9a','#4a148c','#ea80fc','#e040fb','#d500f9','#aa00ff','#ede7f6','#d1c4e9','#b39ddb','#9575cd','#7e57c2','#673ab7','#5e35b1','#512da8','#4527a0','#311b92','#b388ff','#7c4dff','#651fff','#6200ea','#e8eaf6','#c5cae9','#9fa8da','#7986cb','#5c6bc0','#3f51b5','#3949ab','#303f9f','#283593','#1a237e','#8c9eff','#536dfe','#3d5afe','#304ffe','#e3f2fd','#bbdefb','#90caf9','#64b5f6','#42a5f5','#2196f3','#1e88e5','#1976d2','#1565c0','#0d47a1','#82b1ff','#448aff','#2979ff','#2962ff','#e1f5fe','#b3e5fc','#81d4fa','#4fc3f7','#29b6f6','#03a9f4','#039be5','#0288d1','#0277bd','#01579b','#80d8ff','#40c4ff','#00b0ff','#0091ea','#e0f7fa','#b2ebf2','#80deea','#4dd0e1','#26c6da','#00bcd4','#00acc1','#0097a7','#00838f','#006064','#84ffff','#18ffff','#00e5ff','#00b8d4','#e0f2f1','#b2dfdb','#80cbc4','#4db6ac','#26a69a','#009688','#00897b','#00796b','#00695c','#004d40','#a7ffeb','#64ffda','#1de9b6','#00bfa5','#e8f5e9','#c8e6c9','#a5d6a7','#81c784','#66bb6a','#4caf50','#43a047','#388e3c','#2e7d32','#1b5e20','#b9f6ca','#69f0ae','#00e676','#00c853','#f1f8e9','#dcedc8','#c5e1a5','#aed581','#9ccc65','#8bc34a','#7cb342','#689f38','#558b2f','#33691e','#ccff90','#b2ff59','#76ff03','#64dd17','#f9fbe7','#f0f4c3','#e6ee9c','#dce775','#d4e157','#cddc39','#c0ca33','#afb42b','#9e9d24','#827717','#f4ff81','#eeff41','#c6ff00','#aeea00','#fffde7','#fff9c4','#fff59d','#fff176','#ffee58','#ffeb3b','#fdd835','#fbc02d','#f9a825','#f57f17','#ffff8d','#ffff00','#ffea00','#ffd600','#fff8e1','#ffecb3','#ffe082','#ffd54f','#ffca28','#ffc107','#ffb300','#ffa000','#ff8f00','#ff6f00','#ffe57f','#ffd740','#ffc400','#ffab00','#fff3e0','#ffe0b2','#ffcc80','#ffb74d','#ffa726','#ff9800','#fb8c00','#f57c00','#ef6c00','#e65100','#ffd180','#ffab40','#ff9100','#ff6d00','#fbe9e7','#ffccbc','#ffab91','#ff8a65','#ff7043','#ff5722','#f4511e','#e64a19','#d84315','#bf360c','#ff9e80','#ff6e40','#ff3d00','#dd2c00','#efebe9','#d7ccc8','#bcaaa4','#a1887f','#8d6e63','#795548','#6d4c41','#5d4037','#4e342e','#3e2723','#fafafa','#f5f5f5','#eeeeee','#e0e0e0','#bdbdbd','#9e9e9e','#757575','#616161','#424242','#212121','#eceff1','#cfd8dc','#b0bec5','#90a4ae','#78909c','#607d8b','#546e7a','#455a64','#37474f','#263238','#fce4ec','#f8bbd0','#f48fb1','#f06292','#ec407a','#e91e63','#d81b60','#c2185b','#ad1457','#880e4f','#ff80ab','#ff4081','#f50057','#c51162','#e3f2fd','#bbdefb','#90caf9','#64b5f6','#42a5f5','#2196f3','#1e88e5','#1976d2','#1565c0','#0d47a1','#82b1ff','#448aff','#2979ff','#2962ff'];
  var colors = ['#FFEBEE','#FFCDD2','#EF9A9A','#E57373','#EF5350','#F44336','#E53935','#D32F2F','#C62828','#B71C1C','#FCE4EC','#F8BBD0','#F48FB1','#F06292','#EC407A','#E91E63','#D81B60','#C2185B','#AD1457','#880E4F','#F3E5F5','#E1BEE7','#CE93D8','#BA68C8','#AB47BC','#9C27B0','#8E24AA','#7B1FA2','#6A1B9A','#4A148C','#EDE7F6','#D1C4E9','#B39DDB','#9575CD','#7E57C2','#673AB7','#5E35B1','#512DA8','#4527A0','#311B92','#E8EAF6','#C5CAE9','#9FA8DA','#7986CB','#5C6BC0','#3F51B5','#3949AB','#303F9F','#283593','#1A237E','#E3F2FD','#BBDEFB','#90CAF9','#64B5F6','#42A5F5','#2196F3','#1E88E5','#1976D2','#1565C0','#0D47A1','#E1F5FE','#B3E5FC','#81D4FA','#4FC3F7','#29B6F6','#03A9F4','#039BE5','#0288D1','#0277BD','#01579B','#E0F7FA','#B2EBF2','#80DEEA','#4DD0E1','#26C6DA','#00BCD4','#00ACC1','#0097A7','#00838F','#006064','#E0F2F1','#B2DFDB','#80CBC4','#4DB6AC','#26A69A','#009688','#00897B','#00796B','#00695C','#004D40','#E8F5E9','#C8E6C9','#A5D6A7','#81C784','#66BB6A','#4CAF50','#43A047','#388E3C','#2E7D32','#1B5E20','#F1F8E9','#DCEDC8','#C5E1A5','#AED581','#9CCC65','#8BC34A','#7CB342','#689F38','#558B2F','#33691E','#F9FBE7','#F0F4C3','#E6EE9C','#DCE775','#D4E157','#CDDC39','#C0CA33','#AFB42B','#9E9D24','#827717','#FFFDE7','#FFF9C4','#FFF59D','#FFF176','#FFEE58','#FFEB3B','#FDD835','#FBC02D','#F9A825','#F57F17','#FFF8E1','#FFECB3','#FFE082','#FFD54F','#FFCA28','#FFC107','#FFB300','#FFA000','#FF8F00','#FF6F00','#FFF3E0','#FFE0B2','#FFCC80','#FFB74D','#FFA726','#FF9800','#FB8C00','#F57C00','#EF6C00','#E65100','#FBE9E7','#FFCCBC','#FFAB91','#FF8A65','#FF7043','#FF5722','#F4511E','#E64A19','#D84315','#BF360C','#EFEBE9','#D7CCC8','#BCAAA4','#A1887F','#8D6E63','#795548','#6D4C41','#5D4037','#4E342E','#3E2723','#FAFAFA','#F5F5F5','#EEEEEE','#E0E0E0','#BDBDBD','#9E9E9E','#757575','#616161','#424242','#212121','#ECEFF1','#CFD8DC','#B0BEC5','#90A4AE','#78909C','#607D8B','#546E7A','#455A64','#37474F','#263238'];
  var palleteHTML = '';
  var colorStyle;
  for(var index in colors) {
    colorStyle = 'style="background: ' + colors[index] + '; color: ' + colors[index] + ';"';
    palleteHTML += '<li class="color" ' + colorStyle + '>' +
                   '    <div class="drag-element" data-color="' + colors[index] + '">' +
                   '        <div class="drop" ' + colorStyle + '></div>' +
                   '        <i class="drop-helper-1" ' + colorStyle + '></i>' +
                   '        <i class="drop-helper-2" ' + colorStyle + '></i>' +
                   '        <i class="drop-helper-3" ' + colorStyle + '></i>' +
                   '        <i class="drop-helper-4" ' + colorStyle + '></i>' +
                   '    </div>' +
                   '</li>';
  }
  document.body.insertAdjacentHTML( 'afterbegin',
              '<div class="customizer">' +
              '  <ul class="color-tool">' +
                      palleteHTML +
              '      <li>' +
              '          <button class="reset-button" title="Reser colors">Reset colors</button> ' +
              '      </li> ' +
              '  </ul> ' +
              '</div>');

  chrome.storage.sync.get('colordrop-tutorial', function(storage) {
    if(!storage['colordrop-tutorial']) {
      document.body.insertAdjacentHTML('afterbegin', '<div id="info-wrap"><div class="info"><h3>Interactive Coloring Concept</h3><p><img src="' + dragImgURL + '" alt="drag icon"/>Drag any color from the left toolbar to an area or text in the mockup. A blue outline will indicate a droppable element.</p><p><img src="' + timeImgURL + '" alt="drag icon"/>On mobile, wait a tiny bit until you drag the color drop.</p><button id="info-close">Got it!</button></div></div>');
      document.getElementById('info-close').addEventListener('click', function() {
        chrome.storage.sync.set({'colordrop-tutorial': true}, function() {
          classie.add(document.getElementById('info-wrap'), 'hide');
        });
      });
    }
  });
}