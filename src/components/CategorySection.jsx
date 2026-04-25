import ProductCard from './ProductCard.jsx'

export default function CategorySection({ categoryName, items }) {
  return (
    <section className="categorySection">
      <div className="categoryHeader">
        <h2 className="categoryTitle">{categoryName}</h2>
      </div>

      <div className="cardGrid">
        {items.map((item) => (
          <ProductCard key={`${item.category}-${item.itemname}`} item={item} />
        ))}
      </div>
    </section>
  )
}

