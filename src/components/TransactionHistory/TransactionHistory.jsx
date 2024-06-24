import './TransactionHistory.css'

const thStyles = {
    border:" black solid 1px",
    color: "white",
    backgroundColor: "black",
}

const tdStyles = {
    color: "black",
    border: "black solid 1px",
}

const trStyles = {
    backgroundColor: "index % 2 === 1 ? 'lightgrey' : 'white'" }

export const TransactionHistory = ({items}) => {
    return(
        <table style={{
            position: "relative",
            right: "20px",
            width: "600px",
            height: "100px",
            borderCollapse: "collaps",
            border: "black solid 1px",
        }}>
        <thead>
        <tr style={trStyles}>
            <th style={thStyles}>Type</th>
            <th style={thStyles}>Amount</th>
            <th style={thStyles}>Currency</th>
        </tr>
        </thead>
        <tbody>
        {items.map(({ id, type, amount, currency }) => (
                <tr key={id}>
                   <td style={tdStyles}>{type}</td>
                   <td style={tdStyles}>{amount}</td>
                   <td style={tdStyles}>{currency}</td>
                </tr>
                ))}
        </tbody>
        </table>
    )
}