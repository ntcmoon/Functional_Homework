axios.get("https://dev.codekit.co/devcamp-api/friends.txt").then((reponse) => {
    const allFriends = reponse.data;

    console.log(allFriends)

    let maleFriends = allFriends.filter((obj) => {
        return obj.gender == "male" && obj.friends.length > 2;
    }).map((obj) => {
        return  (obj.name , obj.gender , obj.company , obj.email , obj.friends , obj.balance)
    })
    console.log(maleFriends)


})
.catch((err) => console.log(err));
