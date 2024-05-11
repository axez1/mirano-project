export const ListType = (categories) => (
  <ul class="filter__type-list">
    {categories.map(category => (
      <li class="filter__class-item">
        <button type="button" class="filter__button">{category}</button>
      </li>
    ))}
  </ul>
);  