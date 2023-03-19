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

    dayjs.locale('pt-br')
    let updateLocale = require('dayjs/plugin/updateLocale')
    dayjs.extend(updateLocale)
    dayjs.updateLocale('pt-br', {
        weekdays: [
            "Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado" 
        ]
    })

    useEffect(() => {
        axios.get(`${URL}/habits/today`, config)
            .then((result) => {
                setHabitsList(result.data)
            })
            .catch((err) => {
                alert(err.response.data.message)
            });

    }, [])

    function getDate() {
        const dayWeek = dayjs().day();
        console.log(dayWeek)
        const dayMonth = dayjs().date();
        const monthYear = dayjs().month();

/*      const dayWeek = dayjs(dayjs().day()).format("dddd");
        const dayMonth = dayjs(dayjs().date()).format("DD");
        const monthYear = dayjs(dayjs().month()).format("MM"); */



        return(`${dayjs(`0`).format("dddd")}, ${dayMonth}/${dayjs(`${monthYear}`).format("MM")} `)
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

                    <IconContainer data-test="today-habit-check-btn">
                        <ion-icon name="checkmark-sharp"></ion-icon>
                    </IconContainer>
                </HabitContainer>
            ))}


        </PageContainer>
    )
}
//{dayjs().day()}, {dayjs().date()}/{dayjs().month()}