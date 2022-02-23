$(document).ready(function() {
    
    $(".primaryContained").on('click', function() {
        $(".comment").addClass("commentClicked");
    });
    $("textarea").on('keyup.enter', function() {
        $(".comment").addClass("commentClicked");
    });
});
new Vue ({
    el: "#app",
    data:{
        title: 'Add a comment',
        newItem: '',
        item: [],
    },
    methods: {
        addItem () {
            this.item.push(this.newItem);
            this.newItem = "";
        }
    }
});

var counter = 0;
$("#plus").click(function(){
    counter++;
    $("#count").text(counter);
});
$("minuts").click(function(){
    counter--;
    $("#count").text(counter);
})