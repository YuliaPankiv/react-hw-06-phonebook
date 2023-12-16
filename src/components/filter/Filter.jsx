import { useDispatch } from 'react-redux';
import { TextField } from '@mui/material';
import { filterValue } from '../../redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <TextField
      id="standard-basic"
      label="Filter"
      variant="standard"
      name="filter"
      onChange={e => {
        dispatch(filterValue(e.target.value));
      }}
    />
  );
};

export default Filter;
