import React from 'react'

import Notas from '../containers/notas-container'

const AppRoot = props => (
  <div className='acc-container'>
    <Header />
    <div className="acc-content">
      <div className="acc-content-wrapper">
        <Search />
        <Notas />
      </div>
    </div>
  </div>
)

export default AppRoot
