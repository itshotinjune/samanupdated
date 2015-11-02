$(document).ready(function() {
  var x = 0,
      y = 0;
      z = 0;
  var words1 = ["If", "we", "ever", "went", "to", "a costume", "party", "as", "Batman", "and", "Catwoman", "I'd", "let", "you", "be", "Batman", "cos", "GOTHAAAAM", "loves", "SAMAAAAN"];
  var words2 = ["Hum Tumhe Pyar Karte hai", "I love you","Te dua", "Ana behibek", "Yes kez sirumen", "M'bi fe", "Ya tabe kahayu", "Obicham te", "Ngo oiy ney a", "T'estimo", "Ne mohotatse",
                 "Ndimakukonda", "Mi aime jou", "Volim te", "Miluji te", "Jeg Elsker Dig", "Ik hou van jou", "Mi amas vin", "Ma armastan sind", "Ewedishalehu",
                 "Eg elski teg", "Doset daram", "Mahal kita", "Je t'aime", "Ta gra agam ort", "Mina rakastan sinua", "Mikvarhar", "Ich liebe dich", "S'agapo",
                 "Palangga ko ikaw", "Aloha wau ia oi", "Ani ohev otah", "Kuv hlub koj", "Nu' umi unangwa'ta", "Szeretlek", "Eg elska tig",
                 "Palangga ko ikaw", "Saya cinta padamu", "Negligevapse", "Taim i' ngra leat", "Ti amo", "Aishiteru", "Kaluguran daka", "Nakupenda", "Sarang Heyo",
                 "Te amo", "Es tevi miilu", "Bahibak", "Tave myliu", "Saya cintakan mu", "Wo ai ni", "Kanbhik", "Ana moajaba bik", "Ni mits neki", "Ayor anosh'ni",
                 "Jeg Elsker Deg", "Syota na kita!!", "Inaru Taka", "Mi ta stimabo", "Doo...set daaram", "Iay ovlay ouyay", "Kocham Cie", "Eu te amo", "Te iubesc",
                 "Ya tebya liubliu", "Tha gradh agam ort", "Volim te", "Techihhila", "Lu`bim ta", "Ljubim te", "Te quiero", "Mi lobi joe", "Ninapenda wewe",
                 "Jag alskar dig", "Ich lieb Di", "Mahal kita", "Wa ga ei li", "Ua Here Vau Ia Oe", "Phom rak khun", "Seni Seviyorum", "Ya tebe kahayu", "Anh ye^u em",
                 "'Rwy'n dy garu", "Ikh hob dikh", "Ndinokuda"];
  var reds = ["#630800", "#690800", "#6E0800", "#730500", "#770500", "#810500", "#850100", "#890800",
              "#8D0500", "#910400", "#950900", "#990800", "#AD0800", "#B20900"];

  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', 'pop.mp3');
  audioElement.setAttribute('autoplay', 'autoplay');


  $('.box').click(function() {

    audioElement.play();
    if ( $(this).hasClass('empty') ) {
      $(this).addClass('full').removeClass('empty');
      if(x<20)
        $(this).html(words1[x%words1.length]);
      else if(x>=20){
        $(this).html(words2[z%words2.length]);
        z++;
      }
      x++;
      $(this).css('background-color', reds[y%reds.length]);
      y++;
    }
    else {
      $(this).html(' ');
      $(this).addClass('empty').removeClass('full');
      $(this).attr('style', '');
    }
  })
});