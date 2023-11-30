
fetch('data.json')
.then(response => response.json())
.then(data => {
  
  populateList(data);
})
.catch(error => console.error('Error fetching data:', error));

function populateList(data) {
var listContainer = document.getElementById('listContainer');


data.forEach(item => {
  var listItem = document.createElement('li');
  listItem.onclick = function() {
    showPopup(item.title, item.content, item.popuplink);
  };

  var img = document.createElement('img');
  img.src = item.imageLink;
  img.alt = 'Placeholder Image';

  var span = document.createElement('span');
  span.innerText = item.title;
  

  listItem.appendChild(img);
  listItem.appendChild(span);
  listContainer.appendChild(listItem);
});
}

function showPopup(title, content, popuplink) {
var popup = document.getElementById('popup');
document.getElementById('popupTitle').innerText = title;
document.getElementById('popupContent').innerText = content;
document.getElementById('popupImage').src = popuplink;
popup.style.display = 'block';
}

function closePopup() {
var popup = document.getElementById('popup');
popup.style.display = 'none';
}

function downloadFile() {
alert('Simulating file download. Replace this with your download logic.');
closePopup();
}