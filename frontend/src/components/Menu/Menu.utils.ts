export const resetActiveButton = () => {
  const buttonList = document.querySelectorAll('.makeStyles-iconButtons-14');

  buttonList.forEach((button: HTMLDivElement) => {
    button.classList.remove('focused');
  });
};

export const setActiveButton = (selectedButton: HTMLDivElement) => {
  if (selectedButton) {
    resetActiveButton();

    selectedButton?.classList.add('focused');
  }
};