import AwareLegacyLibrary from './lib/AwareLegacyLibrary';

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

const obj = new AwareLegacyLibrary('Old-School', div);

function createButton(prefName) {
  const btn = document.createElement('button');
  btn.textContent = `old-school-button-defaults-${prefName}`;
  root.appendChild(btn);

  function updateButton(change) {
    if (change[prefName] !== undefined) {
      btn.textContent = `Old-School Button: ${prefName} = ${change[prefName]}`;
    }
  }

  obj.addListener((change) => {
    updateButton(change);
  });

  btn.addEventListener('click', () => {
    obj.set(prefName, 0);
  });

  updateButton({[prefName]: obj.get(prefName)});
}

createButton('alpha');
createButton('beta');
