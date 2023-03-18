import { HabitContainer, PageContainer, IconContainer } from "./styled"

export default function TodayPage() {


    return (
        <PageContainer>
            <h3>Segunda, 17/05</h3>
            <h4>Nenhum hábito concluído ainda</h4>

            <HabitContainer>
                <div>
                    <h4>Ler 1 capítulo de livro</h4>
                    <p>Sequência atual: 3 dias </p>
                    <p>Seu recorde: 5 dias</p>
                </div>
                <IconContainer>
                    <ion-icon name="checkmark-sharp"></ion-icon>
                </IconContainer>
            </HabitContainer>

            <HabitContainer>
                <div>
                    <h4>Ler 1 capítulo de livro</h4>
                    <p>Sequência atual: 3 dias </p>
                    <p>Seu recorde: 5 dias</p>
                </div>
                <IconContainer>
                    <ion-icon name="checkmark-sharp"></ion-icon>
                </IconContainer>
            </HabitContainer>


        </PageContainer>
    )
}