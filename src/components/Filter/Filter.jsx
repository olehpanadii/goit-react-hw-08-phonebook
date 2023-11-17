import { useDispatch, useSelector } from 'react-redux';
import { FilterWrapper } from './Filter.styled';
import { filteredContacts } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <FilterWrapper>
      <label>Find contact by name</label>
      <input
        type="text"
        value={filter}
        onChange={evt => {
          dispatch(filteredContacts(evt.target.value));
        }}
        placeholder="Search contact"
      />
    </FilterWrapper>
  );
};
