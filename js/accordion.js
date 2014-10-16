/*!
 * jQuery JavaScript Library v1.11.1
 * http://jquery.com/
 *
 * Copyright 2014, Jeffrey Poland
 * Released under the MIT License.
 * http://jquery.org/license
 * Title: Accordion
*/

$(function($) {
  $.fn.accordion = function(options) {
    //////// Accordion default action //////
    var settings = $.extend({
      // These are the defaults.
      autoClose: "false"
    }, options);

    $(this).each(function() {

      var up = $(this).attr('data-acc');
      var con = '.accordion_content';

      if (up === 'open') {
        //////// Open Accordion by default //////
        $(this).addClass('active_acc acc_border').find(con).css({
          display: 'block'
        }).addClass('active_acc');
        $(this).find('span').addClass('acc_minus');

      } else {
        //////// Close Accordion by default //////
        $(this).addClass('acc_border').find('span').addClass('acc_plus');
      }

      ///// Hash Tag URL - Opens a selcted accordion menu by default.
      var p = window.location.hash.substring(1);
      //remove white space from string
      var newStr = p.replace(/\s+/g, '');
      
      //alert(newStr);
      var h = $(this).attr('id');
      var s = $(this).siblings();

      //alert(h);

      if (newStr === h) {

        var v = $(this).attr('data-acc', 'closed');

        if (up == 'closed') {
          //////// Close Accordion //////
          $(this).attr('data-acc', 'open');
          $(this).addClass('active_acc acc_border').find(con).addClass('active_acc');
          $(this).find('span').removeClass('acc_plus').addClass('acc_minus');

        }

        $(this).find('div.accordion_content').slideToggle("slow");
        $(s).attr('data-acc', 'closed');
        $(s).find(con).css({
          display: 'none'
        }).removeClass('active_acc');
        $(s).find('h3').find('span').removeClass('acc_minus').addClass('acc_plus');
        $(s).removeClass('active_acc');

      }


    });
    //////// Accordion click function //////
    $(this).find('h3').click(function(e) {
      e.preventDefault();

      var up = $(this).parent().attr('data-acc');
      var auto = settings.autoClose;
      var con = '.accordion_content';
      var sib = $(this).parent().siblings();

      if (auto == 'true') {
        if(up == 'closed'){
        $(this).parent().parent().find('.active_acc').find(con).slideToggle("slow");
        }else{
          $(sib).find(con).css({display: 'none'});
        }
        sib.attr('data-acc', 'closed');
        sib.find(con).removeClass('active_acc');
        sib.find('h3').find('span').removeClass('acc_minus').addClass('acc_plus');
        sib.removeClass('active_acc');
        var trythis = sib.attr('data-acc');
        
      }
      $(this).parent().find(con).slideToggle("slow");

      if (up == 'closed') {
        //////// Close Accordion //////
        $(this).parent().attr('data-acc', 'open');
        $(this).parent().addClass('active_acc acc_border').find(con).addClass('active_acc');
        $(this).find('span').removeClass('acc_plus').addClass('acc_minus');

      } else {
        //////// Open Accordion //////
        $(this).parent().attr('data-acc', 'closed');
        $(this).parent().removeClass('active_acc').find(con).removeClass('active_acc');
        $(this).find('span').removeClass('acc_minus').addClass('acc_plus');

      }
    });

  };
  $("div.accordion").accordion();
}(window.jQuery));