// xshiming

// var full_page = document.getElementsByClassName("full_page");
// if (full_page.length != 0) {
//   full_page[0].style.background = "transparent";
// }

// var index = Math.floor(Math.random() * 110)
// var imageUrl = "https://xqm-oss.oss-cn-beijing.aliyuncs.com/guidao/pic-" + index + ".jpg"
// var postBg = document.getElementsByClassName("post-bg");
// if (postBg.length != 0) {
//   postBg[0].style.background = "url(" + imageUrl + ")";
// }

var postBg = document.getElementsByClassName("post-bg");
if (postBg.length != 0 && postBg[0].style.backgroundImage == '') {
  // postBgBefore[0]
  //   postBg[0].style.background = "url(" + imageUrl + ")";
  // postBg[0].sty('post-bg noimg')
  $('.post-bg').removeClass('post-bg').addClass('post-bgnoimg');
  // console.log('1');
  // console.log(document.getElementsByClassName("post-bg"));
}