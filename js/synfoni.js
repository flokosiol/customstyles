const comments = document.querySelectorAll('.comment');
if (comments && comments.length) {
  const flo = 'Kosiol, Florian';
  comments.forEach(function(comment){
    if(comment.innerHTML.indexOf(flo) !== -1){
      comment.classList.add('me');
    }
  });
}