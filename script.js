function copyText(text) {
  // 建立一個暫時的文字輸入框
  const tempInput = document.createElement('input');
  tempInput.value = text;
  document.body.appendChild(tempInput);

  // 選取並複製文字
  tempInput.select();
  document.execCommand('copy');

  // 移除暫時的文字輸入框
  document.body.removeChild(tempInput);

  // 彈出提示
  alert(`Copied: ${text}`);
}