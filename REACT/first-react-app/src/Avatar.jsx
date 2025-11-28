// Avatar.jsx
export default function Avatar({ imgUrl, description }) {
  return (
    <>
      <img className="avatar" src={imgUrl} alt={description} />
      <p>{description}</p>
    </>
  );
}
