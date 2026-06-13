document.getElementById("details")
.addEventListener("submit",function(event)
{
    event.preventDefault();
    let Name = document.getElementById("name").value;
    let Email = document.getElementById("email").value;
    let Phone = document.getElementById("phone").value;
    let Age = document.getElementById("age").value;
    let Address = document.getElementById("address").value;
    let Date = document.getElementById("date").value;
    let Starting  = document.getElementById("place").value;
    let Arrival  = document.getElementById("place").value;

    let Gender = document.querySelector('input[name="gender"]:checked').value;

    let Documents=[];
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(function(item) {
        Document.push (item.value);     
    });

    document.getElementById("p1").innerText="Name:"+Name;
    document.getElementById("p2").innerText="Email:"+Email;
    document.getElementById("p3").innerText="Phone:"+Phone;
    document.getElementById("p4").innerText="Age:"+Age;
    document.getElementById("p5").innerText="Gender:"+Gender;
    document.getElementById("p6").innerText="Address:"+Address;
    document.getElementById("p7").innerText="Starting :"+Starting;
    document.getElementById("p8").innerText="Arrival :"+Arrival;
    document.getElementById("p9").innerText="Documents:"+Documents;

    let image = document.getElementById("image").files[0];
    if(image)
    {
        let read = new FileReader();
        read.onload = function(e)
        {
            document.getElementById("dp").src=e.target.result;
        };
        read.readAsDataURL(image);
    }
});