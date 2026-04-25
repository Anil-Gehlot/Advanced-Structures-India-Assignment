import CategorySection from './CategorySection.jsx'
import { products } from '../data/products.js'


console.log(products.length)
// It takes the full products list and groups items by their category (Cars, Phones, Bikes, Computers) 
// so the Home page can render separate sections per category.
// it will return categories as keys and all items as values in an array.
function groupByCategory(items) {
  const map = new Map()
  for (const item of items) {
    const key = item.category || 'Other'
    if (!map.has(key)) map.set(key, [])
    map.get(key).push(item)
  }
  return map
}


export default function Home() {
  const byCategory = groupByCategory(products)

  return (
    <div className="page">
      <header className="pageHeader">
        <h1 className="pageTitle">Catalog</h1>
        <p className="pageSubtitle">Choose a product to view details.</p>
      </header>

      <div className="categoryList">
        {Array.from(byCategory.entries()).map(([categoryName, items]) => (
          <CategorySection
            key={categoryName}
            categoryName={categoryName}
            items={items}
          />
        ))}
      </div>
    </div>
  )
}

