var axios = require("axios");
var cheerio = require("cheerio");
var scrape = function() {
  return axios.get("https://therealdeal.com/").then(function(res) {
    var $ = cheerio.load(res.data);
    console.log("scraping");
    var articles = [];


    $(".post-holder").each(function(i, element) {
      var head = $(this)
      .find("h3.entry-title.entry-summary")
      .children()
      .attr("title")
  

      var url = $(this)
      .find("a")
      .attr("href");

      var time = $(this)
      .find("span.date.updated.published")
      .text()
      .trim();


      var sum = $(this)
      .find(".blogroll_excerpt")
      .text()
      .slice(12, -12);


      var image = $(this)
      .find(".blogroll_image_small")
      .find("a")
      .find("img")
      .attr("src");


      

      if (head && sum && time && image) {

        var dataToAdd = {
          headline: head,
          time: time,
          summary: sum,
          url: url,
          image: image
        };

        articles.push(dataToAdd);
        console.log(articles);
      }
    });
    return articles;
    
  });
};

module.exports = scrape;




