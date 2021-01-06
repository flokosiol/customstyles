const authorLinks = document.querySelectorAll('.issues-list .issue .author_link[href="/flo"]');

if (authorLinks && authorLinks.length > 0) {
  authorLinks.forEach(
    function(currentValue, currentIndex, listObj) {
      listObj[currentIndex].classList.add('flo');
    }
  );
}
