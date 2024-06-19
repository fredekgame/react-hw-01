import './TransactionHistory.css'


export const TransactionHistory = ({items}) => {
    return(
        <table>
        <thead>
        <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
        </tr>
        </thead>
        <tbody>
        {items.map(({ id, type, amount, currency }) => (
                <tr key={id}>
                   <td>{type}</td>
                   <td>{amount}</td>
                   <td>{currency}</td>
                </tr>
                ))}
        <tr>
        </tr>
        <tr>
            <td>Withdrawal</td>
            <td>85</td>
            <td>USD</td>
        </tr>
        </tbody>
        </table>
    )
}