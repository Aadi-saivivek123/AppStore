// Write your code here
import './index.css'
const AppItem = props => {
  const {eachAppDetails} = props
  const {appName, imageUrl} = eachAppDetails
  return (
    <li className="app-container">
      <img src={imageUrl} className="app-img" alt={appName} />
      <p className="paragraph-img">{appName}</p>
    </li>
  )
}
export default AppItem
