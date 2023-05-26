export default function Quote({quote: {text, author}}) {
  return (
    <div className="Quote">
      {text} - {author}
    </div>
  )
}