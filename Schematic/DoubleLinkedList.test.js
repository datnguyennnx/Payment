"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DoubleLinkedList_1 = require("./DoubleLinkedList");
var Account_1 = require("./Account");
var accout1 = new Account_1.AccountUser("Dat Nguyen", "0903260302", "Official.nguyendat@gmail.com", 0);
var accout2 = new Account_1.AccountUser("Tran Nguyen Anh Khoa", "0903260302", "Official.anhkhoa@gmail.com", 100);
var accout3 = new Account_1.AccountUser("Mai Hong Phong", "0903260302", "Official.hongphong@gmail.com", 200);
// const accout4 = new AccountUser("Duy Thanh", "0903260302", "Official.duythanh@gmail.com", 3000)
var accout5 = new Account_1.AccountUser("Minh Khoi", "0903260302", "Official.minhkhoi@gmail.com", 4000);
var accout6 = new Account_1.AccountUser();
accout6.setName("Phan Minh Nhat");
var newArray = new DoubleLinkedList_1.DoubleLinkedList;
newArray.addFirst(accout1);
newArray.addLast(accout2);
newArray.removeFirst();
newArray.addFirst(accout3);
// newArray.push(accout4)
// newArray.addLast(accout5)
newArray.addLast(accout6);
newArray.printAll();
console.log(accout1.getName());
console.log(accout1.getInformation());
console.log("Index in array: ", newArray.indexOf(accout3));
console.log("Length: ", newArray.length());
