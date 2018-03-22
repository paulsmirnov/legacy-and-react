import LegacyLibrary from './LegacyLibrary';

const root = document.getElementById('old-school-app');
while (root.firstChild) {
  root.removeChild(root.firstChild);
}

const div = document.createElement('div');
div.style.width = '100px';
div.style.height = '100px';
div.style.backgroundColor = 'salmon';
div.textContent = 'old-school-container-defaults';
root.appendChild(div);

const btn = document.createElement('button');
btn.textContent = 'old-school-button-defaults';
root.appendChild(btn);

const obj = new LegacyLibrary('Old-School', div);

function updateButton(value) {
  btn.textContent = `Old-School Button @ ${value}`;
}

obj.addListener((value) => {
  updateButton(value);
});

btn.addEventListener('click', () => {
  obj.increment();
});

updateButton(obj.getCounter());
