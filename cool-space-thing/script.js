body = document.getElementById('body');
bg = document.getElementById('bg');
body.addEventListener('mousemove', handleMouseMove);
// openFullscreen();

function handleMouseMove(e) {
  const clientX = e.clientX;
  const clientY = e.clientY;
  // const width = body.clientWidth;
  // const height = body.clientHeight;
  window.scrollTo(clientX / 4, clientY / 4)
}