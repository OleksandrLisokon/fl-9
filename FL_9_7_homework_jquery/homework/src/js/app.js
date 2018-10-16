const $container = $('#container');

const $button = $('<a class="viewMore">');
$button.text('View more');
let firstVal = 0;
let lastVal = 12;
const KEYCODE_ESC = 27;

$.getJSON('data/media.json', function (data) {

    let items = [];
    let content = [];
    $.each(data.media, function (i, item) {
        let element = $(`<div data-id=${item.id} class='item'><img src=${item.display_url}><div class='info'><span class='likes'>`+
`${item.edge_liked_by.count}</span><span class='comments'>${item.edge_media_to_comment.count}</span></div></div>`);
        items.push(element);

        let galery = `<div id="galery" class="modal"><div class="modal-content"><span class="close">&times;</span>` +
`<div class='pic'><img src='${item.display_url}'></div><div class='galeryText'><img src=${data.profile_pic_url}>`+
`<span><b>${data.username}</b></span><span>&bull;</span><span class = 'follow'>Follow</span><p>${item.location}</p><hr/>`+
`<p><b>${data.username}</b>${item.edge_media_to_caption}</p><footer>${item.edge_liked_by.count} likes<hr/><a href=''>Add a comment...</a>`+
`</footer></div></div><span class="prev"></span><span class="next"></span>`;
        content.push(galery);
    });

    $container.append(items.slice(firstVal, lastVal));
    $container.after($button);

    $button.on('click', function (e) {
        e.preventDefault();
        firstVal = lastVal;
        lastVal += 6;
        $container.append(items.slice(firstVal, lastVal));
    });

    $('.item').hover(
        function() {
          $(this).addClass('hover').find('.info').css('display', 'inline-block');
        }, function() {
          $(this).removeClass('hover').find('.info').css('display', 'none');
        }
      );
    
    function galery(index) {
        if (index < 0 && index >= content.length) {
            return;
        } else {
            $container.after(content[index]);
            $('#galery').css('display', 'block');
        }
    };

    $('.item').on('click', function (e) {
        e.preventDefault();
        let index = $('.item').index(this);
        galery(index);

        $('.close').on('click', function (e) {
            e.preventDefault();
            $('#galery').empty();
        });

        $(document).keyup(function(e) {
            if (e.keyCode == KEYCODE_ESC) $('#galery').css('display', 'none');
        });

        $('.next').on('click', function (e) {
            e.preventDefault();
            $('#galery').empty();
            index += 1;
            galery(index);
        });

        $('.next').on('click', function (e) {
            e.preventDefault();
            index = $('.item').index(this);
            $('#galery').empty();
            index -= 1;
            galery(index);
        });
    });
});
