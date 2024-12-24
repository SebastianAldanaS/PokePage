const btnFilter = document.querySelector('.icon-filter');

btnFilter.addEventListener('click', () => {
  const filter = document.querySelector('.container-filters');
  filter.classList.toggle('active');
});