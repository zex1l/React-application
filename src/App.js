import {Component} from 'react';


class WhoIAm extends Component
{
    constructor(props){
        super(props);
        this.state = {
            years: 27,
            position: ''
        }
    }

    nextYear = () => {

        this.setState(state => ({

            years: this.state.years + 1
        }))
    }

    commitInputChanges = (e) => {
        this.setState({
            position: e.target.value
        })

    } 

    render()
    {
        const {name, surname, link} = this.props;
        const {position, years} = this.state;
        return(
            <div className="">
                <button onClick = {this.nextYear}>+++</button>
                <h1>My name is {name()}, surname - {surname}, 
                    age - {years}, posotion - {position}</h1>
                <a href={link}>My profile</a>
                <form>
                    <span>Введите должность</span>
                    <input type="text" onChange={this.commitInputChanges}/>
                </form>
            </div>
        )
    }
}

const App = () => {
    return(
        <div className="App">
            <WhoIAm name={() => {return "Andrey"}} surname="Smith" link="google.com" />
            <WhoIAm name={() => {return "Andrey"}} surname="Krivorukov" link="google.com" />
        </div>
    )
}

export default App;