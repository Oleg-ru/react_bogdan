const personsData = async () => {
    return await fetch("./data.json").then(response => response.json());
}

export default personsData;