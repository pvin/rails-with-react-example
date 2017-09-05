var AllItems = React.createClass({

    render() {
        console.log('4444');
        var items= this.props.items.map((item) => {

        //var items = this.state.items.map((item) => {
            return (
                <div key={item.id}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                </div>
            )
        });

        return (
            console.log('5555'),
            <div>
            {items}
            </div>
        )
    }
});
