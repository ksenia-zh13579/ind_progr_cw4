import { useState } from 'react';
import "./Questionnaire.css";

function Questionnaire()
{
    const [result, setResult] = useState(0);

    const correctAnswers = {
        question1 : "both", 
        question2 : "Antananarivo", 
        question3 : "Randrianirina"
    };

    function handleSubmit(e)
    {
        e.preventDefault();

        setResult(0);

        let resultDisplay = document.querySelector(".result");
        resultDisplay.style.display = "block";

        const data = new FormData(e.target);

        for (const entry of data)
        {
            let elemChecked = e.target.querySelector(`input[name=${entry[0]}][value=${entry[1]}]`);
            if (entry[1] === correctAnswers[entry[0]])
            {
                setResult(result => result + 1);
                if (!elemChecked.classList.contains('radio-correct'))
                    elemChecked.classList.add('radio-correct');
            }
            else
            {
                if (!elemChecked.classList.contains('radio-wrong'))
                    elemChecked.classList.add('radio-wrong');
            }
        }
    }

    return (
        <form className="questionnaire" onSubmit={handleSubmit}>
            <fieldset>
                <legend>Мадагаскар - это:</legend>
                <div>
                    <input className="radio" type="radio" id="question11" name="question1" value="island" required/>
                    <label htmlFor="question11">Остров</label>
                </div>

                <div>
                    <input className="radio" type="radio" id="question12" name="question1" value="state" />
                    <label htmlFor="question12">Государство</label>
                </div>

                <div>
                    <input className="radio" type="radio" id="question13" name="question1" value="both" />
                    <label htmlFor="question13">И то, и другое</label>
                </div>
            </fieldset>
            <fieldset>
                <legend>Название столицы Мадагаскара:</legend>
                <div>
                    <input className="radio" type="radio" id="question21" name="question2" value="Brazzaville" required/>
                    <label htmlFor="question21">Браззавиль</label>
                </div>

                <div>
                    <input className="radio" type="radio" id="question22" name="question2" value="Antananarivo" />
                    <label htmlFor="question22">Антананариву</label>
                </div>

                <div>
                    <input className="radio" type="radio" id="question23" name="question2" value="Kinshasa" />
                    <label htmlFor="question23">Киншаса</label>
                </div>
            </fieldset>
            <fieldset>
                <legend>Фамилия действующего президента Мадагаскара:</legend>
                <div>
                    <input className="radio" type="radio" id="question31" name="question3" value="Randrianirina" required/>
                    <label htmlFor="question31">Рандрианирина</label>
                </div>

                <div>
                    <input className="radio" type="radio" id="question32" name="question3" value="Qirarana" />
                    <label htmlFor="question32">Цирарана</label>
                </div>

                <div>
                    <input className="radio" type="radio" id="question33" name="question3" value="Rainilayarivuni" />
                    <label htmlFor="question33">Райнилайаривуни</label>
                </div>
            </fieldset>
            <button type="submit">Показать результат</button>
            <div className="result">
                <h2>Результат:</h2>
                <p>{result} правильных ответ(а) из 3-х</p>
            </div>
        </form>
    );
}

export default Questionnaire;