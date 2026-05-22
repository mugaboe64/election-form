function vote(){

    var name =
    document.getElementById("name").value;

    var age =
    document.getElementById("age").value;

    var candidate =
    document.getElementById("candidate").value;

    if(age >= 18){

        if(candidate == "Alice" ||
           candidate == "John" ||
           candidate == "Peter"){

            document.write(
            "Vote submitted successfully"
            );

        }

        else{

            document.write(
            "Candidate not found"
            );

        }

    }

    else{

        document.write(
        "You cannot vote"
        );

    }

}