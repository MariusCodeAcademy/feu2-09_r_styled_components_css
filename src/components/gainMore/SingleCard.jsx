import { Icon } from '../styled/UI.styled';

function SingleCard(props) {
  return (
    <li className={0}>
      <Icon icon={props.icon} />
      <h3 className={0}>{props.title}</h3>
      <p className='text'>{props.text}</p>
    </li>
  );
}
export default SingleCard;
