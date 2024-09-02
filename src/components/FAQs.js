import React from 'react'
import { FaQuestion } from 'react-icons/fa'
import {faqs} from '../data'
import FAQ from './FAQ'
import SectionHeader from './SectionHeader'
const FAQs = () => {
  return (
    <section className='faqs'>
        <div className='container faqs__container'>
            <SectionHeader icon={<FaQuestion/>} title='FAQs'/>
            <div className='faqs__wrapper'>
                {
                    faqs.map((faq) => {
                        const {id, question, answer} = faq
                        return (
                            <FAQ key={id} question={question} answer={answer}/>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default FAQs