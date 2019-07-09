import React from 'react'

export class Filter extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            projectsFilter: 'Все проекты'
        }
    }

    handleChange(projectsFilter) {
        console.log(projectsFilter);
        this.props.onChange(tData => projectsFilter === 'Все проекты' || tData.transaction.project.name === projectsFilter)

        this.setState({
            projectsFilter
        })
    }

    render() {
        const projectNamesSet = new Set()

        this.props.data.forEach(obj => {
            projectNamesSet.add(obj.transaction.project.name)
        })

        const projectNames = Array.from(projectNamesSet)
  
        return (
            <div>
                <select onChange={event => this.handleChange(event.target.value)}>
                    <option>Все проекты</option>
                    {
                        projectNames.map((name) =>
                            <option key={name}>{name}</option>
                        )
                    }
                </select>
            </div>
        )
    }
}