import { useEffect, useState, useContext } from "react"
import { AddHabitContainer, WeekdaysContainer, DaysButton, SaveCancelButtonsContainer } from "./styled"
import { ThreeDots } from 'react-loader-spinner'
import axios from "axios"
import { userContext } from "../../context/userContext"
import { weekDays } from "../../constants/constants"


export default function AddHabit({ setAddFlag, selectedDays, daysSelection, setSelectedDays }) {
    const [name, setName] = useState("")
    const [loading, setLoading] = useState(false)
    const { token, URL } = useContext(userContext)

    function saveHabit(e) {
        e.preventDefault()

        setLoading(true)
        axios.post(
            `${URL}/habits`,
            {
                name: name,
                days: selectedDays
            },
            {
                headers: { Authorization: `Bearer ${token}` }
            }
        )
            .then((result) => {
                setAddFlag(false)
                setSelectedDays([])
                setLoading(false);
            })
            .catch((err) => {
                alert(err.response.data.message)
                setLoading(false);
            });
    }

    function loadDots() {
        if (loading === true) {
            return (
                <ThreeDots
                    height="50"
                    width="50"
                    radius="9"
                    color="white"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />
            )
        }

        return "Salvar"
    }


    return (
        <AddHabitContainer data-test="habit-create-container">
            <form onSubmit={saveHabit}>
                <input
                    data-test="habit-name-input"
                    placeholder="nome do hábito"
                    type="text"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                    disabled={loading}
                >
                </input>

                <WeekdaysContainer>
                    {weekDays.map((d, i) => (
                        <DaysButton
                            data-test="habit-day"
                            onClick={() => (daysSelection(i))}
                            daySelected={selectedDays.includes(i)}
                            key={i}
                            disabled={loading}
                            type="button">
                            {d}
                        </DaysButton>))}
                </WeekdaysContainer>

                <SaveCancelButtonsContainer>
                    <span data-test="habit-create-cancel-btn" onClick={() => { setAddFlag(false); setSelectedDays([]); }}>Cancelar</span>
                    <button data-test="habit-create-save-btn" type="submit">{loadDots()}</button>
                </SaveCancelButtonsContainer>
            </form>
        </AddHabitContainer>
    )
}

//selectedDays.includes(i)