```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js
function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is the about page.</p>
    </div>
  );
}

export default About;
```
The solution here was to double-check the file structure and paths to ensure that the link is indeed correctly referring to the about page.  This is often a simple oversight, easily resolved by verifying the file path and the `href` prop in the Link component.