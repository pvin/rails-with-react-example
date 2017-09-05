var Body = React.createClass({

    getInitialState() {
        console.log('1111');
        return {items: []}
    },

    componentDidMount() {
        console.log('2222');
        $.getJSON('/api/v1/items.json', (response) => {
            console.log('3333');
            this.setState({items: response})
        });
    },

    handleSubmit(item) {
        console.log('7777')
        var newState = this.state.items.concat(item);
        this.setState({ items: newState })
    },

    render() {
        return (
            console.log('66666'),
            <div>
                <NewItem handleSubmit={this.handleSubmit}/>
                <AllItems items={this.state.items} />
            </div>
        )
    }
});