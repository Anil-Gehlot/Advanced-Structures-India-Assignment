import { Link, useParams } from 'react-router-dom'
import { getProductByRouteId } from '../data/products.js'

function BackIcon() {
  return (
    <svg
      className="backButtonIcon"
      viewBox="0 0 24 24"
      width="18"
      height="18"
      role="presentation"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M15 5l-7 7 7 7"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function ProductDetails() {
  const { id } = useParams()
  const found = getProductByRouteId(id)

  if (!found) {
    return (
      <div className="page notFoundPage">
        <div className="notFoundCard">
          <h1 className="pageTitle notFoundTitle">Product not found</h1>
          <p className="pageSubtitle notFoundSubtitle">Invalid product id: {id}</p>
          <div className="notFoundActions">
            <Link className="backButton" to="/">
              <BackIcon />
              <span className="backButtonLabel">Back to catalog</span>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const { product } = found

  return (
    <div className="page">
      <div className="detailsToolbar">
        <Link className="backButton" to="/">
          <BackIcon />
          <span className="backButtonLabel">Back to catalog</span>
        </Link>
      </div>

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
        </div>
      </div>
    </div>
  )
}

