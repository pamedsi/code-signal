boolean solution(int yourLeft, int yourRight, int friendsLeft, int friendsRight) {
    int myWeakestArm = yourLeft, myFriendsWeakestArm = friendsLeft;
    int myStrongestArm = yourLeft, myFriendsStrongestArm = friendsLeft;
    
    if (yourRight < myWeakestArm) myWeakestArm = yourRight;
    if (friendsRight < myFriendsWeakestArm) myFriendsWeakestArm = friendsRight;
    if (yourRight > myStrongestArm) myStrongestArm = yourRight;
    if (friendsRight > myFriendsStrongestArm) myFriendsStrongestArm = friendsRight;
    
    return myWeakestArm == myFriendsWeakestArm && myStrongestArm == myFriendsStrongestArm;
}