import './index.css'

const TabItem = props => {
  const {isActive, updateTabId, tabDetails} = props
  const {tabId, displayText} = tabDetails

  const onClickBtn = () => {
    updateTabId(tabId)
  }

  const active = isActive ? 'active-tab' : ''

  return (
    <li className="list-item">
      <button
        onClick={onClickBtn}
        type="button"
        className={`tab-btn ${active}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
