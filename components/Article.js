export function Article({ title, children }) {
  return <>
    <article>
      <h2>{title}</h2>
      {children}
      {/* Note : 자식 content 가져오는 children */}
    </article>
  </>;
}
