import React from 'react'
import { Link } from 'react-router-dom'

function Panel(Props) {
  const { title, description, price, published, _id } = Props.title
  return (
    <Link to={`/course/${_id}`} style={{color:"white"}}>
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
    </Link>
  )
}

export default Panel