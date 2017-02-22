import { Injectable } from '@angular/core';
import * as _ from "lodash";

@Injectable()
export class FriendService {

  constructor() { }

  // TODO llamar servicio posta
  getFriends(userId: string) {
    let array = [];
    array.push({ id: '58aaf6304fabf427e0acc08e', username: 'Mari19', nickname: 'María Carolina Suarez', avatarUrl: 'assets/images/amigos.jpg' });
    array.push({ id: '58aaf6304fabf427e0acc08f', username: 'Mari18', nickname: 'María Del Valle', avatarUrl: 'assets/images/amigos.jpg' });
    return array;
  }

  selectedFriend(friendId: string, friendsArray) {
    let isIncluded = _.includes(friendsArray, friendId);
    return isIncluded;
  }

  toggleFriend(friendId: string, selectedFriends: string[]) {
    let friendIndex = _.findIndex(selectedFriends, function(friend) {
      return friend === friendId;
    });
    if (friendIndex >= 0) {
      selectedFriends.splice(friendIndex, 1);
    } else {
      selectedFriends.push(friendId);
    }
  }

  toggleAllFriends(friends: string[], finalArray: string[]) {
    if (friends.length === finalArray.length) {
      finalArray.splice(0, finalArray.length);
      console.log('Remove all: ' + finalArray);
    } else {
      for (let i in friends) {
        let isIncluded = _.includes(finalArray, friends[i]['id']);
        if (!isIncluded) {
          finalArray.push(friends[i]['id']);
        }
      }
      console.log('Add all: ' + finalArray);
    }
    return finalArray;
  }

}
