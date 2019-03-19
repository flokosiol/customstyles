const comments = document.querySelectorAll('.comment');
if (comments && comments.length) {
  const flo = 'Kosiol, Florian';
  comments.forEach(function(comment) {
    if (comment.innerHTML.indexOf(flo) !== -1) {
      comment.classList.add('me');
    }
  });
}

const cells = document.querySelectorAll('.table > tbody > tr td');
if (cells && cells.length) {
  const hot = '<strong>!!!</strong>';
  const medium = '<strong>!!</strong>';
  const cold = '<strong>!</strong>';

  cells.forEach(function(cell) {
    if (cell.innerHTML.indexOf(hot) !== -1) {
      // cell.innerHTML = '🔥';
      cell.classList.add('prio');
      cell.classList.add('prio-hot');
    }
    else if (cell.innerHTML.indexOf(medium) !== -1) {
      cell.classList.add('prio');
      cell.classList.add('prio-medium');
    }
    else if (cell.innerHTML.indexOf(cold) !== -1) {
      cell.classList.add('prio');
      cell.classList.add('prio-cold');
    }
  });
}