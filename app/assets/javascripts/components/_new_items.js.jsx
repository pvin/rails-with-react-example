var NewItem= React.createClass({
    handleClick() {
        console.log('8888')
        var name    = this.refs.name.value;
        var description = this.refs.description.value;

        $.ajax({
            url: '/api/v1/items',
            type: 'POST',
            data: { item: { name: name, description: description } },
            success: (item) => {
                this.props.handleSubmit(item);
            }
        });


    },
    render() {
        return (
        console.log('9999'),
            <div>
                <input ref='name' placeholder='Enter the name of the item' />
                <input ref='description' placeholder='Enter a description' />
                <button onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
});