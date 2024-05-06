function insert_Row() {
    //Write your code here
	let addrow = document.getElementById("sampleTable")
	let row = document.createElement("tr")
	row.innerHTML = `
		<td>New Cell1</td> 
		<td>New Cell2</td>
	`
	addrow.prepend(row)
}
