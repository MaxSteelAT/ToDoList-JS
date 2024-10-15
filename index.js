const inputText = document.querySelector('#inputText')
const addText = document.querySelector('#addText')
const errorMessage = document.querySelector('#errorMessage')
const itemsList = document.querySelector('#itemsList')

addText.addEventListener('click', function(){
	const activity = inputText.value

	errorMessage.textContent = ''

	if (activity === '') {
 		errorMessage.textContent = "Agrega una actividad."
		return;
  }

 	itemsList.innerHTML += `
  	<div class="item">
    	<input type="checkbox" id="checkbox" value="first_checkbox" /> ${activity} 
    </div>`
    
  inputText.value = ''
  
  inputText.focus()

})

const inputImport = document.querySelector('#secondInput')
const button = document.querySelector('#secondAdd')
const secondErrorMessage = document.querySelector('#second-errorMessage')
const importActivitiesList = document.querySelector('#itemsList-2')

button.addEventListener('click', function() {
	const addImportActivities = inputImport.value
	secondErrorMessage.textContent = ''

	if (addImportActivities === '') {
		secondErrorMessage.textContent = "Agrega una actividad."
	 return;
 }
	let importActivities = 
		
	 importActivitiesList.innerHTML += `
		<div class='item'>
			<input type="checkbox" id="checkbox-2" value="" /> ${addImportActivities} 
		</div>`
	
		inputImport.value = ''
  
		inputImport.focus()
 
		
})