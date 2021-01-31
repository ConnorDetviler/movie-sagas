function AddMovie() {
    return (
        <div>
            <form action="">
                <input placeholder="title" type="text"/>
                <input placeholder="image url" type="text"/>
                <textarea placeholder="description"></textarea>
                <select>
                    <option defaultValue="1">Adventure</option>
                    <option value="2">Animated</option>
                    <option value="3">Biographical</option>
                    <option value="4">Comedy</option>
                    <option value="5">Disaster</option>
                    <option value="6">Drama</option>
                    <option value="7">Epic</option>
                    <option value="8">Fantasy</option>
                    <option value="9">Musical</option>
                    <option value="10">Romantic</option>
                    <option value="11">Science Fiction</option>
                    <option value="12">Space-Opera</option>
                    <option value="13">Superhero</option>
                </select>
                <input type="submit"/>
            </form>
            <button>cancel</button>
        </div>
    )
}

export default AddMovie