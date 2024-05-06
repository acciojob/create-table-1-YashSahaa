function insert_Row() {
    //Write your code here
	let table = document.getElementById("sampleTable");
    let row = table.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.textContent = "New Cell1";
    cell2.textContent = "New Cell2";
	// let addrow = document.getElementById("sampleTable")
	// let row = document.createElement("tr")
	// row.innerHTML = `
	// 	<td>New Cell1</td> 
	// 	<td>New Cell2</td>
	// `
	// addrow.prepend(row)
}
