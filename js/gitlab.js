const authorAvatars = document.querySelectorAll('.issues-list .issue .author_link[href="/flo"] .avatar');

if (authorAvatars && authorAvatars.length > 0) {
  authorAvatars.forEach(
    function(element) {
      element.closest('.issue').classList.add('flo');
    }
  );
}
