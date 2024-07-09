import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="px-4">
      <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">
          Esol Group
        </a>
        <span className="ms-1">&copy; 2024 knights tm.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://knightsit.com" target="_blank" rel="noopener noreferrer">
          Knights IT Team
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
