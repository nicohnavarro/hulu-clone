import urls from '../utils/request';

export default function Nav() {
  return (
    <nav>
      <div>
        {urls.map((url)=>

        <p key={url.title}>{url.title}</p>
        )}
      </div>
    </nav>
  )
}
