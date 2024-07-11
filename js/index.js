/// <reference types="../@types/@types/jquery" />

// $(". ")

// slideBar



$(".slideBar ul li a[href^='#']").on("click", function (e) {
    let section = e.target.getAttribute("href");
    let offestSection = Math.floor($(section).offset().top);
    $("body,html").animate({ scrollTop: offestSection }, 500);
    console.log(section);
  });
  
  $(window).on("scroll", function () {
    if (245 < Math.floor($(window).scrollTop())) {
      $(".open").css("display", "none");
    } else {
      $(".open").css("display", "block");
    }
  });
  
  // sec-1
  $(".open").on("click", function () {
    $(".links").animate({ width: "200px" }, 1000);
  });
  $(".exit").on("click", function () {
    $(".links").animate({ width: "0px" }, 1000);
  });
  
  // sec-2
  
  $(".des h2").on("click", function (e) {
    $(".des p").not($(e.target).next()).slideUp(1000);
    $(e.target).next().slideToggle(1000);
  });
  
  // sec-3
  
  setInterval(function(){
    let futureDate = new Date('Aug 28, 2024 00:00:00').getTime();
  let currentDate = new Date().getTime();
  dateBetween = futureDate - currentDate;
  second =1000;
  minute =second * 60;
  hour =minute * 60;
  day =hour * 24;
  
  printDay =Math.floor((dateBetween /day));
  printHour =Math.floor((dateBetween % day) / hour );
  printMinute =Math.floor((dateBetween % hour) / minute );
  printSecond =Math.floor((dateBetween % minute ) / second);
  
  $(".days").html(printDay);
  $(".hour").html(printHour);
  $(".minate").html(printMinute);
  $(".second").html(printSecond);
  
  },1)
  // footer
  
  let max = 100;
  $(".text-area").on("input", function () {
    let txtarea = $(".text-area").val().length;
    if (max <= txtarea) {
      $(".character-count").html(
        `<p class="text-danger">your available character finished</p> <br/> Characyer Reamining `
      );
    } else {
      $(".character-count").html(
        ` <span class="text-danger" > ${max - txtarea}</span> Characyer Reamining`
      );
    }
  });