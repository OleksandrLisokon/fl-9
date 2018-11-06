const template = `
<div class="container">
<header class="search-block">
  <form class="search-form">
    <label>Search by name:
      <input type="text" id="input" placeholder="Enter user name...">
    </label>
  </form>
</header>
<div class="table">
  <table class="users-table">
    <thead>
      <tr>
        <th>Photo</th>
        <th>Name</th>
        <th>Address</th>
        <th>Email</th>
        <th>Phone number</th>
        <th>Timezone</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody id="table-body">
    </tbody>
  </table>
</div>
<footer class="show-more">
  <p class="users-count">Displayed <span id="displayed"></span> out of <span id="of"></span></p>
  <button class="btn" id="showMore">Load more</button>
</footer>
</div>
`;

const root = document.querySelector('#root');
root.innerHTML = template;
const tableBody = document.querySelector('#table-body');

const renderList = (list, step) => {
    if (!list.length) {
        tableBody.innerHTML = 'No users found';
    } else {
        list.slice(0, step).forEach(el => {
            createElement(el);
        });
    }
};

function createElement(item) {
    const tmpl = `
    <tr class='user' data-id=${ item.id }>
        <td class='user-img'><img src=${ item.picture } alt='photo'></td>
        <td>${ item.name }</td>
        <td>${ item.location }</td>
        <td>${ item.email }</td>
        <td>${ item.phone }</td>
        <td>${ item.timezone }</td>
        <td><button class="btn-remove">Remove</button></td>
    </tr>`;

    tableBody.insertAdjacentHTML('beforeEnd', tmpl);
};

function getID(target) {
    return target.parentElement.dataset.id;
};

export {renderList, getID};
