import { AddContainer, PageContainer, AddHabitContainer, WeekdaysContainer, HabitContainer, SaveCancelButtonsContainer} from "./styled"
<h3>Meus habitos</h3>   
export default function HabitsPage() {
    return (
        <>
            <PageContainer>
                <AddContainer>
                    <h3>Meus hábitos</h3>            
                    <button>+</button>
                </AddContainer>
                
                <AddHabitContainer>
                    <input placeholder="nome do hábito"></input>
                    <WeekdaysContainer>
                        <button>D</button>
                        <button>S</button>
                        <button>T</button>
                        <button>Q</button>
                        <button>Q</button>
                        <button>S</button>
                        <button>S</button>
                    </WeekdaysContainer>

                    <SaveCancelButtonsContainer>
                        <span>Cancelar</span>
                        <button>Salvar</button>
                    </SaveCancelButtonsContainer>
                </AddHabitContainer>

                <HabitContainer>
                <h4>Ler 1 capítulo de livro</h4>
                
                <WeekdaysContainer>
                        <button>D</button>
                        <button>S</button>
                        <button>T</button>
                        <button>Q</button>
                        <button>Q</button>
                        <button>S</button>
                        <button>S</button>
                    </WeekdaysContainer>
                    <ion-icon name="trash-outline"></ion-icon>
                </HabitContainer>


                <p> Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear! </p>
            </PageContainer>
        </>
    )
}