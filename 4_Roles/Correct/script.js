window.addEventListener('load', () => {
  const header = document.getElementsByClassName('js-header')[0];
  const mainContent = document.getElementById('main-content');
  const tooltipTrigger = document.getElementById('tooltip-1-parent');
  const tooltip = document.getElementById('tooltip-1');

  header.addEventListener('click', () => mainContent.scrollIntoView());
  tooltipTrigger.addEventListener('mouseenter', showTooltip);
  tooltipTrigger.addEventListener('focusin', showTooltip);
  tooltipTrigger.addEventListener('mouseleave', hideTooltip);
  tooltipTrigger.addEventListener('focusout', hideTooltip);

  function showTooltip() {
    tooltip.classList.remove('hidden');
  }

  function hideTooltip() {
    tooltip.classList.add('hidden');
  }
});
