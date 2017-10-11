var Cast = {};

Cast.Actor = function(firstName, lastName, role)
{
    this.FirstName = firstName;
    this.LastName = lastName; 
    this.Role = role;
}

Cast.Actor.prototype.GetNameAndRole = function ()
{
    return this.FirstName + " " + this.LastName + " played the role of " + this.Role + ".";
}

Cast.Bill = new Cast.Actor("Bill", "Murray", "Dr. Peter Venkman");
Cast.Dan = new Cast.Actor("Dan", "Akroyd", "Dr. Raymond Stantz");
Cast.Sigourney = new Cast.Actor("Sigourney", "Weaver", "Dana Barrett");
Cast.Harold = new Cast.Actor("Harold", "Ramis", "Dr. Egon Spengler");
Cast.Rick = new Cast.Actor("Rick", "Moranis", "Louis Tully");
Cast.Annie = new Cast.Actor("Annie", "Potts", "Janine Melnitz");
Cast.William = new Cast.Actor("William", "Atherton", "Walter Peck");
Cast.Ernie = new Cast.Actor("Ernie", "Hudson", "Winston Zeddmore");

document.body.innerHTML = "The main cast of Ghostbusters...";
document.body.innerHTML += "<br/>";
document.body.innerHTML += Cast.Bill.GetNameAndRole();
document.body.innerHTML += "<br/>";
document.body.innerHTML += Cast.Dan.GetNameAndRole();
