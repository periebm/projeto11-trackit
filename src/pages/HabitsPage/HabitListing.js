import { DaysButton, WeekdaysContainer, HabitContainer } from "./styled"
import { weekDays } from "../../constants/constants"


export default function HabitListing({habitsList}) {
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


                    <ion-icon name="trash-outline"></ion-icon>
                </HabitContainer>
            ))
        }
        </>
    )
}