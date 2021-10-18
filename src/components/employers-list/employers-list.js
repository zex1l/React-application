import EmployersListItem from "../employers-list-item/employers-list-item";


import './employers-list.css';

const EmployersList = ({data, onDelete, onTogleProp, onUpdateSalary_1}) => {

    const elements = data.map(item => {
        
        return (
            <EmployersListItem key={item.id} 
                                name={item.name} 
                                salary={item.salary} 
                                increase={item.increase}
                                like={item.like}
                                onDelete={() => onDelete(item.id)}
                                //e.currentTarget.getAttribute('data-toggle') - получаем атрибут data-toggle
                                onTogleProp={(e) => onTogleProp(item.id, e.currentTarget.getAttribute('data-toggle'))}
                                />
        )
    });

    

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployersList;