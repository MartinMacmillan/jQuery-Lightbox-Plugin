/* 
Lightbox-style Image Gallery, jQuery Plugin.
Version 1.0.0
Martin Macmillan, 2015.
*/

// Use of closure to feed in dependencies and provide scope
(function (document, $, undefined) {
	'use strict';

	// The Lightbox class, itself
	$.fn.lightbox = function (options) {
		var overlay = document.createElement('div'),
			container = document.createElement('div'),
			url,
			img,
			config,
			imagesLoaded = false;

		overlay.className = 'mm-lightbox-overlay';
		container.className = 'mm-lightbox-container';

		// Default config
		config = $.extend({}, {
			preload: [],
			speed: 400,
			opacity: .7,
			animation: 'linear'
		}, options);

		// Native code for performance
		function imgPreloader(imgArray) {
			var i = 0,
				imgArrayLen = imgArray.length,
				img;

			for (i; i < imgArrayLen; i += 1) {
				img = document.createElement('img');
				img.src = imgArray[i];
			}
			return imagesLoaded = true;
		}

		function closeOverlay() {
			$(overlay).on('click', function () {
				$(container).add(img).remove();
				$(overlay).css({
					'opacity' : '0'
				}).remove();
				$('html, body').css({
				    'overflow': 'auto',
				    'height': 'auto'
				});
			});
		}

		function openOverlay() {
			$(overlay).css({
				'background-color': '#000',
				'cursor': 'pointer',
				'position': 'absolute',
				'top': 0,
				'left': 0,
				'height': '100%',
				'width': '100%',
				'opacity': 0,
				'overflow-y': 'hidden',
				'filter':' alpha(opacity=0)',
				'z-index': 98
			});

			$('body').append(overlay);

			$(overlay).animate({
				'opacity': config.opacity 
			}, config.speed, config.animation);

			$(container).css({
				'display': 'block',
				'z-index': 99,
				'position': 'absolute',
				'background-color': 'transparent',
				'cursor': 'pointer',
				'top': '50%',
				'left': '50%',
				'opacity': 0
			});

			$('body').append(container);
			img = $('<img />');
			img.attr('src', url).appendTo(container);

			$(container).find('img').on('load', function () {
				var imgWidth = img.width(),
					imgHeight = img.height();
				$(container).css({
					'box-sizing': 'content-box',
					'background-color': '#fff',
					'cursor': 'auto',
					'top': '50%',
					'left': '50%',
					'width': imgWidth,
					'height': imgHeight,
					'margin-top': - (imgHeight / 2),
					'margin-left': - (imgWidth / 2),
					'max-width': '100%',
					'opacity': 1
				});

				$('html, body').css({
				    'overflow': 'hidden',
				    'height': '100%'
				});
			});
			closeOverlay();	
		}

		function init(context) {
			// Image Pre-Loader -- This is optional. Fill in your image urls for a better experience.
			if (config.preload.length) {
				imgPreloader(config.preload);
			} else {
				imagesLoaded = true;
			}

			// Allow event to bubble up, attaching just event listener, rather than potentially hundreds.
			$(context).on('click', 'a', function (e) {
				e.preventDefault();
				url = this.href;

				// Wait for the full size images to be loaded before opening the overlay
				if (imagesLoaded) {
					openOverlay();
				}
			});

		}

		init(this);

		// Returning a single 'this' for chaining possibilities. (We don't expect multiple Lightbox galleries per page.)
		return this;
	};

}(window.document, jQuery));