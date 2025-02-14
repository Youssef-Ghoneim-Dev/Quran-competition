import React from "react";
export default function QuestionComponent({ Question, QuestionNumber, openIndex, setOpenIndex, index }) {
    const getOrderText = (number) => {
        const orders = ["الأول", "الثاني", "الثالث", "الرابع", "الخامس", "السادس", "السابع", "الثامن", "التاسع", "العاشر",
            "الحادي عشر", "الثاني عشر", "الثالث عشر", "الرابع عشر", "الخامس عشر", "السادس عشر", "السابع عشر", "الثامن عشر", "التاسع عشر", "العشرون"];
            return orders[number - 1];
    };
        
    
    const handleToggle = () => {
        setOpenIndex(openIndex === index ? null : index);
    };
    
    return (
        <div className="Question">
            <h2>: السؤال {" " + getOrderText(QuestionNumber)}</h2>
            <div className="Question-Text">
                <div className="Question-Text-flex">
                    <p>({Question.EndSurah + " " + Question.EndAya})</p>
                    <h4>إلي قوله تعالي : (<span>{Question.End}</span>)</h4>
                </div>
                <div className="Question-Text-flex">
                    <p>({Question.StartSurah + "      " + Question.StartAya})</p>
                    <h4>من قوله تعالي : (<span>{Question.Start}</span>)</h4>
                </div>
            </div>
            <div className="Answer" onClick={handleToggle}>
                <i className={openIndex === index ? "bx bxs-up-arrow":"bx bxs-down-arrow"}></i>
                <h2>الإجابة</h2>
            </div>
            {openIndex === index && (
                <div className="Answer-Text">
                    <h4>{Question.Text}</h4>
                </div>
            )}
        </div>
    );
}
