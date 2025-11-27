import "./Questionnaire.css";

function Questionnaire()
{
    return (
        <form className="questionnaire">
            <fieldset>
                <legend>Мадагаскар - это:</legend>
                <input type="radio" id="question11" name="question1" value="island" />
                <label htmlFor="question11">Остров</label>

                <input type="radio" id="question12" name="question1" value="state" />
                <label htmlFor="question12">Государство</label>

                <input type="radio" id="question13" name="question1" value="both" />
                <label htmlFor="question13">И то, и другое</label>
            </fieldset>
        </form>
    );
}

export default Questionnaire;