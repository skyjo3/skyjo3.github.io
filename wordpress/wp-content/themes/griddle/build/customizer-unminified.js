(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/**
 * File customizer.js.
 *
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */

(function ($) {

    // Site title and description.
    wp.customize('blogname', function (value) {
        value.bind(function (to) {
            $('.site-name a').text(to);
        });
    });
    wp.customize('blogdescription', function (value) {
        value.bind(function (to) {
            $('.site-description').text(to);
        });
    });

    // Header text color.
    wp.customize('header_textcolor', function (value) {
        value.bind(function (to) {
            if ('blank' === to) {
                $('.site-name, .site-description').css({
                    'clip': 'rect(1px, 1px, 1px, 1px)',
                    'position': 'absolute'
                });
            } else {
                $('.site-name, .site-description').css({
                    'clip': 'auto',
                    'position': 'relative'
                });
                $('.site-name a, .site-description').css({
                    'color': to
                });
            }
        });
    });
})(jQuery);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc2NyaXB0cy9jdXN0b21pemVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7Ozs7QUFRQSxDQUFFLFVBQVUsQ0FBVixFQUFjOztBQUVaO0FBQ0EsT0FBRyxTQUFILENBQWMsVUFBZCxFQUEwQixVQUFVLEtBQVYsRUFBa0I7QUFDeEMsY0FBTSxJQUFOLENBQVksVUFBVSxFQUFWLEVBQWU7QUFDdkIsY0FBRyxjQUFILEVBQW9CLElBQXBCLENBQTBCLEVBQTFCO0FBQ0gsU0FGRDtBQUdILEtBSkQ7QUFLQSxPQUFHLFNBQUgsQ0FBYyxpQkFBZCxFQUFpQyxVQUFVLEtBQVYsRUFBa0I7QUFDL0MsY0FBTSxJQUFOLENBQVksVUFBVSxFQUFWLEVBQWU7QUFDdkIsY0FBRyxtQkFBSCxFQUF5QixJQUF6QixDQUErQixFQUEvQjtBQUNILFNBRkQ7QUFHSCxLQUpEOztBQU1BO0FBQ0EsT0FBRyxTQUFILENBQWMsa0JBQWQsRUFBa0MsVUFBVSxLQUFWLEVBQWtCO0FBQ2hELGNBQU0sSUFBTixDQUFZLFVBQVUsRUFBVixFQUFlO0FBQ3ZCLGdCQUFLLFlBQVksRUFBakIsRUFBc0I7QUFDbEIsa0JBQUcsK0JBQUgsRUFBcUMsR0FBckMsQ0FBMEM7QUFDdEMsNEJBQVEsMEJBRDhCO0FBRXRDLGdDQUFZO0FBRjBCLGlCQUExQztBQUlILGFBTEQsTUFLTztBQUNILGtCQUFHLCtCQUFILEVBQXFDLEdBQXJDLENBQTBDO0FBQ3RDLDRCQUFRLE1BRDhCO0FBRXRDLGdDQUFZO0FBRjBCLGlCQUExQztBQUlBLGtCQUFHLGlDQUFILEVBQXVDLEdBQXZDLENBQTRDO0FBQ3hDLDZCQUFTO0FBRCtCLGlCQUE1QztBQUdIO0FBQ0osU0FmRDtBQWdCSCxLQWpCRDtBQWtCSCxDQWpDRCxFQWlDSyxNQWpDTCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiAqIEZpbGUgY3VzdG9taXplci5qcy5cbiAqXG4gKiBUaGVtZSBDdXN0b21pemVyIGVuaGFuY2VtZW50cyBmb3IgYSBiZXR0ZXIgdXNlciBleHBlcmllbmNlLlxuICpcbiAqIENvbnRhaW5zIGhhbmRsZXJzIHRvIG1ha2UgVGhlbWUgQ3VzdG9taXplciBwcmV2aWV3IHJlbG9hZCBjaGFuZ2VzIGFzeW5jaHJvbm91c2x5LlxuICovXG5cbiggZnVuY3Rpb24oICQgKSB7XG5cbiAgICAvLyBTaXRlIHRpdGxlIGFuZCBkZXNjcmlwdGlvbi5cbiAgICB3cC5jdXN0b21pemUoICdibG9nbmFtZScsIGZ1bmN0aW9uKCB2YWx1ZSApIHtcbiAgICAgICAgdmFsdWUuYmluZCggZnVuY3Rpb24oIHRvICkge1xuICAgICAgICAgICAgJCggJy5zaXRlLW5hbWUgYScgKS50ZXh0KCB0byApO1xuICAgICAgICB9ICk7XG4gICAgfSApO1xuICAgIHdwLmN1c3RvbWl6ZSggJ2Jsb2dkZXNjcmlwdGlvbicsIGZ1bmN0aW9uKCB2YWx1ZSApIHtcbiAgICAgICAgdmFsdWUuYmluZCggZnVuY3Rpb24oIHRvICkge1xuICAgICAgICAgICAgJCggJy5zaXRlLWRlc2NyaXB0aW9uJyApLnRleHQoIHRvICk7XG4gICAgICAgIH0gKTtcbiAgICB9ICk7XG5cbiAgICAvLyBIZWFkZXIgdGV4dCBjb2xvci5cbiAgICB3cC5jdXN0b21pemUoICdoZWFkZXJfdGV4dGNvbG9yJywgZnVuY3Rpb24oIHZhbHVlICkge1xuICAgICAgICB2YWx1ZS5iaW5kKCBmdW5jdGlvbiggdG8gKSB7XG4gICAgICAgICAgICBpZiAoICdibGFuaycgPT09IHRvICkge1xuICAgICAgICAgICAgICAgICQoICcuc2l0ZS1uYW1lLCAuc2l0ZS1kZXNjcmlwdGlvbicgKS5jc3MoIHtcbiAgICAgICAgICAgICAgICAgICAgJ2NsaXAnOiAncmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Bvc2l0aW9uJzogJ2Fic29sdXRlJ1xuICAgICAgICAgICAgICAgIH0gKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCggJy5zaXRlLW5hbWUsIC5zaXRlLWRlc2NyaXB0aW9uJyApLmNzcygge1xuICAgICAgICAgICAgICAgICAgICAnY2xpcCc6ICdhdXRvJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Bvc2l0aW9uJzogJ3JlbGF0aXZlJ1xuICAgICAgICAgICAgICAgIH0gKTtcbiAgICAgICAgICAgICAgICAkKCAnLnNpdGUtbmFtZSBhLCAuc2l0ZS1kZXNjcmlwdGlvbicgKS5jc3MoIHtcbiAgICAgICAgICAgICAgICAgICAgJ2NvbG9yJzogdG9cbiAgICAgICAgICAgICAgICB9ICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gKTtcbiAgICB9ICk7XG59ICkoIGpRdWVyeSApOyJdfQ==
