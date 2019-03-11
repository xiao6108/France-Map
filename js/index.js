var place_data=[
  {
tag: "LOIRE",
place: "羅瓦河谷",
display: "羅瓦河流域的葡萄酒溫順易入口，輕巧柔和，富含果香，在法國很受到歡迎，平順中又帶點高雅，且四個主要產區的酒款又各有特色，依著不同地話呈現出不同的個性。若有機會，不妨試試這來自法國王室後花園的佳釀，品嘗羅瓦河灌溉出的不凡體驗。",
},
{
tag: "BORDEAUX",
place: "勃根地",
},
{
tag: "SUDOUEST",
place: "西南報",
display: "Sud-Ouest（西南產區）由幾個小型獨立葡萄產區基於質量和認同要求聯合而成，西南部包括波爾多區域，西南地區是完全朝陽的山坡地，受大西洋的影響，氣候為大陸傾向型海洋氣候：春季潮濕，夏季炎熱，秋季溫和而陽光充足，冬季涼爽多雨。由於氣溫高，葡萄會充分成熟，因此葡萄所含糖份也會很高。秋季天氣特別好，能夠用過於成熟和貴腐的葡萄來釀造利口酒，如 Juranon（朱朗松）。",
},
{
tag: "LANGUEDOC ROUSSILLON",
place: "朗格多克胡希詠",
display: "這塊法國人眼中的 « 天然美麗的後花園 »是一塊非常古老的葡萄酒出產地，從拿波恩市及此省份地中海沿岸地區挖出的一些古物中顯示葡萄酒產業在這個地方至少已經存在有2000多年的歷史了，法國最早種植葡萄地區就在今日的隆格多克 魯西雍(Languedoc Roussillon)省拿波恩市(Narbonne)郊區的山坡地。從最早的腓尼基人在此處栽種葡萄從事葡萄酒貿易到中古世紀大量的傳教士在此蓋教堂、設立修道院致力於葡萄的栽種及釀酒技術的鑽研，發現：山坡地是最有利於葡萄的生長。直至今日，隆格多克 魯西雍(Languedoc Roussillon)在葡萄酒的土壤區分中在山坡地種植所釀造出的葡萄酒堪稱為較為優質的葡萄酒。",
},
{
tag: "PROVENCE",
place: "普羅旺斯",
display: "普羅旺斯省的大自然與這裏的人們共同塑造培養出當地美麗的自然風光與深厚的文化傳統。西元前六世紀，希臘人就在這裏開墾出法國第一片葡萄園，同時也帶來了葡萄酒文化。今天，普羅旺斯所出產的紅葡萄酒、玫瑰紅葡萄酒以及白葡萄酒都繼承了這一悠久的釀造傳統。這些出產於地中海地區的優良葡萄酒都具有明顯的特點，口感特別醇厚。普羅旺斯的葡萄種植區裡有著眾多的著名景點，因而這片土地對於愛好生活的人來說是再好不過的了。",
},
{
tag: "CORSE",
place: "科西嘉",
},
{
tag: "RHONE",
place: "隆河",
display: "隆河區(Rhone)位於法國南邊，氣候溫熱，以生產帶有辛香料氣味的紅葡萄酒著名，葡萄品種以 Syrah、Grenache 為主。白酒葡萄則有 Marsanne、Roussanne、Viognier等。",
},
{
tag: "BEAUJOLAIS",
place: "勃根地",
},
{
tag: "BOURGOGNE",
place: "勃根地",
},
{
tag: "ALSACE",
place: "勃根地",
},
{
tag: "CHAMPAGNE",
place: "香檳區",
display: "香檳-亞丁省的特產葡萄酒，首當其衝的就是著名的香檳酒(Champagne)。坐落在葡萄園中的韋爾澤內燈塔(Phare de Verzenay)將為您揭開這款飲品的所有秘密。白朗丘(Côte des Blancs)葡萄種植區是夏多內葡萄(Chardonnay)和白中白香檳酒(champagne Blanc de Blancs)的特別產地。",
},
]

var vm = new Vue({
  el: "#app",
  data: {
    filter: "",
    place_data: place_data
  },computed:{
    now_area: function(){
      var vobj=this;
      var result=this.place_data.filter(function(obj){
        return obj.tag==vobj.filter;
      });
      if (result.length==0){
        return null;
      }
      return result[0];
    }
  }
});

$("path").mouseenter(function(e){
  var tagname=$(this).attr("data-name");
  vm.filter=tagname;

});