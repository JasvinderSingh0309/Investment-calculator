

export default function Input({title, val, onValueChange}) {
  return <p>
    <label>{title}</label>
    <input type="number" onChange={(e) => {onValueChange(title, e.target.value)}} value={val} required/>
  </p>
}