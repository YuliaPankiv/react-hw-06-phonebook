import { useDispatch } from 'react-redux';
import { TextField } from '@mui/material';
// import { selectFilter } from '../../redux/selectors';
import { filterValue } from '../../redux/filterSlice';

const Filter = () => {
  // const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <TextField
      id="standard-basic"
      label="Filter"
      variant="standard"
      name="filter"
      // value={filter}
      onChange={e => {
        dispatch(filterValue(e.target.value));
      }}
    />
  );
};

export default Filter;
