const entryContainer = document.querySelector('#entry-container');
const cards = document.querySelectorAll('#card');

const noEntriesHeader = document.createElement('h2');
noEntriesHeader.textContent = 'No entries yet :(';
noEntriesHeader.classList.add('text-5xl', 'font-bold', 'text-center', 'mt-6');

const nothingFoundHeader = document.createElement('h2');
nothingFoundHeader.textContent = 'Nothing found :(';
nothingFoundHeader.classList.add('text-5xl', 'font-bold', 'text-center', 'mt-6');

if (entryContainer) {
  if (!cards.length) entryContainer.insertAdjacentElement('beforebegin', noEntriesHeader);
}

const addNewEntry = async (e) => {
  e.preventDefault();

  const title = e.target.title.value;
  const body = e.target.body.value;
  const tagName = e.target.tagName.value;

  const message = JSON.stringify({
    title,
    body,
    tagName,
  });

  const response = await fetch('http://localhost:7777/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: message,
  });

  const data = await response.json();

  const entryCard = `
  <div id="card" data-id=${data.id} class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">${data.title}</h5>
    <p class="mb-3 font-bold text-white-700">${data.body}</p>
    <p class="mb-3 font-normal text-gray-700">${tagName}</p>
    <a href="/edit/${data.id}" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
      Edit
      <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></svg>
    </a>
    <button id="delete_btn" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
    Delete
    <svg aria-hidden="true" class="ml-2 s-mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
    </button>
  </div>
  `;

  if (noEntriesHeader) noEntriesHeader.remove();

  entryContainer.insertAdjacentHTML('beforeend', entryCard);

  e.target.title.value = '';
  e.target.body.value = '';

  const buttons = e.target.tagName;
  for (let i = 0; i < buttons.length; i++) { buttons[i].checked = false; }
};

const deleteEntryCard = async (event) => {
  if (event.target.tagName === 'BUTTON' && event.target.id === 'delete_btn') {
    const cardId = event.target.parentElement.dataset.id;

    const deleteMethod = {
      method: 'DELETE',
    };

    const response = await fetch(`http://localhost:7777/delete/${cardId}`, deleteMethod).catch(console.log);

    if (response.status === 200) {
      event.target.parentElement.remove();
    }
  }
};

const filterByTagId = (data, query) => data.filter((entry) => entry.id === Number(query) || entry['Tags.tagName'].toLowerCase() === query.toLowerCase());

const filterEntries = async (e) => {
  e.preventDefault();

  if (nothingFoundHeader) nothingFoundHeader.remove();

  const searchQuery = e.target.searchQuery.value;

  const searchMethod = {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };

  const response = await fetch('http://localhost:7777/search', searchMethod);
  const data = await response.json();

  const filteredData = filterByTagId(data, searchQuery);

  let html = '';

  if (filteredData.length === 0) {
    entryContainer.innerHTML = '';
    entryContainer.insertAdjacentElement('beforebegin', nothingFoundHeader);
  } else {
    filteredData.forEach((entry) => {
      html += `
      <div id="card" data-id=${entry.id} class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">${entry.title}</h5>
        <p class="mb-3 font-bold text-white-700">${entry.body}</p>
        <p class="mb-3 font-normal text-gray-700">${entry['Tags.tagName']}</p>
        <a href="/edit/${entry.id}" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
          Edit
          <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></svg>
        </a>
        <button id="delete_btn" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
        Delete
        <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
        </button>
      </div>
      `;
    });

    e.target.searchQuery.value = '';

    entryContainer.innerHTML = '';
    entryContainer.insertAdjacentHTML('beforeend', html);
  }
};

document.addEntryForm?.addEventListener('submit', addNewEntry);
document.searchForm?.addEventListener('submit', filterEntries);
entryContainer?.addEventListener('click', deleteEntryCard);
