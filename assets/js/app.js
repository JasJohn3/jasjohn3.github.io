document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
  var elems = document.querySelectorAll('.parallax');
  var instances = M.Parallax.init(elems, {});
});
