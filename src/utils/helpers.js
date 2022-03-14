export const copyToClipboard = async value => {
  let copy = document.createElement('textarea');
  copy.style.position = 'absolute';
  copy.style.left = '-99999px';
  copy.style.top = '0';
  copy.setAttribute('id', 'ta');
  console.log(copy);
  document.body.appendChild(copy);
  copy.value = value;
  copy.select();
  document.execCommand('copy');
};
