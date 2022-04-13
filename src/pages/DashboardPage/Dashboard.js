import { Link } from 'react-router-dom';

export default function Dashboard(props) {
  const { stocks, getStock } = props;
  return (
    <table className='Dashboard table'>
      <tr>
        <th className='table-header'>Company</th>
        <th className='table-header'>Price</th>
        <th className='table-header'>Change</th>
      </tr>
      {stocks.map((stock, i) => {
        return(
          <>
            <tr>
              <td className='company column'><Link to={`/stocks/${stock.symbol}`}>{stock.name} ({stock.symbol})</Link></td>
              <td className='price column'>{stock.lastPrice}</td>
              <td className='change column'>{stock.change}</td>
            </tr>
          </>
        );
      })
      }
    </table>
  );
}