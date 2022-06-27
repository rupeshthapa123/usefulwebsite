import Button from "./Button";
/**
 * It returns a div with a heading, a subheading, and three buttons. 
 * 
 * The buttons are created using the Button component. 
 * 
 * The Button component takes two props: name and link. 
 * 
 * The name prop is used to display the name of the button. 
 * 
 * The link prop is used to open the link when the button is clicked. 
 * 
 * The Button component is defined in the Button.js file. 
 * 
 * Let's take a look at the Button.js file.
 * @returns The return statement is used to return from a function i.e. break out of the function. If
 * the expression is omitted, undefined is returned instead.
 */
const App = ()=> {
    return <div>
    <h1>Useful Website</h1>
    <h3>Which website do you want to open?</h3>
    <Button name="Google" link="https://google.com"/>
    <Button name="Facebook" link="https://facebook.com"/>
    <Button name="Youtube" link="https://youtube.com"/>
    <br></br>
    <Button name="IPO Result" link="https://iporesult.cdsc.com.np/"/>
    <Button name="Github" link="https://github.com/rupeshthapa123"/>
    <Button name="Amazon" link="https://amazon.com"/>
    </div>
}

export default App;