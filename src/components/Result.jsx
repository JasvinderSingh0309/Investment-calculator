import { formatter } from "../util/investment";


export default function Result({resultArray}) {
  let initialInvestment = resultArray[0].valueEndOfYear - resultArray[0].interest - resultArray[0].annualInvestment; 

  return <tbody>
    {resultArray.map((e,i) => <tr key={i}>
      <td>{e.year}</td>
      <td>{formatter.format(e.valueEndOfYear)}</td>
      <td>{formatter.format(e.interest)}</td>
      <td>{formatter.format((e.valueEndOfYear - e.annualInvestment * e.year - initialInvestment))}</td>
      <td>{formatter.format(e.valueEndOfYear-(e.valueEndOfYear - e.annualInvestment * e.year - initialInvestment))}</td>
    </tr>)}
  </tbody>
}