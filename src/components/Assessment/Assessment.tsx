import style from './style.module.scss'

interface AssessmentProps {
    note: number
    assessmentNumber: number
}

export function Assessment({note, assessmentNumber}: AssessmentProps){
    return (
        <div className={style.container}>
            <span className={style.note}>
                {note}
            </span>

            <span className={style.assessmentNumber}>{assessmentNumber} {assessmentNumber!==1 ?'avaliações':'avaliação'}</span>
        </div>
    )
}