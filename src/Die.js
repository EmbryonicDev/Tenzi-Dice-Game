
export default function Die(props) {
  return (
    <div
      className="die"
      style={{ background: props.isHeld ? '#59E391' : '#FFFFFF' }}
    >
      {props.value}
    </div>
  )
}