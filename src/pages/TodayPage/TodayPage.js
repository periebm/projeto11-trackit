import { HabitContainer, PageContainer, IconContainer } from "./styled"
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
    const [habitsList, setHabitsList] = useState([""])
    const [doneList, setDone] = useState([])
    const weekday = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];


    useEffect(() => {
        axios.get(`${URL}/habits/today`, config)
            .then((result) => {
                setHabitsList(result.data)
            })
            .catch((err) => {
                alert(err.response.data.message)
            });
    }, [doneList])

    function getDate() {
        const d = new Date();
        let day = weekday[d.getDay()];
        const dayMonth = dayjs().date();
        const monthYear = dayjs().month();

        return (`${day}, ${dayMonth}/${dayjs(`${monthYear}`).format("MM")} `)
    }

    function clickedCheck(id, done) {
        
        if (done === false) {
            axios.post(`${URL}/habits/${id}/check`,{}, config)
                .then((result) => {
                    const newDoneList = [...doneList, id]
                    setDone(newDoneList);
                }).catch((err) => {
                    alert(err.response.data.message)
                });
        } else {
            axios.post(`${URL}/habits/${id}/uncheck`,{}, config)
                .then((result) => {
                    const newDoneList = doneList.filter(i => i !== id)
                    setDone(newDoneList);
                }).catch((err) => {
                    alert(err.response.data.message)
                });
        }
    }

    return (
        <PageContainer>
            <h3 data-test="today">{getDate()}</h3>
            <h4 data-test="today-counter">Nenhum hábito concluído ainda</h4>

            {habitsList.map((h) => (
                <HabitContainer data-test="today-habit-container" key={h.id}>
                    <div>
                        <h4 data-test="today-habit-name">{h.name}</h4>
                        <p data-test="today-habit-sequence">Sequência atual: {h.currentSequence} dias </p>
                        <p data-test="today-habit-record">Seu recorde: {h.highestSequence} dias</p>
                    </div>

                    <IconContainer onClick={() => clickedCheck(h.id, h.done)} checkColor={habitsList.includes(h.id)} data-test="today-habit-check-btn">
                        <ion-icon name="checkmark-sharp"></ion-icon>
                    </IconContainer>
                </HabitContainer>
            ))}
        </PageContainer>
    )
}
