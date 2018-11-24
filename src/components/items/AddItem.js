import React from 'react';

const AddItem = (props) => {
    return (
        <div>
            <h1>Add New Item</h1>
            <form onSubmit={props.addItem}>
                <input type='text' name='name' placeholder='Name' value={props.item.name} onChange={props.onFieldChange} /> <br/>
                <input type='text' name='plantFamily' placeholder='Plant Family' value={props.item.plantFamily} onChange={props.onFieldChange} /> <br/>
                <button type='submit'>Add</button>
            </form>
        </div>
    );
}

export default AddItem;