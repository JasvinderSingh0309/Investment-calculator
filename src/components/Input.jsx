

export default function Input({title, val}) {
  return <p>
    <label>{title}</label>
    <input type="number" onChange={() => {console.log("Jasvinder")}} value={val} required/>
  </p>
}