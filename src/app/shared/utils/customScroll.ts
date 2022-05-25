export const styleScrollbars = (elmt: any) => {
  const stylesheet = `
  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  ::-webkit-scrollbar-track {
    background: var(--psi-color-cinza-step-250);
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(0, 70, 199, 0.727);
    border-radius: 15px;

  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(76, 150, 255, 0.727);
  }
  `;

  const styleElmt = elmt.shadowRoot.querySelector('style');

  if (styleElmt) {
    styleElmt.append(stylesheet);
  } else {
    const barStyle = document.createElement('style');
    barStyle.append(stylesheet);
    elmt.shadowRoot.appendChild(barStyle);
  }
}
