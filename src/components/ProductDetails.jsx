import { Link, useParams } from 'react-router-dom'
import { getProductByRouteId } from '../data/products.js'

export default function ProductDetails() {
  const { id } = useParams()
  const found = getProductByRouteId(id)

  if (!found) {
    return (
      <div className="page">
        <header className="pageHeader">
          <h1 className="pageTitle">Product not found</h1>
          <p className="pageSubtitle">Invalid product id: {id}</p>
        </header>
        <Link className="link" to="/">
          ← Back to home
        </Link>
      </div>
    )
  }

  const { product } = found

  return (
    <div className="page">
      <header className="pageHeader">
        <h1 className="pageTitle">{product.itemname}</h1>
        <p className="pageSubtitle">{product.category}</p>
      </header>

      <div className="detailsLayout">
        <div className="detailsImageWrap">
          <img className="detailsImage" src={product.image} alt={product.itemname} />
        </div>

        <div className="detailsPanel">
          <div className="propsList">
            {product.itemprops.map((p) => (
              <div className="propRow" key={`${p.label}-${p.value}`}>
                <div className="propLabel">{p.label}</div>
                <div className="propValue">{p.value}</div>
              </div>
            ))}
          </div>

          <Link className="link" to="/">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}

