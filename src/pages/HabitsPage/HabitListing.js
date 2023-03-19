import { DaysButton, WeekdaysContainer, HabitContainer } from "./styled"
import { weekDays } from "../../constants/constants"
import axios from "axios"
import { userContext } from "../../context/userContext"
import { useContext } from "react"

export default function HabitListing({ habitsList, deleteFlag, setDeleteFlag }) {
    const { token, URL } = useContext(userContext)

    function deleteHabit(id) {
        const deleteConfirm = window.confirm("Você tem certeza que quer deletar este hábito?")
        if (deleteConfirm) {
            deleteRequest(id)
        } else return
    }

    function deleteRequest(id) {
        axios.delete(`${URL}/habits/${id}`, { headers: { Authorization: `Bearer ${token}` } })
            .then((result) => {
                setDeleteFlag(!deleteFlag);
            })
            .catch((err) => {
                alert(err.response.data.message)
            });
    }

    return (
        <>
            {
                habitsList.map((h) => (
                    <HabitContainer data-test="habit-container" key={h.id}>
                        <h4 data-test="habit-name">{h.name}</h4>


                        {h.days !== undefined &&
                            <WeekdaysContainer>
                                {weekDays.map((d, i) => (
                                    <DaysButton
                                        data-test="habit-day"
                                        daySelected={(h.days).includes(i)}
                                        key={i}
                                    >
                                        {d}
                                    </DaysButton>))}
                            </WeekdaysContainer>}

                        <ion-icon data-test="habit-delete-btn" onClick={() => deleteHabit(h.id)} name="trash-outline"></ion-icon>
                    </HabitContainer>
                ))
            }
        </>
    )
}