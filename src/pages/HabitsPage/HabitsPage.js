import { AddContainer, PageContainer } from "./styled"
import { useContext, useEffect, useState } from "react"
import { userContext } from "../../context/userContext"
import axios from "axios"
import AddHabit from "./AddHabit"
import HabitListing from "./HabitListing"

export default function HabitsPage() {
    const { token, URL } = useContext(userContext)
    const [habitsList, setHabitsList] = useState([""])
    const [addHabitFlag, setAddFlag] = useState(false);
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }
    const [selectedDays, setSelectedDays] = useState([]);
    const [deleteFlag, setDeleteFlag] = useState(false);


    useEffect(() => {
        axios.get(`${URL}/habits`, config)
            .then((result) => {
                setHabitsList(result.data)
            })
            .catch((err) => {
                alert(err.response.data.message)
            });

    }, [addHabitFlag, deleteFlag])


    function daysSelection(i) {
        if (selectedDays.includes(i)) {
            const newSelectedDays = selectedDays.filter(day => day !== i)
            setSelectedDays(newSelectedDays)
        } else {
            const newSelectedDays = [...selectedDays, i]
            setSelectedDays(newSelectedDays)
        }
    }

    return (
        <>
            <PageContainer>
                <AddContainer>
                    <h3>Meus hábitos</h3>
                    <button data-test="habit-create-btn" onClick={() => setAddFlag(true)}>+</button>
                </AddContainer>

                {addHabitFlag && (<AddHabit
                    setAddFlag={setAddFlag}
                    daysSelection={daysSelection}
                    selectedDays={selectedDays}
                    setSelectedDays={setSelectedDays}
                />)}

                <HabitListing
                    habitsList={habitsList}
                    setDeleteFlag={setDeleteFlag}
                    deleteFlag={deleteFlag}
                />

                {habitsList.length === 0 && (<p> Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>)}

            </PageContainer>
        </>
    )
}