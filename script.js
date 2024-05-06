function insert_Row() {
    //Write your code here
	let addrow = document.getElementById("sampleTable")
	let row = document.createElement("tr")
	row.innerHTML = `
		<td>New cell1</td> 
		<td>New cell2</td>
	`
	addrow.prepend(row)
}
