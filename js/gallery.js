var initPhotoSwipeFromDOM = function(gallerySelector, galleryName) {
	//I'm pretty sure the only reason why I needed the gallery element as well as the gallery name was for the headline part
  var galleried = document.querySelectorAll(gallerySelector);
    // parse slide data (url, title, size ...) from DOM elements
    // (children of gallerySelector)
    var parseThumbnailElements = function() {
        var photo,
            item;
        var items = [];
        for(var i = 0; i < galleried.length; i++) {
            photo = galleried[i];
            // include only element nodes

            // create slide object
            if (photo.getAttribute('data-width') == '1200') {
              item = {
                  src: photo.getAttribute('data-src'),
                  w: parseInt(photo.getAttribute('data-width'), 10),
                  h: parseInt(photo.getAttribute('data-height'), 10),
                  title: photo.getAttribute('data-caption'),
              };
            } else {
             //This section is for portrait images, I save them as the same name but add l
              var imageStem = photo.getAttribute('data-src').slice(0,-4);
              var newImage = imageStem + 'l.JPG';
              item = {
                  src: newImage,
                  w:1200,
                  h:800,
                  title: photo.getAttribute('data-caption'),
              };
            }

            items.push(item);
        }
        return items;
    };

    // find nearest parent element
    var closest = function closest(el, fn) {
        return el && ( fn(el) ? el : closest(el.parentNode, fn) );
    };

    // triggers when user clicks on thumbnail
    var onThumbnailsClick = function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        var eTarget = e.target || e.srcElement;

        // find root element of slide
        var clickedListItem = closest(eTarget, function(el) {
            return (el.tagName && el.tagName.toUpperCase() === 'IMG');
        });

        if(!clickedListItem) {
            return;
        }

        // find index of clicked item by looping through all child nodes
        // alternatively, you may define index via data- attribute
        index = parseInt(clickedListItem.getAttribute('data-pswp-uid'));
        if(index >= 0) {
            // open PhotoSwipe if valid index found
            openPhotoSwipe( index, galleried);
        }
        return false;
    };

    // parse picture index and gallery index from URL (#&pid=1&gid=2)
    var photoswipeParseHash = function() {
        var hash = window.location.hash.substring(1),
        params = {};
        if(hash.length < 5) {
            return params;
        }

        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if(!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');
            if(pair.length < 2) {
                continue;
            }
            params[pair[0]] = pair[1];
        }
        if(params.gid == galleryName) {
          if(params.pid) {
              params.pid = parseInt(params.pid, 10);
          }

          return params;
        } else {
          return false;
        }

    };

    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;

        items = parseThumbnailElements(galleryElement);
        // define options (if needed)
        options = {

            // define gallery index (for URL)
            galleryUID: galleryName,
            shareButtons: [
    {id:'facebook', label:'Share on Facebook', url:'https://www.facebook.com/sharer/sharer.php?u='},
    {id:'twitter', label:'Tweet', url:'https://twitter.com/intent/tweet?text=&url='},
]
        };

        // PhotoSwipe opened from URL
        if(fromURL) {
            if(options.galleryPIDs) {
                // parse real index when custom PIDs are used
                // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                for(var j = 0; j < items.length; j++) {
                    if(items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                // in URL indexes start from 1
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10) - 1;
        }

        // exit if index not found
        if( isNaN(options.index) ) {
            return;
        }

        if(disableAnimation) {
            options.showAnimationDuration = 0;
        }
        // Pass data to PhotoSwipe and initialize it
        gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };

    // loop through all gallery elements and bind events
    var galleryElements = document.querySelectorAll( gallerySelector );

    for(var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i+1);
        galleryElements[i].onclick = onThumbnailsClick;
    }

    // Parse URL and open gallery if it contains #&pid=3&gid=1
    var hashData = photoswipeParseHash();
    if(hashData.pid && hashData.gid) {
        openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true )
    }
};