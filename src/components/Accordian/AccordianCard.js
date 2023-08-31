import React, { useState } from 'react'
import styles from './Accordian.module.css'
import { BiDownArrow, BiUpArrow } from 'react-icons/bi'

const AccordianCard = ({ ques, ans }) => {
    const [show, setShow] = useState(false)
    return (
        <div className={styles.accCard}>
            <div className={styles.accQues} onClick={() => setShow(!show)}>
                <div className={styles.accQuesText}>{ques}</div>
                <div className={styles.accQuesIcon}>{show ? <BiUpArrow /> : <BiDownArrow />} </div>
            </div>
            {show && <div className={styles.accAns}>{ans}</div>}
        </div>
    )
}

export default AccordianCard