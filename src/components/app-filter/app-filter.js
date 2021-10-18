
import { Component } from "react";
import "./app-filter.css";

class AppFilter extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            filter: ''
        }
    }


    onUpdateFilter = (elem) => {
        const filter = elem.target.name;
        this.setState({filter: filter});

        this.props.onUpdateFilter_1(filter);
        
    }

    render()
    {
        return(
            <div className="btn-group">
                <button className="btn btn-outline-light"
                type="button"
                name="all"
                onClick={this.onUpdateFilter}>
                    Все сотрудники
                </button>
    
                <button className="btn btn-outline-light"
                type="button"
                name="like"
                onClick={this.onUpdateFilter}>
                    На повышение
                </button>
                
                <button className="btn btn-outline-light"
                type="button"
                name="moreThen1000"
                onClick={this.onUpdateFilter}>
                    З\П больше 1000$
                </button>
            </div>
        )
    }
    
}

export default AppFilter;