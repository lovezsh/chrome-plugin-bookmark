chrome.bookmarks.getTree(function (bookmarkTreeNodes) {
  // 处理书签树节点数据
  const data = bookmarkTreeNodes[0].children[0].children;
  console.log(data);
  localStorage.setItem("bookmarksData", JSON.stringify(data));

  $.each(data, function (i) {
    var $li = $("<li class='" + i + "'>" + ($(this)[0].title) + "</li>")
    $("#ul").append($li);
    const children = $(this)[0].children;


    

    $.each(children, function () {
      var $item = $("<li class='" + i + "'><a href=' " + ($(this)[0].url) + "' target='_blank'>" + ($(this)[0].title) + "</a></li>")
      $('#content').append($item);
    })

    $('#content li').hide();
  })

  $('#ul li').each(function (i) {
    $(this).click(function () {
      const liclass = $(this)[0].className;
      // console.log(liclass);
      // console.log(i);

      $('#ul li').removeClass('active')
      $(this).addClass('active')
      $('#content li').hide();
      $('#content li.' + liclass + '').show();
    })
  })

});