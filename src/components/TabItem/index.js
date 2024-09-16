// Write your code here
import './index.css'
const TabItem = props => {
  const {eachDetails, selectItem, activeStyle} = props
  const {tabId, displayText} = eachDetails
  const tabItem = () => {
    selectItem(tabId)
  }
  const styling = activeStyle ? 'active-btn' : ''
  const styling1 = activeStyle ? 'active-btn1' : ''
  return (
    <li className="tab-container">
      <button className="tabs" onClick={tabItem}>
        <p className={`list-Item ${styling1}`}>{displayText}</p>
      </button>
      <hr className={`horizontal-line ${styling}`} />
    </li>
  )
}
export default TabItem
