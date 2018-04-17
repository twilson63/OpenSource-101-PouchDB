import { html, render } from 'lit-html'
export default (title, body) =>
  render(
    html`
    <div class="pa4 avenir green">
      <h1>PouchDB Demo</h1>
      <h2>${title}</h2>
      <pre>${JSON.stringify(body, null, 2)}</pre>
    </div>
    `,
    document.getElementById('app')
  )
