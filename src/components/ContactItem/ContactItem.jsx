import { BtnDeleteStyled } from 'components/Button/Button.styled';
import { useDispatch } from 'react-redux';
import { deleteContactOperation } from '../../redux/contacts-operations';

export const ContactItem = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();

  return (
    <li name="contact">
      {name}: {number}
      <BtnDeleteStyled
        onClick={() => dispatch(deleteContactOperation(id))}
        type="button"
      >
        Delete
      </BtnDeleteStyled>
    </li>
  );
};
