import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';

const FAQ = (props) => {
    const {question, answer} = props;
    const [isAnswerShowing, setIsAnswerShowing] = useState(false);
    // if isAnswerShowing is true, show the answer
    // else => hide the answer
    const toggleAnswer = () => {
        setIsAnswerShowing(!isAnswerShowing);
    }
  return (
    <article className='faq' onClick={() => setIsAnswerShowing(prev=> !prev)}>
        <div>
            <h4>{question}</h4>
            <button className='faq__icon'>
                {
                    isAnswerShowing ? <AiOutlineMinus/> : <AiOutlinePlus />
                }
            </button>
        </div>
        {isAnswerShowing && <p>{answer}</p>}
    </article>
  )
}

export default FAQ