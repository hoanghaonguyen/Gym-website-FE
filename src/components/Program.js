import React from 'react'
import { FaCrown } from 'react-icons/fa'
import SectionHeader from './SectionHeader'
import { programs } from '../data'
import Card from '../UI/Card'
import { Link } from 'react-router-dom'
import { AiFillCaretRight } from 'react-icons/ai'


const Program = () => {
  return (
    <section className='program'>
      <div className='container programs-container'>
        <SectionHeader icon={<FaCrown />} title='Programs' />

        <div className='programs-wrapper'>
          {
            programs.map((program) => {
              const { id, icon, title, info, path } = program
              return (
                <Card className="programs__program" key={id} >
                  {/* children */}
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{info}</small>
                  <Link to={path} className='btn sm'>Learn More <AiFillCaretRight /></Link>
                </Card>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Program