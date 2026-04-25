import { Link } from 'react-router-dom'
import { products } from '../data/products.js'

export default function ProductCard({ item }) {
  const index = products.indexOf(item)
  const id = index >= 0 ? index + 1 : null
  const to = id ? `/product/${id}` : '/'

  return (
    <Link className="productCard" to={to}>
      <div className="productImageWrap">
        <img className="productImage" src={item.image} alt={item.itemname} />
      </div>
      <div className="productInfo">
        <div className="productName">{item.itemname}</div>
      </div>
    </Link>
  )
}

