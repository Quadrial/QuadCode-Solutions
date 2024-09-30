import React from 'react'
import { Routes, Route  } from 'react-router-dom'
import { Portfolio } from '../Portfolio/Portfolio'

export const Router = () => {
  return (
    <div>
        <Routes>
            <Route path='/' Component={Portfolio} />
        </Routes>
    </div>
  )
}
