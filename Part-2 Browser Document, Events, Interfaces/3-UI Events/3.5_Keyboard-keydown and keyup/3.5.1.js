kinput.onkeydown = kinput.onkeyup = kinput.onkeypress = handle;

let lastTime = Date.now();

function handle(e) {
  if (form.elements[e.type + "Ignores"].checked) return;

  area.scrollTop = 1e6;

  let text =
    e.type +
    " key=" + e.key +
    " code=" + e.code +
    (e.shiftKey ? " shiftssKey" : "") +
    (e.ctrlKey ? " ctrlkey" : "") +
    (e.altKey ? " altKey" : "") +
    (e.metaKey ? " metaKey" : "") +
    (e.repeat ? " (repeat)" : "") +
    "\n";

  if (area.value && Date.now() - lastTime > 250) {
    area.value += new Array(100).join(".") + "\n";
  }
  lastTime = Date.now();

  area.value += text;

  if (form.elements[e.type + "Stops"].checked) {
    e.preventDefault();
  }
}
