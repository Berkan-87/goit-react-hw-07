import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <input
      type="text"
      value={filter}
      onChange={(e) => dispatch(changeFilter(e.target.value))}
      placeholder="Search contacts"
    />
  );
};

export default SearchBox;

