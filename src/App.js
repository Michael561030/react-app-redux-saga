import React, { Component } from 'react';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            products: []
        };
    }

    componentDidMount() {
        fetch("http://demo1656942.mockable.io/products.json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        products: result.products
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, products } = this.state;
        if (error) {
            return <div>Помилка: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Завантаження...</div>;
        } else {
            return (
                <ul>
                    {products.map(product => (
                        <li key={product.name}>
                            <i>Name: </i>{product.brand} <br/>
                            <i>Price: </i>{product.price} <br/>
                            <i vertical-align="top">Photo: </i> <img src={product.img} alt={product.img} width="100px" height="100px"/>
                            <hr/>
                        </li>
                    ))}
                </ul>
            );
        }
    }
}
export default App;