type RoomCardProps = {
  title?: string;
  image?: string;
  description?: string;
  roomCreator?: string | null;
  dataKey?: string;
};

const RoomCard = ({
  title,
  image,
  description,
  roomCreator,
  dataKey,
}: RoomCardProps) => {
  return (
    <>
      <img src={image} alt="" className="red circle" />
      <span className="title">{title}</span>
      <p>
        {description} <br />
        {roomCreator}
      </p>
      <a href="#!" className="secondary-content">
        <i className="material-icons">grade</i>
      </a>
    </>
  );
};

export default RoomCard;
