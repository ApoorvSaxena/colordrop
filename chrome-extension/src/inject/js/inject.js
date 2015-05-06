var application = {};

application.init = function() {
  this.openTutorial();
}

application.openTutorial = function() {
  var dragImgURL = chrome.extension ? chrome.extension.getURL("images/drag.svg") : 'https://photos-2.dropbox.com/t/2/AABYFRE0xgopuqn92_7Lf6_qepJpYS6-y0GFTzQlFAeh3w/12/46483432/png/1024x768/3/1430769600/0/2/drag.svg/COiPlRYgASACIAMoAQ/zoAaPbfXjGS6wyLHX6gTCX2Otonjns6ge5Ecg-ZWw4A';
  var timeImgURL = chrome.extension ? chrome.extension.getURL("images/time.svg") : '';
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
  // reset colors
  document.querySelector('button.reset-button').addEventListener('click', resetColors);

  if(chrome.extension) {
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
}

function resetColors() {
  [].slice.call(document.querySelectorAll('.paint-area')).forEach(function(el) {
    el.style[classie.has(el, 'paint-area--text') ? 'color' : 'background-color'] = '';
  });
}

application.init();