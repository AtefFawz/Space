export default function PageIntro({ number, eyebrow, title }) {
  return (
    <div className="page-intro">
      <p className="eyebrow"><span className="intro-number">{number}</span>{eyebrow}</p>
      <h1>{title}</h1>
    </div>
  );
}
