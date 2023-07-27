import React from 'react'

function Panel(Props) {
  const { title, description, price, published } = Props.title
  return (
    
    <div className="card">
    
    <img 
        src="https://media.licdn.com/dms/image/D4D12AQG74js_ObLqSg/article-cover_image-shrink_423_752/0/1686204241869?e=1695859200&v=beta&t=ZfQ76c2lUavlJpV70phEISX493R5MG5sN3GdVnW_l-U" 
        className="card--image" 
    />
    <div className="card--stats">
        <img src="star.png" className="card--star" />
        <span>4</span>
        <span className="gray">(33) • </span>
        <span className="gray"> online</span>
    </div>
    <p className="card--title">{title}</p>
    <p className="card--price">
        <span className="bold">From Rs{price}</span> / person
    </p>
</div>
  )
}
// function Show(props) {
//   const { title, description, price, published } = props.title

//   return <div>
//     <h1>title - {title}</h1>
//     <p>description - {description}</p>
//     <p>price - {price}</p>
//     <p>published - {published}</p>
//   </div>
// }

export default Panel