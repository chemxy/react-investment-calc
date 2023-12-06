import { calculateInvestmentResults } from "../util/investment";

export default function Results({input}) {

    // console.log(input);

    const results = calculateInvestmentResults(input);
    // console.log(results);
    const initialInvestment = results[0].valueEndOfYear - results[0].annualInvestment - results[0].interest;
    // console.log(initialInvestment)
    return (
        <table id="result">
            <thead>
            <tr>
                <th>Year</th>
                <th>Value end of year</th>
                <th>Year earned</th>
                <th>total earned</th>
                <th>Total amount invested</th>
            </tr>
            </thead>
            <tbody>
            {results.map((item) => {

                const totalInterest = item.valueEndOfYear - item.annualInvestment * item.year - initialInvestment;
                const totalAmountInvested = initialInvestment + item.annualInvestment * item.year;
                return (
                    <tr key={item.year}>
                        <td>{item.year}</td>
                        <td>{item.valueEndOfYear.toFixed(2)}</td>
                        <td>{item.interest.toFixed(2)}</td>
                        <td>{totalInterest.toFixed(2)}</td>
                        <td>{totalAmountInvested.toFixed(2)}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )

}