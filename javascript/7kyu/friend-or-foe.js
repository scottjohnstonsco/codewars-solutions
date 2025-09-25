function friend(friends){
  const friendList = friends.filter( function (name){
   return name.length ===  4;
  });
  return friendList;
}