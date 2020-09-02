function Order(size, crust, toppings){
    this.size = size;
    this.crust = crust;
    this.toppings = top;
}

$(document).ready(function(){
    $("form#make-order").click(function(event){
        event.preventDefault();

        var orderedSize = $("#sizes").val("")
        var orderedCrust = $("#crusts").val("")
        var orderedToppings = $("#toppings").val("")
        var newOrder = new Order(orderedToppings, " Pizza", orderedCrust, orderedSize)


        $("option#sizes").val("");
        $("option#crusts").val("");
        $("option#toppings").val("");

       $("#order").last().click(function(){
        $("#new-size").text(newOrder.orderedSize)
        $("#new-crusts").text(newOrder.orderedCrust)
        $("#new-topping").text(newOrder.orderedToppings)
       })
        

    })
})