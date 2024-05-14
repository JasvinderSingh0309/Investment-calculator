
export default function Result({resultArray}) {
  return <tbody>
    <tr>
      {resultArray.map((e,i) => <td key={i}>{e}</td>)}
    </tr>
  </tbody>
}