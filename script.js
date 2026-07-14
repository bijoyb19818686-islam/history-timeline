const form=document.getElementById("eventForm");

form.addEventListener("submit",function(e){

e.preventDefault();

const year=document.getElementById("year").value;
const title=document.getElementById("title").value;
const description=document.getElementById("description").value;

const timeline=document.getElementById("timeline");

timeline.innerHTML+=`
<div class="timeline-item">
<h3>${year} - ${title}</h3>
<p>${description}</p>
</div>
`;

form.reset();

});
