import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form'

import './app.css';

class App extends Component
{
    constructor(props)
    {
        super(props)
        
        this.state = {
            data: [
                {name:"Andrey M." , salary: 800 , increase: false,like: false, id: 1},
                {name:"Maks G." , salary: 8000  , increase: true ,like: true, id: 2},
                {name:"Filipp S." , salary: 3000, increase: false,like: false, id: 3}
            ],
            term: '',
            filter: ''
        }
        this.maxId = 4;
    }

    // Получаем id и удаляем его из массива
    deleteItem = (id) => {
        this.setState(({data}) => {
            // Соблюдаем иммутабельность в js 

            const newArr = data.filter(item => item.id !== id);
            return {
                data: newArr
            }
        })
    }

    addItem = (name, salary) => {
        if(name.length > 3 && salary !== 0 )
        {
            const newItem = {
                name: name,
                salary: salary,
                increase: false,
                like: false,
                id: this.maxId++
            }
    
            this.setState(({data}) => {
    
                const newArr = [...data, newItem];
                
                return {
                    data: newArr
                }
            })
        }
    }



    onTogleProp = (id, prop) => {
        // Первый вариант
        /* this.setState(({data}) => {

            // ищем индекс
            const index = data.findIndex(elem => elem.id === id);

            // Сохпаняем объект массива в переменую
            const old = data[index];
            // Меняем состояние
            const newItem = {...old, increase: !old.increase};

            // Создаем новый массив
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)];

            return {
                data: newArr
            }
        }) */

        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id)
                {
                    return {...item, [prop]: !item[prop]}
                    
                }
                return item;
            })
        }))

    }

    

    // Search met
    searchEmp = (items, term) => {
        if (term.length === 0)
        {
            return items;
        }
        return items.filter (item => {
            return item.name.indexOf(term) > -1;
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term: term})
    }


    // Filter salary
    filterPost = (items, filter) => {
        switch (filter)
        {
            case 'like':
                return items.filter(item => item.like);
            case 'moreThen1000':
                return items.filter(item => item.salary>1000)
            case 'all':
                return items
            default:
                return items
        }
    }

    onUpdateFilter = (filter) => {
        this.setState({filter: filter})
    }


    render()
    {
         const {data, term, filter} = this.state;
         const lenEmpoyers = data.length;
         const likeEmpolyers = data.filter(item => {
            if(item.increase)
            {
                return item;
            }
         })
        
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                <AppInfo
                lenEmpoyers={lenEmpoyers}
                likeEmpolyers={likeEmpolyers.length}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch_1={this.onUpdateSearch}/>
                    <AppFilter
                    onUpdateFilter_1={this.onUpdateFilter}/>
                </div>
    
                <EmployersList 
                    data={visibleData} 
                    onDelete={this.deleteItem}
                    onTogleProp={this.onTogleProp}
                    />

                <EmployersAddForm
                    onAddItem={this.addItem}/>
            </div>
        )
    
    }
}



export default App;