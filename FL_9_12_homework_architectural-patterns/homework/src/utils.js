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


export {template};
