import { Link } from 'react-router-dom'
import '../assets/styles/components/Card.scss'

export interface CardProps {
  title: string
  paragraphText: string
  link?: string
  linkText?: string
  shadow?: boolean
  color: string
}

export const Card = ({ title, paragraphText, link, linkText, shadow = false, color }: CardProps) => {
  return (
    <article className={['article', shadow ? 'card' : '', color ? color : ''].join(' ')}>
      <h3 className="title">{title}</h3>
      <p>{paragraphText}</p>
      {link != undefined && linkText != undefined && (
        <Link to={link} className={['button-card', color ? 'btn-white' : ''].join(' ')}>
          {linkText}
        </Link>
      )}
    </article>
  )
}
