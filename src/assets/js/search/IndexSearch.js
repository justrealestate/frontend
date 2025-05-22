const tabs = document.querySelectorAll('#propertyTabs .nav-link');
  const tabContent = document.getElementById('tabContent');
  const searchBox = document.getElementById('searchBox');

  const placeholderMap = {
    buy: 'Search properties for sale...',
    rent: 'Search rental homes or apartments...',
    commercial: 'Search commercial properties...'
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', function (e) {
      e.preventDefault();

      // Active tab switch
      tabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');

      // Update tab content
      const selected = this.getAttribute('data-tab');
      tabContent.innerHTML = `<p>Currently viewing: <strong>${selected.charAt(0).toUpperCase() + selected.slice(1)}</strong></p>`;

      // Update input placeholder
      searchBox.placeholder = placeholderMap[selected];
    });
  });