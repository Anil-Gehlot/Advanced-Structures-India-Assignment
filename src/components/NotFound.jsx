import { Link, useLocation } from 'react-router-dom'

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

export default function NotFound() {
  const location = useLocation()

  return (
    <div className="page notFoundPage">
      <div className="notFoundCard">
        <h1 className="pageTitle notFoundTitle">Page not found</h1>
        <p className="pageSubtitle notFoundSubtitle">
          No route matches <strong className="notFoundPath">{location.pathname}</strong>
        </p>
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
