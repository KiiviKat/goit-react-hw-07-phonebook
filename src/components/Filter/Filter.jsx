import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilterValue } from 'redux/selectors';
import { Label, Input } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(selectFilterValue);
  const dispatch = useDispatch();

  const onFilterInput = evt => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <Label htmlFor="">
      Find contacts by name:
      <Input type="text" value={filter} onChange={onFilterInput} />
    </Label>
  );
};
