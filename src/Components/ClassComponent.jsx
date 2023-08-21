import React from 'react'

export default class ClassComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Facundo'
        }
        console.log('Se creó el constructor')
    }

    componentDidMount() {
        console.log('Se montó el componente de clase')
    }
    componentDidUpdate(){
        console.log('Se va a ejecutar cuando se actualiza el componente de clase')
    }
    componentWillUnmount(){
        console.log('Se desmontó el componente de clase')
    }
    render() {
        console.log('Se ejecutó el render')
        return(
            <div>
                
                <h1>Componente de clase</h1>
                <h1>Hola, {this.state.name}.</h1>
                <button onClick={() => this.setState({name: 'Flor'})}>Este no es mi nombre</button>
            </div>
        )
    }
}