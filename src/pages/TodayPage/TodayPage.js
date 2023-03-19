import { HabitContainer, PageContainer, IconContainer, ConcludedText, Sequence } from "./styled"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { userContext } from "../../context/userContext"
import dayjs from "dayjs"
import 'dayjs/locale/pt-br'

export default function TodayPage() {

    const { token, URL } = useContext(userContext)
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    const [habitsList, setHabitsList] = useState([])
    const [doneUpdate, setDone] = useState(false)
    const weekday = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    const [habitConcludedText, setText] = useState("Nenhum hábito concluído ainda")
    const [allDone, setAllDone] = useState(false)

    useEffect(() => {
        console.log(habitsList)
        axios.get(`${URL}/habits/today`, config)
            .then((result) => {
                setHabitsList(result.data);
                concludedPercentage(result.data);
            })
            .catch((err) => {
                alert(err.response.data.message);
            });
    }, [doneUpdate])

    function concludedPercentage(list){
        setAllDone(false);
        if(list.length === 0 || list===undefined || list=== null) setText("Nenhum hábito concluído ainda")
        
        else {
            let doneQtd = 0;
            list.forEach(h => {
                if(h.done === true) doneQtd++;
            });
            const percentage = (doneQtd/list.length)*100;
            if(percentage > 0) {
                setText(`${percentage.toFixed(0)}% dos hábitos concluídos`)
                setAllDone(true);
            } else setText("Nenhum hábito concluído ainda");
            }   
    }

    function getDate() {
        const d = dayjs().day();
        let day = weekday[d];
        const dayMonth = dayjs().date();
        const monthYear = dayjs().month();

        return (`${day}, ${dayMonth}/${dayjs(`${monthYear+1}`).format("MM")} `)
    }

    function clickedCheck(id, done) {

        if (done === false) {
            axios.post(`${URL}/habits/${id}/check`, {}, config)
                .then((result) => {
                    setDone(!doneUpdate)
                }).catch((err) => {
                    alert(err.response.data.message)
                });
        } else {
            axios.post(`${URL}/habits/${id}/uncheck`, {}, config)
                .then((result) => {
                    setDone(!doneUpdate)
                }).catch((err) => {
                    alert(err.response.data.message)
                });
        }
    }



    return (
        <PageContainer>
            <h3 data-test="today">{getDate()}</h3>
            <ConcludedText data-test="today-counter" checkColor={allDone}> {habitConcludedText} </ConcludedText>

            {habitsList.length !== 0 && (
                (habitsList.map((h) => (
                    <HabitContainer data-test="today-habit-container" key={h.id}>
                        <div>
                            <h4 data-test="today-habit-name">{h.name}</h4>
                            <p data-test="today-habit-sequence">Sequência atual: <Sequence checkColor={h.done}>{h.currentSequence} dias</Sequence> </p>
                            <p data-test="today-habit-record">Seu recorde: <Sequence checkColor={(h.currentSequence === h.highestSequence)&&(h.highestSequence>0)} >{h.highestSequence} dias</Sequence> </p>
                        </div>

                        <IconContainer onClick={() => clickedCheck(h.id, h.done)} checkColor={h.done} data-test="today-habit-check-btn">
                            <ion-icon name="checkmark-sharp"></ion-icon>
                        </IconContainer>
                    </HabitContainer>
                ))
            ))}

        </PageContainer>
    )
}
