$(document).ready(function () {
    $("a[title='chua']").click(function () {
      $.getJSON("json_files/chua.json", function (data) {
        var month = "";
        var title = "";
        var speaker = "";
        var text = "";
        var image = "";
  
        $.each(data.speakers, function (key, value) {
          month = value.month;
          title = value.title;
          speaker = value.speaker;
          text = value.text;
          image += this.image;
          
        });
        $("main h1").empty();
        $("main h2").empty();
        $("main p").empty();
  
        $("main h1").append(title);
        $("main h2").append(month + "<br>" + speaker);
        $("main p").append(text);
  
        $("main img").attr("src", image);
      });
    });
    $("a[title='sampson']").click(function () {
      $.getJSON("json_files/sampson.json", function (data) {
        var month = "";
        var title = "";
        var speaker = "";
        var text = "";
        var image = "";
  
        $.each(data.speakers, function (key, value) {
          month = value.month;
          title = value.title;
          speaker = value.speaker;
          text = value.text;
          image += this.image;
         
        });
  
        $("main h1").empty();
        $("main h2").empty();
        $("main p").empty();
  
        $("main h1").append(title);
        $("main h2").append(month + "<br>" + speaker);
        $("main p").append(text);
  
        $("main img").attr("src", image);
      });
    });
    $("a[title='sorkin']").click(function () {
      $.getJSON("json_files/sorkin.json", function (data) {
        var month = "";
        var title = "";
        var speaker = "";
        var text = "";
        var image = "";
  
        $.each(data.speakers, function (key, value) {
          month = value.month;
          title = value.title;
          speaker = value.speaker;
          text = value.text;
          image += this.image;
          
        });
  
         $("main h1").empty();
         $("main h2").empty();
         $("main p").empty();
  
         $("main h1").append(title);
         $("main h2").append(month + "<br>" + speaker);
         $("main p").append(text);
  
         $("main img").attr("src", image);
      });
    });
    $("a[title='toobin']").click(function () {
      $.getJSON("json_files/toobin.json", function (data) {
        var month = "";
        var title = "";
        var speaker = "";
        var text = "";
        var image = "";
  
        $.each(data.speakers, function (key, value) {
          month = value.month;
          title = value.title;
          speaker = value.speaker;
          text = value.text;
          image += this.image;
          
        });
  
         $("main h1").empty();
         $("main h2").empty();
         $("main p").empty();
  
         $("main h1").append(title);
         $("main h2").append(month + "<br>" + speaker);
         $("main p").append(text);
  
         $("main img").attr("src", image);
      });
    });
  }); // end ready
  