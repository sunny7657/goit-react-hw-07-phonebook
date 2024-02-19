import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filter-slice';

export const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        placeholder="Find contact"
        onChange={changeFilter}
      ></input>
    </label>
  );
};
