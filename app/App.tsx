import image from './img.png' // `image` will be '/assets/img.2d8efhg.png' in production
 
export default function App() {
  return <img alt="img" src={image.src} />
}
